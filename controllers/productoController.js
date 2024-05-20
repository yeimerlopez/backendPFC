const Producto = require('../models/producto_model');


/**Se trajo asi completodel otro proyecto */

/**funcion crear un producto */
exports.createProduct = async(req, res) => {
    try {
        let Products;
        products = new Producto(req.body);
        await products.save();
        res.send(products);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear el producto')
    }
}


/***
 * Funcion getAllProducts
 */

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Producto.find();
        res.json(products)
    } catch (error) {
        console.log(error) 
        res.status(500).send('Error al buscar los productos')
    }
}



/**
 * Funcion para buscar un producto por ID
*/

exports.getProductById = async (req, res) => {
    try {
      const productoId = await Producto.findById(req.params.id);
      if(!productoId){
        res.status(404).json({msg: `Cliente con id ${req.params.id} no encontrado`})
        return
      }
      res.send(productoId)
    } catch (error) {
      console.log(error) 
      res.status(500).send('Error al buscar un  Producto por ID')
    }
    
  }


/**
 * Funcion para actualizar un producto
 */

exports.updateProduct = async (req, res) => {
    try {
        const {nombre, codigo, precioVenta, cantidad, precioCompra,foto } = req.body;
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: `El producto con el id ${req.params.id} que intenta actualizar no existe`})
        }else{
            producto.nombre = nombre;
            producto.codigo = codigo;
            producto.precioVenta = precioVenta;
            producto.cantidad = cantidad;
            producto.precioCompra = precioCompra;
            producto.foto = foto;
            producto = await Producto.findByIdAndUpdate({ _id: req.params.id}, producto,{new:true});
            res.json(producto);
        }
    } catch (error) {
        console.log(error) 
        res.status(500).send(`Èl producto con el id ${req.params.id} no se pudo ser actualizado`)
    }
}

/**Funcion actualizar sara */
exports.updateProduct2 = async (req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate(
            { _id: req.params.id}, req.body);
        if(!producto)res.status(404).send('No existe un cliente con ese ID')
        else res.json(req.body);
        
        
    } catch (error) {
        console.log(error)
        
    }
}

/**+
 * Funcion actualizar Jose Julian
 */

exports.updateProduct3 = async (req, res) => {
    try {
        const updateProduct = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updateProduct){
            res.status(404).send('No existe un cliente con ese ID')
        }
        res.json(updateProduct);
        
    } catch (error) {
        console.log(error)
        res.status(500).send(`Èl producto con el id ${req.params.id} no se pudo ser actualizado`)
    }
}



/**
 * Funcion para eliminar un cliente por id
 * 
 */

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Producto.findById(req.params.id);
        if(!product){
            res.status(404).json({msg: 'No existe un cliente con ese ID'})
            return
        }
        await Producto.findOneAndDelete({ _id: req.params.id}); // este cliente en mayuscula hace referencia a el modelo
        res.json({msg: 'El Producto ha sido eliminado'})
        return
    } catch (error) {
        console.log(error) 
        res.status(500).send('Error al eliminar un  cliente por ID')
    }
}







