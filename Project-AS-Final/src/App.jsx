import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NewProductForm from './pages/NewProductForm';
import EditProduct from './pages/EditProduct';  
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products/edit/:id/" element={<EditProduct />} />  
      <Route path="/new-product" element={<NewProductForm />} />
    </Routes>
  </Router>
);

export default App;

