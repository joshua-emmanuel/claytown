import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__grid">
          <div>
            <h2 className="font-condensed">Explore</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-condensed">Customer Service</h2>
            <ul>
              <li>
                <Link to="/">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/">Order Tracking</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-condensed">Get in Touch</h2>
            <ul>
              <li>
                <Link to="/">Email: support@craftytown.com</Link>
              </li>
              <li>
                <Link to="/">Phone: 1-800-123-4567</Link>
              </li>
              <li>
                <Link to="/">
                  Address: 123 Craft Lane, Artisan City, AC 12345
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <p>ClayTown © 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
