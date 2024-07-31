import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { listOrders, placeOrder, userOrders, verifyOrder } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post("/place_order", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/user_orders", authMiddleware, userOrders);
orderRouter.get("/list_orders", listOrders);

export default orderRouter;