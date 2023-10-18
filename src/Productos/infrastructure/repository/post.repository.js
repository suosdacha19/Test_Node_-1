const Producto = require('../../../../models/producto');
const HistorialPrecio = require('../../../../models/HistorialPrecios');
module.exports = async ({body}) => {
  try {
    let producto = new Producto(body);
    await producto.save();
    let historialPrecio = new HistorialPrecio({
      idArticulo: producto._id,
      precio: producto.precio
    })
    await historialPrecio.save();
    return producto;
  } catch (error) {
    throw error;
  }
}