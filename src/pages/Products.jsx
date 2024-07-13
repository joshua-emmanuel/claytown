import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../assets/css/Products.css';
import Product from '../components/Product';
import Footer from '../components/Footer';
import LoadingStatus from '../components/LoadingStatus';
import Pagination from '../components/Pagination';

function Products() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

  const currentProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    PRODUCTS_PER_PAGE * currentPage
  );

  function handlePagination(number) {
    setCurrentPage(number);
    window.scrollTo(0, 0);
  }

  function handlePrevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  }

  function handleNextPage() {
    if (currentPage !== Math.ceil(products.length / PRODUCTS_PER_PAGE)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  }

  const API_KEY = import.meta.env.VITE_API_KEY;
  const ORG_ID = import.meta.env.VITE_ORG_ID;
  const APP_ID = import.meta.env.VITE_APP_ID;

  useEffect(() => {
    fetch(
      `/api/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = data.items;
        const products = items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            price: item.current_price[0].NGN[0],
            description: item.description,
            img: `https://api.timbu.cloud/images/${item.photos[0].url}`,
          };
        });
        setProducts(products);
        setStatus('done');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isDone = status === 'done';

  return (
    <>
      <NavBar />
      <main className="products">
        <div className="wrapper">
          <h1 className="font-condensed">Categories</h1>
          <div className="products__categories">
            <button className="active">All</button>
            <button>Decorative</button>
            <button>Kitchenware</button>
            <button>Tableware</button>
          </div>
          {isLoading && <LoadingStatus>Loading products...</LoadingStatus>}
          {isError && <LoadingStatus>Oops! An error occured. Please refresh your browser.</LoadingStatus>}
          <div className="products__list">
            {isDone &&
              currentProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
          <Pagination
            length={products.length}
            productsPerPage={PRODUCTS_PER_PAGE}
            handlePagination={handlePagination}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Products;
