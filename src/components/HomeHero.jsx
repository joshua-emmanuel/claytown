import NavBarWhite from './NavBarWhite';
import '../assets/css/HomeHero.css';
import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <div className="hero-bg">
      <NavBarWhite />
      <div className="hero">
        <div className="wrapper">
          <div className="hero__content">
            <h1 className="font-condensed">
              Stylish, functional pottery for
              <br />
              modern living
            </h1>
            <p>
              Discover handmade clay home decor items crafted by the finest
              artisans from around the world
            </p>
            <Link to="/products">
              <span>Shop now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M7.75209 24C7.17553 24 6.6896 23.8135 6.2943 23.4405C5.89899 23.0675 5.7018 22.6094 5.70271 22.0662C5.70362 21.523 5.90081 21.0645 6.2943 20.6906C6.6896 20.3184 7.17553 20.1324 7.75209 20.1324C8.32865 20.1324 8.81413 20.3184 9.20852 20.6906C9.60292 21.0627 9.80057 21.5213 9.80148 22.0662C9.80239 22.6111 9.60474 23.0692 9.20852 23.4405C8.81231 23.8118 8.32683 23.9983 7.75209 24ZM20.573 24C19.9974 24 19.5119 23.8135 19.1166 23.4405C18.7213 23.0675 18.5237 22.6094 18.5237 22.0662C18.5237 21.523 18.7213 21.0645 19.1166 20.6906C19.5119 20.3184 19.9974 20.1324 20.573 20.1324C21.1487 20.1324 21.6346 20.3184 22.0308 20.6906C22.4252 21.0636 22.6224 21.5221 22.6224 22.0662C22.6224 22.6094 22.4252 23.0675 22.0308 23.4405C21.6355 23.8135 21.1496 24 20.573 24ZM5.80244 3.86764L9.44898 11.1079H18.5141C18.6717 11.1079 18.8115 11.0705 18.9335 10.9957C19.0565 10.9209 19.1617 10.8178 19.2491 10.6863L22.8233 4.56253C22.928 4.38032 22.9367 4.21917 22.8492 4.07907C22.7609 3.93812 22.612 3.86764 22.4025 3.86764H5.80244ZM5.13434 2.57843H22.923C23.516 2.57843 23.9623 2.80705 24.2619 3.26429C24.5625 3.72067 24.5785 4.19123 24.3098 4.67598L20.405 11.3902C20.2073 11.7039 19.9505 11.9502 19.6344 12.1289C19.3184 12.3077 18.9709 12.3971 18.592 12.3971H8.83417L7.17417 15.272C7.0339 15.4706 7.02934 15.6854 7.1605 15.9166C7.29166 16.1478 7.48886 16.2639 7.75209 16.2647H22.6224V17.5539H7.75209C6.95511 17.5539 6.36033 17.2368 5.96776 16.6025C5.57519 15.9682 5.56563 15.3313 5.93907 14.6919L7.99392 11.2368L2.97019 1.28921H0.5V0H3.8364L5.13434 2.57843Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
