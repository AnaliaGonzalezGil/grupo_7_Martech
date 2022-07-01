const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idProducto = req.params.id;
		let product;
		for (let i=0; i<products.length; i++) {
            if (products[i].id == idProducto) {
				product = products[i];
			}
		}
		res.render('detalle', { product } );
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('agregarProductos')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let product = req.body;
		product.image = req.file.filename;
		product.id = (products.length + 1);
		products.push(product);
		fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
		res.redirect('/products')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id;
		globalThis.productToEdit = null;
		for (let i=0; i<products.length; i++) {
			if (products[i].id == id) {
				productToEdit = products[i];
			}
		}
		res.render('editarProductos', { productToEdit })
	},
	// Update - Method to update
	update: (req, res) => {
		let id = productToEdit.id;
		console.log(id)
		for (let i=0; i<products.length; i++) {
			if (products[i].id == id) {
				products[i].nombreProducto = req.body.nombreProducto;
				products[i].precioVenta = req.body.precioVenta;
				products[i].modelo = req.body.modelo;
				products[i].estadoEquipo = req.body.estadoEquipo;
				//products[i].description = req.body.description;
			}
		}
		fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
		res.redirect('/products/')
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		console.log(id);
		products = products.filter(function(product){
			return product.id != id;
		})
		fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
		res.redirect('/products/')
	},
};

module.exports = controller;
module.exports = productsFilePath;