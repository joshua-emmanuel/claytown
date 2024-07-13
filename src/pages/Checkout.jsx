import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import NavBar from '../components/NavBar';
import '../assets/css/Checkout.css';
import { formatProductPrice } from '../utils';

export default function Checkout() {
  const { totalPrice } = useCartContext();

  return (
    <>
      <NavBar />
      <main>
        <div className="wrapper">
          <div className="checkout-grid">
            <div className="checkout">
              <Link to="/cart" className="back-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="8"
                  viewBox="0 0 33 8"
                  fill="none"
                >
                  <path
                    d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H32.5V3.5H1V4.5Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <div className="address-list">
                <h2>Address</h2>
                <div className="address">
                  <div>
                    <input type="radio" defaultChecked />
                    <div>
                      <h3>Lagos, Nigeria</h3>
                      <p>Ojuelegba</p>
                      <p>Contact - 09084334211</p>
                    </div>
                  </div>
                  <button>Edit</button>
                </div>
                <div className="address">
                  <div>
                    <input type="radio" />
                    <div>
                      <h3>University of Lagos</h3>
                      <p>Akoka</p>
                      <p>Contact - 09084334211</p>
                    </div>
                  </div>
                  <button>Edit</button>
                </div>
                <hr />
                <button className="add-address-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#FBC47C"
                      strokeOpacity="0.7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#FBC47C"
                      strokeOpacity="0.7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Add New Address</span>
                </button>
              </div>
              <div className="shipping">
                <h2>Shipping</h2>
                <div className="shipping-option">
                  <div>
                    <input type="radio" name="shipping" defaultChecked />
                    <p>Basic</p>
                    <p>Regular Shipment</p>
                  </div>
                  <p>01 Sep, 2024</p>
                </div>
                <div className="shipping-option">
                  <div>
                    <input type="radio" name="shipping" />
                    <p>N2000</p>
                    <p>Priority Shipping</p>
                  </div>
                  <p>28 Aug, 2024</p>
                </div>
                <div className="shipping-option">
                  <div>
                    <input type="radio" name="shipping" />
                    <p>Schedule </p>
                    <p>Choose a date</p>
                  </div>
                  <input type="date" placeholder="Select Date" />
                </div>
              </div>
              <div className="payment-method">
                <h2>Payment</h2>
                <div className="payment-option">
                  <div>
                    <input type="radio" name="payment" defaultChecked />
                    <div className="payment-option__logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="17"
                        viewBox="0 0 24 17"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_733_2841)">
                          <path
                            d="M9.11231 0.217719L5.97039 12.1413H3.92066L2.37449 2.62516C2.28075 2.04045 2.19929 1.82526 1.91404 1.57802C1.44777 1.17509 0.677785 0.798254 0.000976562 0.563833L0.0466284 0.217719H3.34668C3.76664 0.217719 4.14479 0.662553 4.24097 1.43277L5.05792 8.33313L7.07485 0.217719H9.11231ZM11.8833 0.217719L10.28 12.1413H8.34072L9.94416 0.217719H11.8833ZM17.1436 8.24828C17.1517 5.10194 14.4089 4.92732 14.4268 3.52153C14.4333 3.09415 14.6892 2.63918 15.2494 2.52286C15.5269 2.46575 16.2935 2.42026 17.1618 3.05672L17.5015 0.526702C17.035 0.258281 16.4346 0 15.6878 0C13.7708 0 12.4223 1.61977 12.4115 3.94102C12.399 5.65802 13.3747 6.61494 14.1085 7.18682C14.8643 7.77079 15.1178 8.14613 15.1143 8.66806C15.1089 9.46811 14.5107 9.82227 13.9545 9.83539C12.9792 9.86 12.4139 9.41606 11.9629 9.08188L11.6109 11.6957C12.0646 12.0265 12.9007 12.3138 13.7668 12.3284C15.8047 12.3284 17.1376 10.7271 17.1436 8.24828ZM22.2057 12.1414H23.9986L22.4322 0.217719H20.778C20.4049 0.217719 20.0913 0.562193 19.9522 1.09173L17.0425 12.1413H19.0788L19.4828 10.3602H21.9706L22.2057 12.1414ZM20.0412 7.91693L21.0622 3.43922L21.6487 7.91693H20.0412ZM14.3652 15.4235H13.5772V16.5901H14.4585V16.9408H13.3117V13.7044H14.4133V14.0551H13.5772V15.0777H14.3651L14.3652 15.4235ZM14.8657 13.5317H15.1311V16.9406H14.8657V13.5317ZM15.801 15.8555C15.807 16.4271 16.0335 16.6622 16.3019 16.6622C16.4922 16.6622 16.6099 16.6094 16.7066 16.5423L16.7548 16.8449C16.6613 16.912 16.4983 16.9936 16.2658 16.9936C15.8162 16.9936 15.5476 16.5183 15.5476 15.8172C15.5476 15.1163 15.807 14.5687 16.2327 14.5687C16.7126 14.5687 16.8364 15.2316 16.8364 15.6588C16.8364 15.7451 16.8333 15.8075 16.8272 15.8556L15.801 15.8555ZM16.5797 15.5531C16.5828 15.2891 16.5103 14.8713 16.2115 14.8713C15.9398 14.8713 15.8251 15.2602 15.8039 15.5531H16.5797ZM18.2815 16.8591C18.2121 16.912 18.0581 16.9937 17.862 16.9937C17.4213 16.9937 17.1346 16.5183 17.1346 15.8076C17.1346 15.0921 17.4423 14.5689 17.9193 14.5689C18.0762 14.5689 18.215 14.631 18.2875 14.6937L18.2273 15.0153C18.1636 14.9625 18.0641 14.9047 17.9193 14.9047C17.5841 14.9047 17.4032 15.3033 17.4032 15.7838C17.4032 16.3213 17.6205 16.6527 17.9103 16.6527C18.0612 16.6527 18.1607 16.5951 18.2362 16.5423L18.2815 16.8591ZM19.0265 14.0597V14.6167H19.4067V14.9382H19.0265V16.1916C19.0265 16.48 19.0779 16.643 19.2257 16.643C19.2981 16.643 19.3405 16.6336 19.3797 16.6141L19.3918 16.9362C19.3405 16.9648 19.259 16.9936 19.1564 16.9936C19.0325 16.9936 18.9329 16.9263 18.8696 16.8161C18.7971 16.6862 18.767 16.48 18.767 16.2062V14.9382H18.5405V14.6167H18.767V14.1846L19.0265 14.0597ZM19.7777 15.3419C19.7777 15.0681 19.7745 14.8329 19.7656 14.6167H19.9981L20.0102 15.0775H20.0191C20.0856 14.7657 20.2484 14.5687 20.4265 14.5687C20.4537 14.5687 20.4749 14.5736 20.4991 14.5782V14.977C20.4719 14.9672 20.4448 14.9672 20.4084 14.9672C20.2214 14.9672 20.0884 15.188 20.0523 15.5052C20.0461 15.5703 20.043 15.6361 20.0432 15.702V16.9409H19.7777V15.3419ZM22.1316 15.7594C22.1316 16.619 21.7542 16.9936 21.4042 16.9936C21.0117 16.9936 20.7039 16.5325 20.7039 15.7981C20.7039 15.0249 21.0269 14.5689 21.4284 14.5689C21.8478 14.5689 22.1316 15.0534 22.1316 15.7594ZM20.9755 15.7838C20.9755 16.2927 21.1566 16.677 21.4162 16.677C21.6698 16.677 21.8598 16.2973 21.8598 15.7741C21.8598 15.3804 21.7361 14.8856 21.4222 14.8856C21.1114 14.8856 20.9755 15.3468 20.9755 15.7838ZM22.5386 15.2459C22.5386 15.0012 22.5354 14.8089 22.5264 14.617H22.7619L22.777 15.0012H22.783C22.8555 14.7849 23.0245 14.569 23.266 14.569C23.4681 14.569 23.7821 14.7611 23.7821 15.5578V16.9409H23.5165V15.6012C23.5165 15.2269 23.429 14.9145 23.1785 14.9145C23.0064 14.9145 22.8705 15.1115 22.8224 15.3467C22.8102 15.3996 22.8042 15.4715 22.8042 15.5437V16.9409H22.5386V15.2459Z"
                            fill="#212322"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_733_2841">
                            <rect width="24" height="17" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p>•••• 5436</p>
                  </div>
                  <p>Expires 06/2021</p>
                </div>
                <div className="payment-option">
                  <div>
                    <input type="radio" name="payment" />
                    <div className="payment-option__logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="17"
                        viewBox="0 0 24 17"
                        fill="none"
                      >
                        <path
                          d="M0.25 2C0.25 1.0335 1.0335 0.25 2 0.25H22C22.9665 0.25 23.75 1.0335 23.75 2V15C23.75 15.9665 22.9665 16.75 22 16.75H2C1.0335 16.75 0.25 15.9665 0.25 15V2Z"
                          fill="white"
                          stroke="#CAD2DB"
                          strokeWidth="0.5"
                        />
                        <circle cx="9" cy="9" r="4" fill="#D0091B" />
                        <circle cx="15" cy="9" r="4" fill="#F2C57C" />
                      </svg>
                    </div>
                    <p>•••• 2345</p>
                  </div>
                  <p>Expires 11/2025</p>
                </div>
                <button className="add-card-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#FFAE34"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#FFAE34"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Add card</span>
                </button>
              </div>
              <Link className="payment-btn--lg">Pay now</Link>
              <div className="order-summary--md">
                <div>
                  <div className="grid-group">
                    <div className="flex">
                      <p>Price</p>
                      <p>{formatProductPrice(totalPrice)}</p>
                    </div>
                    <div className="flex">
                      <p>Discount</p>
                      <p>0</p>
                    </div>
                    <div className="flex">
                      <p>Shipping</p>
                      <p className="shipping-fee">NGN700</p>
                    </div>
                    <div className="flex">
                      <p>Coupon Applied</p>
                      <p>0</p>
                    </div>
                  </div>
                  <div className="grid-group">
                    <div className="flex">
                      <p>TOTAL</p>
                      <p>{formatProductPrice(totalPrice + 700)}</p>
                    </div>
                  </div>
                  <div className="grid-group">
                    <div className="flex">
                      <p>Estimated Delivery by</p>
                      <p>01 Sep, 2024</p>
                    </div>
                  </div>
                  <div>
                    <input type="text" placeholder="Voucher code" />
                    <Link className="payment-btn">Pay now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-summary--lg">
              <h2 className="font-condensed">Order Summary</h2>
              <div>
                <div className="grid-group">
                  <div className="flex">
                    <p>Price</p>
                    <p>{formatProductPrice(totalPrice)}</p>
                  </div>
                  <div className="flex">
                    <p>Discount</p>
                    <p>0</p>
                  </div>
                  <div className="flex">
                    <p>Shipping</p>
                    <p className="shipping-fee">NGN700</p>
                  </div>
                  <div className="flex">
                    <p>Coupon Applied</p>
                    <p>0</p>
                  </div>
                </div>
                <div className="grid-group">
                  <div className="flex">
                    <p>TOTAL</p>
                    <p>{formatProductPrice(totalPrice + 700)}</p>
                  </div>
                </div>
                <div className="grid-group">
                  <div className="flex">
                    <p>Estimated Delivery by</p>
                    <p>01 Sep, 2024</p>
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Voucher code" />
                  <Link className="payment-btn">Pay now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
