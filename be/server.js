import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";

//app
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//data base connection
connectDb();

app.get("/", (req, res) => {
    res.send("Test")
});

app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
});



