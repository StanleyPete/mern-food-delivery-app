import express from "express";
import { addProduct, listProducts, removeProduct } from "../controllers/productsController.js";
import multer from "multer";

const productsRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage: storage});

//routes
productsRouter.post("/add", upload.single("image"), addProduct);
productsRouter.post("/remove", removeProduct);
productsRouter.get("/product_list", listProducts);

export default productsRouter;