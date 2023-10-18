const Producto = require('../../../../models/Producto');
const HistorialPrecio = require('../../../../models/HistorialPrecios');

module.exports = async ({body, params: {id}}) => {
  try {
    const {nombre, descripcion, sku, imagen, precio, stock, categoria} = body;
    let producto = await Producto.findById(id);
    let historialPrecio = null;
    if (!producto) throw new Error('Producto no encontrado');
    if (producto.precio !== precio) {
      historialPrecio = new HistorialPrecio({
        idArticulo: producto._id,
        precio: precio
      })
    }
    producto.nombre = nombre;
    producto.descripcion = descripcion;
    producto.sku = sku;
    producto.imagen = imagen;
    producto.precio = precio;
    producto.stock = stock;
    producto.categoria = categoria;
    producto = await Producto.findOneAndUpdate({_id: id}, producto, {new: true}); // El new true es para que devuelva el producto actualizado
    await historialPrecio.save();
    return producto;
  } catch (error) {
    throw error;
  }
}