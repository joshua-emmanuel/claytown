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
          <h1 className="font-condensed">Categories</h1>
          <div className="products__categories">
            <button className="active">All</button>
            <button>Decorative</button>
            <button>Kitchenware</button>
            <button>Tableware</button>
          </div>
          {isLoading && <LoadingStatus>Loading products...</LoadingStatus>}
          {isError && <LoadingStatus>Oops! An error occured</LoadingStatus>}
          <div className="products__list">
            {isDone &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
          <div className="pagination font-montserrat">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M37 30.9366V14L24.2948 22.4683L37 30.9366ZM20.6964 30.9366V14L7.99302 22.4683L20.6964 30.9366ZM35.165 27.5144L27.5867 22.4683L35.165 17.4222V27.5144ZM18.8615 27.5144L11.2849 22.4683L18.8633 17.4222L18.8615 27.5144Z"
                  fill="#1C1C1C"
                />
              </svg>
            </button>
            <button>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  width="36.446"
                  height="36.446"
                  transform="matrix(1 0 0 -1 0 37)"
                  fill="url(#pattern0_251_823)"
                />
                <defs>
                  <pattern
                    id="pattern0_251_823"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_251_823"
                      transform="scale(0.00195312)"
                    />
                  </pattern>
                  <image
                    id="image0_251_823"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="37"
                  y="37"
                  width="36.446"
                  height="36.446"
                  transform="rotate(180 37 37)"
                  fill="url(#pattern0_251_824)"
                />
                <defs>
                  <pattern
                    id="pattern0_251_824"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_251_824"
                      transform="scale(0.00195312)"
                    />
                  </pattern>
                  <image
                    id="image0_251_824"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAgoSURBVHic7dhBTtwwAIZRq7eYW1RI9Hrd9rAd0RvQTdmgIhiYJHa+9yTvLW++PxkDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+5HH0BAGBf38cYv8cYv46+CACwj5f4P/87RgAAnNzr+BsBAHByb8XfCACAk3ov/kYAAJzMR+NvBADASdwafyMAABb32fgbAQCwqK/G3wgAgMXcK/5GAAAs4t7xNwIAYHJbxd8IAIBJbR1/IwAAJrNX/I0AAJjE3vE3AgDgYEfF3wgAgIMcHX8jAAB2Nkv8jQAA2Mls8TcCAGBjs8bfCACAjcwefyMAAO5slfgbAQBwJw9jjOs4Puq3nOsY47LFYwBAwWpf/s9jjKcxxuMWjwEABeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMavG/8cWjwEABeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMeIPADHiDwAx4g8AMSvG/88QfwD4NPEHgBjxB4AY8QeAGPEHgBjxB4AY8QeAGPEHgBjxB4AY8QeAGPEHgBjxB4AY8QeAGPEHgBjxB4AY8QeAGPEHgBjxB4AY8QeAGPEHgBjxBziZb0dfAACAefkLAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRK46Ap2EEAMCXGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUUYAAEQZAQAQZQQAQJQRAABRRgAARBkBABBlBABAlBEAAFFGAABEGQEAEGUEAECUEQAAUauOgMctHgMASowAAIgyAgAgyggAgCgjAACijAAAiDICACDKCACAKCMAAKKMAACIMgIAIMoIAIAoIwAAoowAAIgyAgAgyggAgCgjAACijAAAiDICACDKCACAKCMAAKKMAACIMgIAIMoIAIAoIwAAoowAAIgyAgAgyggAgCgjAACijAAAiDICACDKCACAKCMAAKKMAACIMgIAIMoIAIAoIwAAoowAAIgyAgAgyggAgCgjAACijAAAiDICACDKCACAKCMAAKKMAACIMgIAIMoIAIAoIwAAoowAAIgyAgAgyggAgCgjAACijAAAiDICACDKCACAKCMAAKKMAACIMgIAIMoIAIAoIwAAoowAAIh6GGNcx/Fhv+VcxxiXLR4DAEpW+xPwc5tnAICeVUaA+APAnc0+AsQfADYy6wgQfwDY2GwjQPwBYCezjADxB4CdHT0CxB8ADnLUCBB/ADjY3iNA/AFgEnuNAPEHgMlsPQLEHwAmtdUIEH8AmNy9R4D4A8Ai7jUCxB8AFvPVESD+ALCoz44A8QeAxd06AsQfAE7ioyNA/AHgZN4bAeIPACf11ggQfwA4udcjQPwBIOJlBIg/AMRcjr4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHOEvZ5vUUSOm0rkAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M8 30.9366V14L20.7052 22.4683L8 30.9366ZM24.3036 30.9366V14L37.007 22.4683L24.3036 30.9366ZM9.83496 27.5144L17.4133 22.4683L9.83496 17.4222V27.5144ZM26.1385 27.5144L33.7151 22.4683L26.1367 17.4222L26.1385 27.5144Z"
                  fill="#1C1C1C"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Products;
