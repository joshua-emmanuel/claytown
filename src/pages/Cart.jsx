import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import prevIcon from '../assets/img/previous-icon.svg';
import CartProduct from '../components/CartProduct';
import { formatProductPrice } from '../utils';
import '../assets/css/Cart.css';

function Cart() {
  const { cart, totalPrice } = useCartContext();

  return (
    <>
      <NavBar />
      <main>
        <div className="wrapper">
          <div className="cart">
            <div className="cart__header">
              <Link to="/products">
                <img src={prevIcon} alt="previous icon" />
              </Link>
              <p className="font-condensed">
                Cart(<span>{cart.length}</span>)
              </p>
            </div>
            <div className="cart__list">
              {cart.map((cartItem) => (
                <CartProduct key={cartItem.id} product={cartItem} />
              ))}
            </div>
            <div className="cart__summary--mobile">
              <div>
                <p>Total amount - NGN{formatProductPrice(totalPrice)}</p>
                <p>Shipping fee - NGN700</p>
                <p>Total - NGN{formatProductPrice(totalPrice + 700)}</p>
              </div>
              <div>
                <Link className="checkout-button">Checkout</Link>
              </div>
              <div>
                <Link className="homepage-link font-montserrat" to="/">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
          <div className="cart__summary--desktop">
            <div>
              <h2 className="font-condensed">Cart Summary</h2>
              <div className="cart__summary-grids">
                <div className="cart__summary-grid">
                  <h3>Item Name</h3>
                  <h3>Quantity</h3>
                  <h3>Cost</h3>
                </div>
                {cart.map((cartItem) => (
                  <div
                    className="cart__summary-grid font-montserrat"
                    key={cartItem.id}
                  >
                    <p>{cartItem.name}</p>
                    <p>{cartItem.quantity}</p>
                    <p>
                      NGN
                      {formatProductPrice(cartItem.price * cartItem.quantity)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="cart__summary-prices">
                <p>Total Amount - NGN{formatProductPrice(totalPrice)}</p>
                <p>Shipping Fee - NGN700</p>
                <p>Total - NGN{formatProductPrice(totalPrice + 700)}</p>
                <div>
                  <Link className="checkout-button">Checkout</Link>
                </div>
              </div>
            </div>
            <div>
              <Link className="homepage-link font-montserrat" to="/">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
