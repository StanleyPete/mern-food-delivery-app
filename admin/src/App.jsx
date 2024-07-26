import React from 'react'
import NavMenu from './components/navMenu/NavMenu'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './pages/addProduct/AddProduct'
import ListProducts from './pages/listProducts/ListProducts'
import Orders from './pages/orders/Orders'


const App = () => {
  return (
    <div>
      <NavMenu/>
      <hr />
      <div className="app-container">
        <Sidebar/>
        <Routes>
          <Route path="/add_product" element={<AddProduct/>}/>
          <Route path="/list_products" element={<ListProducts/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
