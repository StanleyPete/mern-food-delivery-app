import React from 'react'
import NavMenu from './components/navMenu/NavMenu'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './pages/addProduct/AddProduct'
import ListProducts from './pages/listProducts/ListProducts'
import Orders from './pages/orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <NavMenu/>
      <hr />
      <div className="app-container">
        <Sidebar/>
        <Routes>
          <Route path="/add_product" element={<AddProduct url={url}/>}/>
          <Route path="/list_products" element={<ListProducts url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
