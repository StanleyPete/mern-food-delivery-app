import express from "express";
import { addProduct } from "../controllers/productsController.js";
import multer from "multer";

const productsRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage: storage});

productsRouter.post("/add", upload.single("image"), addProduct);

export default productsRouter;