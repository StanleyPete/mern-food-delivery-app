import React, { useEffect, useState } from 'react'
import './listProducts.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListProducts = ({url}) => {

  //Store the products from the database in state variable:
  const [products, setProductsList] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(`${url}/api/products/product_list`);
    if (response.data.success) {
      setProductsList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  
  const removeProduct = async(productId) => {
    const response = await axios.post(`${url}/api/products/remove`, {id: productId});
    await fetchProducts(); //products rendering refresh
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(()=>{
    fetchProducts();
  },[])

  return (
    <div className="product-list">
      <p>Product List</p>
      <div className="product-table">
        <div className="product-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {products.map((item, index) => {
          return (
            <div key={index} className="product-table-format">
              <img src={`${url}/images/`+item.image} alt="Product image" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeProduct(item._id)}className="cursor">X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProducts
