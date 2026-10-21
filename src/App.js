import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/data/products.json')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Không tải được dữ liệu');
        setLoading(false);
      });
  }, []);

  const addProduct = (data) => {
    const maxId = products.reduce((max, p) => (p.id > max ? p.id : max), 0);
    setProducts([...products, { ...data, id: maxId + 1 }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const changeStock = (id, delta) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
      )
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} error={error} />}>
        <Route index element={<Home products={products} />} />
        <Route
          path="products"
          element={
            <ProductList
              products={products}
              onDelete={deleteProduct}
              onChangeStock={changeStock}
            />
          }
        />
        <Route path="products/new" element={<AddProduct onAdd={addProduct} />} />
        <Route path="products/:id" element={<ProductDetail products={products} />} />
      </Route>
    </Routes>
  );
};

export default App; 