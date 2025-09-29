const express = require('express');
const mongoose = require('mongoose');
const product = require('../models/product');
const router = express.Router();    

router.get('/', async(req, res)=>{
    const products = await product.find();
    res.send(products);
});

//Add
router.post('/add', async(req, res)=>{
    const {name, price} = req.body;
    const newProduct = new product({name, price});
    await newProduct.save();
    res.send({status: 'ok'});
});

//delete product 
router.delete('/delete/:id', async(req, res)=>{
    await product.findByIdAndDelete(req.params.id);
    res.send({status: 'ok'});
});
module.exports = router;