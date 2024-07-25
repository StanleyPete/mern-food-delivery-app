import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://stanleypete:<password>@cluster0.mqrsves.mongodb.net/mern-delivery-app").then(() => {
        console.log("Data base connected");
    });
}