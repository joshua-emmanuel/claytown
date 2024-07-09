import { useCartContext } from '../context/CartContext';
import NavBar from '../components/NavBar';
import prevIcon from '../assets/img/previous-icon.svg';
import CartProduct from '../components/CartProduct';
import '../assets/css/Cart.css';

function Cart() {
  const { cart } = useCartContext();

  return (
    <>
      <NavBar />
      <main>
        <div className="wrapper">
          <div className="cart">
            <div className="cart__header">
              <img src={prevIcon} alt="previous icon" />
              <p className="font-condensed">
                Cart(<span>{cart.length}</span>)
              </p>
            </div>
            <div className="cart__list">
              {cart.map((cartItem) => (
                <CartProduct key={cartItem.id} product={cartItem} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
