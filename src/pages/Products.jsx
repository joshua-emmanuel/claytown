import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../assets/css/Products.css';
import Product from '../components/Product';
import Footer from '../components/Footer';
import LoadingStatus from '../components/LoadingStatus';

function Products() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  const API_KEY = import.meta.env.VITE_API_KEY;
  const ORG_ID = import.meta.env.VITE_ORG_ID;
  const APP_ID = import.meta.env.VITE_APP_ID;

  useEffect(() => {
    window
      .fetch(
        `/api/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          redirect: 'error',
        }
      )
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        // const items = data.items;
        // const products = items.map((item) => {
        //   return {
        //     id: item.id,
        //     name: item.name,
        //     price: item.current_price[0].NGN[0],
        //     description: item.description,
        //     img: `https://api.timbu.cloud/images/${item.photos[0].url}`,
        //   };
        // });
        // setProducts(products);
        // setStatus('done');
      })
      .catch((error) => {
        console.log(error);
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
          <h1 className="font-condensed">Products</h1>
          <div className="products__list">
            {isLoading && <LoadingStatus>Loading products...</LoadingStatus>}
            {isError && <LoadingStatus>Oops! An error occured</LoadingStatus>}
            {isDone &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Products;
