import React from 'react'
import { Routes, Route } from 'react-router'
import './App.css'

import Navbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct'
import ProductsDetails from './pages/ProductsDetails'
import ProductsList from './pages/ProductsList'
import Homepage from './pages/Homepage'
import NoPageFound from './pages/NoPageFound'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/new-Product' element={<CreateProduct />} />
        <Route path='/Products/:productId' element={<ProductsDetails />} />
        <Route path='/*' element={<NoPageFound />} />
      </Routes>
    </div >
  )
}

export default App
