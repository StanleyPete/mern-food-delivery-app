import productsModel from "../models/productsModel.js";
import fs from 'fs';

//add product
const addProduct = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    
    const product = new productsModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await product.save();
        res.json({success: true, message: "Product added"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

//remove product
const removeProduct = async (req, res) => {
    try {
        //finding particular item in the database:
        const product = await productsModel.findById(req.body.id);
        //deleting image file from uploads folder:
        fs.unlink(`uploads/${product.image}`, () => {});
        //deleting from database
        await productsModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    } 
};

//all products list
const listProducts = async (req, res) => {
    try {
        const products = await productsModel.find({});
        res.json({success: true, data: products});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};


export {addProduct, listProducts, removeProduct};
