import { useLocation, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import ProductTable from '../components/ProductTable';

const ProductList = ({ products, onDelete, onChangeStock }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const [notice, setNotice] = useState(location.state?.message || '');

  useEffect(() => {
   if (location.state?.message) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

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