const Producto = require('../../../../models/producto');
module.exports = async ({query: {pageSize,pageIndex,search}}) => {
  try {
    const result = {};
    const filters = {};
    pageIndex = parseInt(pageIndex);
    pageSize = parseInt(pageSize);
    if (search) {
      filters.nombre = { $regex: '.*' + search + '.*' };
    }
    console.log(filters)
    result.datos = await Producto
      .find(filters)
      .sort({fechaCreacion: -1})
      .skip(pageSize * pageIndex || 0)
      .limit(pageSize || 3);
    result.total = await Producto.countDocuments();
    return result;
  } catch (error) {
    throw error;
  }
}