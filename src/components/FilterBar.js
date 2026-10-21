import React from 'react';
import { CATEGORIES } from '../data';

const FilterBar = ({ search, category, onSearchChange, onCategoryChange }) => (
  <div className="filters">
    <div>
      <label htmlFor="search">Tìm kiếm</label>{' '}
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="category">Danh mục</label>{' '}
      <select
        id="category"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {['Tất cả', ...CATEGORIES].map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterBar;