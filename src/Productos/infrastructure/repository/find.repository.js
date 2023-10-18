const Producto = require('../../../../models/Producto');
module.exports = async ({params: {id}}) => {
  try {
    let producto = await Producto.findById(id);
    if (!producto) throw new Error('Producto no encontrado');
    return producto;
  } catch (error) {
    throw error;
  }
}