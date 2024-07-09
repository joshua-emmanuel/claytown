import aboutUsImg from '../assets/img/about-us-img.png';
import '../assets/css/AboutUs.css';

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <div className="wrapper">
        <h2 className="font-condensed">About us</h2>
        <div className="about-us__content">
          <div>
            <p>
              Claytown is where tradition meets modern craftsmanship. We are
              passionate artisans dedicated to bringing you the finest handmade
              clay and wooden products from around the world
            </p>
          </div>
          <img src={aboutUsImg} alt="Flower Vases" />
          <div>
            <p>
              Our curated collection celebrates the artistry and cultural
              heritage of skilled craftsmen, ensuring every piece tells a unique
              story.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
