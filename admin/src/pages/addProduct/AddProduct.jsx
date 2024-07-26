import React from 'react'
import './addProduct.css'
import { assets } from '../../assets/assets'

const AddProduct = () => {
  return (
    <div className="add-product">
        <form className="flex-column">
            <div className="upload-image flex-column">
                <p>Upload image</p>
                <label htmlFor="image">
                    <img src={assets.upload_area} alt="Upload area image" />
                </label>
                <input type="file" id="image" hidden required/>
            </div>
            <div className="add-product-name flex-column">
                <p>Product name</p>
                <input type="text" name="name" placeholder="Type here"/>
            </div>
            <div className="add-product-description flex-column">
                <p>Product description</p>
                <textarea name="description" rows="6" placeholder="Write content here" required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-column">
                    <p>Product category</p>
                    <select name="category" >
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Dairy">Dairy</option>
                    </select>
                </div>
                <div className="add-price flex-column">
                    <p>Product price</p>
                    <input type="number" name="price" placeholder="$20"/>
                </div>
            </div>
            <button type="submit" className="add-product-button">Add product</button>
        </form>
      
    </div>
  )
}

export default AddProduct
