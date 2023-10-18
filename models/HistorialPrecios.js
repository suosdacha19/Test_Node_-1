const mongoose = require('mongoose');

const HistorialPrecioSchema = new mongoose.Schema({
  idArticulo: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('historialprecios', HistorialPrecioSchema);