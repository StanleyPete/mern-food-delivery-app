import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import Stripe from 'stripe'
import 'dotenv/config'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


//Placing user order from fronend
const placeOrder = async (req, res) => {

    const fe_url = "http://localhost:5173";

    try {
        //Creating new order:
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        //Saving the order in db:
        await newOrder.save();
        //Clearing user basket data after an order is placed:
        await userModel.findByIdAndUpdate(req.body.userId, {userBasket: {}});
        

        //Stripe payment setup:
            //Setting up line items for each product added to basket
            const line_items = req.body.items.map((item) => ({
                price_data: {
                    currency: "pln",
                    product_data: {
                        name: item.name
                    },
                    unit_amount: item.price*100*4
                },
                quantity: item.quantity
            }))
            //Additional delivery charge setup:
            line_items.push({
                price_data:{
                    currency: "pln",
                    product_data: {
                        name: "Delivery charges"
                    },
                    unit_amount: 2*100*4
                },
                quantity: 1
            })
            //Creating session
            const session = await stripe.checkout.sessions.create({
                line_items: line_items,
                mode: 'payment',
                success_url: `${fe_url}/verify?success=true&orderId=${newOrder._id}`,
                cancel_url: `${fe_url}/verify?success=false&orderId=${newOrder._id}`
            })

        res.json({success: true, session_url: session.url});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }

};

//Payment verification
const verifyOrder = async (req, res) => {
    const {orderId, success} = req.body;
    try {
        if (success==="true") {
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            res.json({success: true, message: "Paid"});
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({success: false, message:"Not paid"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

//User orders for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({userId: req.body.userId});
        res.json({success: true, data:orders});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export { placeOrder, verifyOrder, userOrders }