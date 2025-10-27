import express from 'express';
import mongoose from 'mongoose';
import Product from "../models/product.model.js";
import { getProduct, updateProduct } from '../controllers/product.controller.js';
import { postProduct } from '../controllers/product.controller.js';
import { deleteProduct } from '../controllers/product.controller.js';
const router=express.Router();

router.post('/',postProduct)

router.get('/',getProduct)

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct)

export default router;