import "./Hero.css";
import HeroFood from "../../assets/burgerHero.png";

function Hero() {
  return (
    <section className="hero section">

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            🍔 Discover Local Food Businesses
          </span>

          <h1>
            Find Delicious Food From
            <span> Nearby Restaurants </span>
            In One Place.
          </h1>

          <p>
            Deliserve helps you discover local restaurants, browse menus,
            explore delicious food, and place orders directly through
            WhatsApp—without downloading multiple restaurant apps.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Restaurants
            </button>

            <button className="secondary-btn">
              Become a Partner
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h3>500+</h3>
              <span>Food Items</span>
            </div>

            <div>
              <h3>100+</h3>
              <span>Restaurants</span>
            </div>

            <div>
              <h3>1000+</h3>
              <span>Happy Customers</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={HeroFood}
            alt="Delicious food"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;