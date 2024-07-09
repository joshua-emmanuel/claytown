import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import prevIcon from '../assets/img/previous-icon.svg';
import CartProduct from '../components/CartProduct';
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
                <p>Total amount - NGN {totalPrice}</p>
                <p>Shipping fee - NGN 700</p>
                <p>Total - NGN {totalPrice + 700}</p>
              </div>
              <button className="checkout-button">Checkout</button>
              <div>
                <Link className="homepage-link" to="/">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
