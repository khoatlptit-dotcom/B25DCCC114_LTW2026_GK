import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import ProductTable from '../components/ProductTable';

const ProductList = ({ products, onDelete, onChangeStock }) => {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const [notice, setNotice] = useState(location.state?.message || '');

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(''), 3000);
    return () => clearTimeout(timer);
  }, [notice]);

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()))
    .filter((p) => category === 'Tất cả' || p.category === category);

  return (
    <div>
      {notice && (
        <div className="notice">
          <span>{notice}</span>
          <button onClick={() => setNotice('')}>×</button>
        </div>
      )}
      <FilterBar
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />
      <p>Tìm thấy {filtered.length} sản phẩm</p>
      {filtered.length === 0 ? (
        <p>Không có dữ liệu</p>
      ) : (
        <ProductTable
          products={filtered}
          onDelete={onDelete}
          onChangeStock={onChangeStock}
        />
      )}
    </div>
  );
};

export default ProductList;