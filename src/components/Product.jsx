import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { formatProductPrice } from '../utils';

function Product({ product }) {
  const { addToCart } = useCartContext();
  const { name, price, img } = product;
  const navigate = useNavigate();

  return (
    <div className="product">
      <img className="product__img" src={img} alt="" />
      <div className="flex">
        <p>{name}</p>
        <button className="product__like-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="red"
          >
            <path
              d="M8.40273 1.78777C8.78817 1.29134 9.25676 0.888216 9.78081 0.602217C10.3049 0.316217 10.8738 0.153143 11.4539 0.122625C12.034 0.0921081 12.6136 0.194767 13.1585 0.424538C13.7033 0.65431 14.2023 1.00653 14.626 1.4604C15.0497 1.91427 15.3896 2.46058 15.6254 3.06705C15.8613 3.67353 15.9884 4.32788 15.9992 4.99143C16.0101 5.65499 15.9045 6.31431 15.6886 6.93043C15.4727 7.54655 15.151 8.10699 14.7424 8.57863L8.3554 15.9478C8.3089 16.0014 8.25356 16.0441 8.19256 16.0731C8.13157 16.1022 8.06613 16.1172 8.00004 16.1172C7.93395 16.1172 7.86852 16.1022 7.80753 16.0731C7.74653 16.0441 7.69118 16.0014 7.64469 15.9478L1.25766 8.57863C0.483232 7.68461 0.0344461 6.48812 0.00190192 5.23068C-0.0306423 3.97325 0.355479 2.74854 1.08232 1.80377C2.80775 -0.438515 5.86259 -0.446134 7.59735 1.78777L8.00004 2.30587L8.40273 1.78777ZM14.1671 2.55806C13.8538 2.15107 13.4683 1.82484 13.0363 1.60099C12.6043 1.37714 12.1356 1.26078 11.6613 1.25963C11.187 1.25847 10.7179 1.37255 10.285 1.5943C9.85222 1.81605 9.46559 2.14041 9.15077 2.54587L8.3734 3.54625C8.32648 3.60667 8.26889 3.65504 8.20442 3.68817C8.13995 3.72129 8.07006 3.73842 7.99938 3.73842C7.92869 3.73842 7.85881 3.72129 7.79433 3.68817C7.72986 3.65504 7.67227 3.60667 7.62536 3.54625L6.84864 2.54587C6.55253 2.16083 6.19171 1.84775 5.78762 1.62523C5.38354 1.4027 4.94443 1.27527 4.4964 1.25051C4.04837 1.22575 3.60055 1.30416 3.17956 1.48108C2.75857 1.65801 2.373 1.92983 2.04575 2.28042C1.7185 2.631 1.45626 3.05317 1.27461 3.52186C1.09295 3.99055 0.995591 4.49619 0.98831 5.00873C0.981029 5.52126 1.06398 6.03024 1.23222 6.50542C1.40047 6.9806 1.65058 7.41229 1.9677 7.77482L8.00004 14.7341L14.0317 7.77482C14.6282 7.0865 14.9738 6.16519 14.999 5.19692C15.0241 4.22864 14.7268 3.28555 14.1671 2.55806Z"
              fill="#1C1C1C"
            />
          </svg>
        </button>
      </div>
      <p className="product__price">NGN {formatProductPrice(price)}</p>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="14"
          viewBox="0 0 72 14"
          fill="none"
        >
          <path
            d="M6.35294 0.31543L7.77927 4.7052H12.3949L8.66078 7.41823L10.0871 11.808L6.35294 9.09498L2.61878 11.808L4.0451 7.41823L0.310935 4.7052H4.92662L6.35294 0.31543Z"
            fill="#FFAE34"
          />
          <path
            d="M21.1762 0.31543L22.6025 4.7052H27.2182L23.484 7.41823L24.9103 11.808L21.1762 9.09498L17.442 11.808L18.8683 7.41823L15.1342 4.7052H19.7499L21.1762 0.31543Z"
            fill="#FFAE34"
          />
          <path
            d="M36.0004 0.31543L37.4267 4.7052H42.0424L38.3082 7.41823L39.7346 11.808L36.0004 9.09498L32.2662 11.808L33.6926 7.41823L29.9584 4.7052H34.5741L36.0004 0.31543Z"
            fill="#FFAE34"
          />
          <path
            d="M50.8236 0.31543L52.25 4.7052H56.8657L53.1315 7.41823L54.5578 11.808L50.8236 9.09498L47.0895 11.808L48.5158 7.41823L44.7816 4.7052H49.3973L50.8236 0.31543Z"
            fill="#FFAE34"
          />
          <path
            d="M65.6469 0.31543L67.0732 4.7052H71.6889L67.9547 7.41823L69.3811 11.808L65.6469 9.09498L61.9127 11.808L63.339 7.41823L59.6049 4.7052H64.2206L65.6469 0.31543Z"
            fill="#FFAE34"
          />
        </svg>
      </p>
      <button
        className="product__btn"
        onClick={() => {
          addToCart(product);
          navigate('/cart');
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
