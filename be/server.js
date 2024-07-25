import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import productsRouter from "./routes/productsRoute.js";

//app
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//data base connection
connectDb();

//API endpoints
app.use("/api/products", productsRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("Test")
});

app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
});



