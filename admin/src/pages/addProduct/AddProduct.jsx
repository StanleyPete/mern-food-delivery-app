import React, { useEffect, useState } from 'react'
import './addProduct.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const AddProduct = ({url}) => {

    //Image state:
    const [image, setImage] = useState(false);

    //Product details state:
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        price: "",
        category: "Fruits"
    });

    //Updating product details variable function:
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProductDetails(productDetails => ({...productDetails, [name]: value}));
    };

        //Test - updating product details:
        // useEffect(() => {
        //     console.log(productDetails)
        // },[productDetails])
    

    //API call:
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        //New object 'formData' where 'key', 'value' properties are added with an append method
        const formData = new FormData();
        formData.append("name", productDetails.name);
        formData.append("description", productDetails.description);
        formData.append("price", Number(productDetails.price));
        formData.append("category", productDetails.category);
        formData.append("image", image);
        
        //Actual API call
        const response = await axios.post(`${url}/api/products/add`, formData);
        
        if (response.data.success) {
            setProductDetails({
                name: "",
                description: "",
                price: "",
                category: "Fruits"
            });
            setImage(false);
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    };

  return (
    <div className="add-product">
        <form className="flex-column" onSubmit={onSubmitHandler}>
            <div className="upload-image flex-column">
                <p>Upload image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload area image" />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required/>
            </div>
            <div className="add-product-name flex-column">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={productDetails.name} type="text" name="name" placeholder="Type here"/>
            </div>
            <div className="add-product-description flex-column">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={productDetails.description} name="description" rows="6" placeholder="Write content here" required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-column">
                    <p>Product category</p>
                    <select onChange={onChangeHandler} name="category" >
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Dairy">Dairy</option>
                    </select>
                </div>
                <div className="add-price flex-column">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={productDetails.price} type="number" name="price" placeholder="$20"/>
                </div>
            </div>
            <button type="submit" className="add-product-button">Add product</button>
        </form>
      
    </div>
  )
}

export default AddProduct
