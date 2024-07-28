import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true}, //unique property ensures particular e-mail can be used only once
    password: {type: String, required: true},
    userBasket: {type: Object, default: {}}
}, {minimize: false}) // empty objects will not be removed from the database

//if the model is already created, then mongoose.models.user will be used, otherwise ongoose.model("user", userSchema);
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;