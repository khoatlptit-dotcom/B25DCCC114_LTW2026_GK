import React from 'react';
import { formatMoney } from '../data';

const Home = ({ products }) => {
  const total = products.length;
  const lowCount = products.filter((p) => p.stock < 5).length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);

  return (
    <div>
      <h1>Kho hàng</h1>
      <p><strong>Tổng số sản phẩm:</strong> {total}</p>
      <p><strong>Số sản phẩm sắp hết hàng:</strong> {lowCount}</p>
      <p><strong>Tổng giá trị kho:</strong> {formatMoney(totalValue)}</p>
    </div>
  );
};

export default Home;