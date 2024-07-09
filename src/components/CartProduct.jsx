import { useCartContext } from '../context/CartContext';
import '../assets/css/CartProduct.css';

function formatProductPrice(price) {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

function CartProduct({ product }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  return (
    <div className="cart__product">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="8" cy="8" r="7.75" stroke="black" strokeWidth="0.5" />
          <circle cx="8" cy="8" r="3" fill="#FBC47C" />
        </svg>
      </div>
      <div className="cart__product-grid">
        <div>
          <img className="cart__product-img" src={product.img} alt="" />
          <div>
            <p className="cart__product-name">{product.name}</p>
            <p>In stock</p>
          </div>
        </div>
        <div>
          <p className="cart__product-price">
            NGN {formatProductPrice(product.price)}
          </p>
          <div>
            <button
              className="cart__product-btn"
              onClick={() => decreaseQuantity(product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" rx="15" fill="#FBC47C" />
                <path
                  d="M10 16H21"
                  stroke="#1C1C1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p>{product.quantity}</p>
            <button
              className="cart__product-btn"
              onClick={() => increaseQuantity(product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" rx="15" fill="#FBC47C" />
                <path
                  d="M9 15.5H20M14.5 10V21"
                  stroke="#1C1C1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button
        className="cart__product-remove-btn"
        onClick={() => removeFromCart(product)}
      >
        <span className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              d="M9.83572 25.8335C9.25877 25.8335 8.76665 25.6302 8.35934 25.2238C7.9529 24.8173 7.74967 24.3252 7.74967 23.7474V7.75012H6.45801V6.45845H11.6247V5.46387H19.3747V6.45845H24.5413V7.75012H23.2497V23.7474C23.2497 24.3416 23.0508 24.8376 22.6529 25.2354C22.2551 25.6332 21.7587 25.8326 21.1636 25.8335H9.83572ZM21.958 7.75012H9.04134V23.7474C9.04134 23.979 9.11583 24.1694 9.2648 24.3183C9.41377 24.4673 9.60408 24.5418 9.83572 24.5418H21.1636C21.3617 24.5418 21.5438 24.4591 21.71 24.2938C21.8762 24.1285 21.9589 23.9463 21.958 23.7474V7.75012ZM12.6683 21.9585H13.96V10.3335H12.6683V21.9585ZM17.0393 21.9585H18.331V10.3335H17.0393V21.9585Z"
              fill="#FF7810"
            />
          </svg>
        </span>
        <p>Remove</p>
      </button>
    </div>
  );
}
export default CartProduct;
