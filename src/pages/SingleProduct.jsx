import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatProductPrice } from '../utils';
import { useCartContext } from '../context/CartContext';
import NavBar from '../components/NavBar';
import '../assets/css/SingleProduct.css';
import Footer from '../components/Footer';
import LoadingStatus from '../components/LoadingStatus';

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState('loading');

  const { addToCart } = useCartContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_API_KEY;
  const ORG_ID = import.meta.env.VITE_ORG_ID;
  const APP_ID = import.meta.env.VITE_APP_ID;

  useEffect(() => {
    fetch(
      `/api/products/${id}?organization_id=${ORG_ID}&Apikey=${API_KEY}&Appid=${APP_ID}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const product = {
          id: data.id,
          name: data.name,
          price: data.current_price,
          description: data.description,
          img: `https://api.timbu.cloud/images/${data.photos[0].url}`,
        };
        setProduct(product);
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
      <main>
        <div className="wrapper">
          {isLoading && <LoadingStatus>Loading product...</LoadingStatus>}
          {isError && (
            <LoadingStatus>
              Oops! An error occured. Please refresh your browser.
            </LoadingStatus>
          )}
          {isDone && (
            <div className="product__grid">
              <img src={product.img} alt="" />
              <div className="product__content">
                <h1 className="font-condensed">{product.name}</h1>
                <p>{product.description}</p>
                <p>Price: NGN{formatProductPrice(product.price)}</p>
                <button
                  onClick={() => {
                    addToCart(product);
                    navigate('/cart');
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
