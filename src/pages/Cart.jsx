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
              <button className="checkout-button">Checkout</button>
              <div>
                <Link className="homepage-link" to="/">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
          <div className="cart__summary--desktop">
            <div>
              <h2 className="font-condensed">Cart Summary</h2>
              <table>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cartItem) => (
                    <tr key={cartItem.id}>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.quantity}</td>
                      <td>NGN {formatProductPrice(cartItem.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <p>Total Amount - NGN{formatProductPrice(totalPrice)}</p>
                <p>Shipping Fee - NGN700</p>
                <p>Total - NGN{formatProductPrice(totalPrice + 700)}</p>
                <button className="checkout-button">Checkout</button>
              </div>
            </div>
            <div>
              <Link className="homepage-link" to="/">
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
