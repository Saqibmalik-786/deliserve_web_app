import "./WhyDeliserve.css";
import { Search, Store, MessageCircle } from "lucide-react";

function WhyDeliserve() {
  return (
    <section className="why-deliserve section">

      <div className="container">

        <div className="why-header">

          <span className="section-badge">
            Why Choose Deliserve
          </span>

          <h2 className="section-title">
            Everything You Need To Discover
            <span> Local Food.</span>
          </h2>

          <p className="section-description">
            Deliserve connects customers with local restaurants while making it
            simple for food businesses to receive orders directly through
            WhatsApp.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              <Search size={32} />
            </div>

            <h3>Discover Food Easily</h3>

            <p>
              Browse nearby restaurants, search your favorite meals, and
              discover delicious food in one place.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <MessageCircle size={32} />
            </div>

            <h3>Direct WhatsApp Ordering</h3>

            <p>
              Place your order directly through WhatsApp with no complicated
              checkout process.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <Store size={32} />
            </div>

            <h3>Support Local Restaurants</h3>

            <p>
              Help small food businesses grow by discovering and ordering from
              independent restaurants near you.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyDeliserve;