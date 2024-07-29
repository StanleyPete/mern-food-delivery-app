import userModel from "../models/userModel.js";

//add products to user basket
const addToBasket = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let userBasket = await userData.userBasket;
        if (!userBasket[req.body.itemId]) {
            userBasket[req.body.itemId] = 1
        } else {
            userBasket[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, {userBasket});
        res.json({success: true, message: "Added to basket"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

//remove products from user basket
const removeFromBasket = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let userBasket = await userData.userBasket;
        if (userBasket[req.body.itemId] > 0) {
            userBasket[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {userBasket});
        res.json({success:true, message: "Removed from basket"}); 
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

//fetch user basket data
const fetchBasket = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let userBasket = await userData.userBasket;
        res.json({success: true, userBasket})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

export {addToBasket, removeFromBasket, fetchBasket}