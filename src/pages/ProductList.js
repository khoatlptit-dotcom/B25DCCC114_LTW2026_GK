import React from 'react';
import ProductTable from '../components/ProductTable';

const ProductList = ({ products, onDelete, onChangeStock }) => (
  <div>
    <ProductTable
      products={products}
      onDelete={onDelete}
      onChangeStock={onChangeStock}
    />
  </div>
);

export default ProductList;