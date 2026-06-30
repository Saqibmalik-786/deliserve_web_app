import "./Footer.css";
// import {

//   Instagram,
//   Linkedin,
//   Github,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-brand">

            <h2 className="logo">
              Deli<span>serve</span>
            </h2>

            <p>
              Discover nearby restaurants, explore delicious food,
              and order directly through WhatsApp.
            </p>

            {/* <div className="social-links">

              <a href="/">
                <Facebook size={20} />
              </a>

              <a href="/">
                <Instagram size={20} />
              </a>

              <a href="/">
                <Linkedin size={20} />
              </a>

              <a href="/">
                <Github size={20} />
              </a>

            </div> */}

          </div>

          {/* Explore */}

          <div>

            <h3>Explore</h3>

            <ul>

              <li><a href="/">Home</a></li>
              <li><a href="/">Restaurants</a></li>
              <li><a href="/">Become Partner</a></li>
              <li><a href="/">About</a></li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3>Support</h3>

            <ul>

              <li><a href="/">Contact</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">FAQs</a></li>

            </ul>

          </div>

          {/* Contact */}

          {/* <div>

            <h3>Contact</h3>

            <ul className="contact-list">

              <li>
                <Mail size={18} />
                support@deliserve.com
              </li>

              <li>
                <Phone size={18} />
                +92 300 1234567
              </li>

              <li>
                <MapPin size={18} />
                Pakistan
              </li>

            </ul>

          </div> */}

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Deliserve. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;