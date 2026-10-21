import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatMoney } from '../data';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      {product ? (
        <div>
          <p><strong>Tên sản phẩm:</strong> {product.name}</p>
          <p><strong>Danh mục:</strong> {product.category}</p>
          <p><strong>Giá:</strong> {formatMoney(product.price)}</p>
          <p><strong>Tồn kho:</strong> {product.stock}</p>
        </div>
      ) : (
        <p>Không tìm thấy sản phẩm</p>
      )}
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ProductDetail;