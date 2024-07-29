import express from 'express'
import { addToBasket, removeFromBasket, fetchBasket } from '../controllers/basketController.js'
import authMiddleware from '../middleware/auth.js';

const basketRouter = express.Router();

basketRouter.post("/add", authMiddleware, addToBasket);
basketRouter.post("/remove", authMiddleware, removeFromBasket);
basketRouter.post("/fetch", authMiddleware, fetchBasket);

export default basketRouter