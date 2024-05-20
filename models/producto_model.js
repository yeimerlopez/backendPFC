const mongoose = require  ('mongoose');

/**Se trajo asi completodel otro proyecto */

const productoSchema =  mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    codigo:{
        type: String,
        required: true  
    },
    precioVenta:{
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true  
    },
    precioCompra:{
        type: Number,
        required: true
    },
    foto:{
        type: String,
        required: true  
    },

}, { versionkey: false});

module.exports = mongoose.model('Producto', productoSchema)