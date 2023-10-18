const Producto = require('../../../../models/producto');
module.exports = async ({params: {id}}) => {
  try {
    await Producto.findOneAndRemove({ _id: id });
    return { msg: 'Producto eliminado'};
  } catch (error) {
    throw error;
  }
}