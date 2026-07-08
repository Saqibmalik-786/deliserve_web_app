import "./BecomePartner.css";
import { FaStore, FaWhatsapp, FaChartLine } from "react-icons/fa";

function BecomePartner() {
    return (
        <section className="partner-page">

            {/* Hero Section */}

            <section className="partner-hero section">

                <div className="container partner-hero-container">

                    <div className="partner-left">

                        <span className="partner-badge">
                            🚀 Become a Deliserve Partner
                        </span>

                        <h1>
                            Grow Your Restaurant with Deliserve
                        </h1>

                        <p>
                            Join Deliserve and create your own online restaurant
                            store. Showcase your menu, reach nearby customers,
                            and receive orders directly on WhatsApp without
                            building your own website or mobile app.
                        </p>

                        <button
                            className="primary-btn"
                            onClick={() =>
                                document
                                    .getElementById("partner-form")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Register Your Restaurant
                        </button>

                    </div>

                    <div className="partner-right">

                        <img
                            src="/images/become-partner.png"
                            alt="Become Partner"
                        />

                    </div>

                </div>

            </section>

            {/* Benefits */}

            <section className="partner-benefits section">

                <div className="container">

                    <h2>Why Join Deliserve?</h2>

                    <div className="benefit-grid">

                        <div className="benefit-card">

                            <FaStore className="benefit-icon" />

                            <h3>Create Your Online Store</h3>

                            <p>
                                Build your restaurant profile and display your
                                complete menu in minutes.
                            </p>

                        </div>

                        <div className="benefit-card">

                            <FaWhatsapp className="benefit-icon" />

                            <h3>Receive WhatsApp Orders</h3>

                            <p>
                                Customers place orders directly to your
                                WhatsApp number without any complicated system.
                            </p>

                        </div>

                        <div className="benefit-card">

                            <FaChartLine className="benefit-icon" />

                            <h3>Reach More Customers</h3>

                            <p>
                                Increase your restaurant's visibility and
                                connect with nearby food lovers.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Registration Form */}

            <section
                id="partner-form"
                className="partner-form-section section"
            >

                <div className="container">

                    <h2>Register Your Restaurant</h2>

                    <p className="form-subtitle">
                        Fill in the information below to create your restaurant
                        on Deliserve.
                    </p>

                    <form className="partner-form">

                        <div className="form-grid">

                            <div className="form-group">
                                <label>Restaurant Name</label>

                                <input
                                    type="text"
                                    placeholder="e.g. Pizza House"
                                />
                            </div>

                            <div className="form-group">
                                <label>Owner Name</label>

                                <input
                                    type="text"
                                    placeholder="Owner Name"
                                />
                            </div>

                            <div className="form-group">
                                <label>WhatsApp Number</label>

                                <input
                                    type="text"
                                    placeholder="+92 300 1234567"
                                />
                            </div>

                            <div className="form-group">
                                <label>Business Phone</label>

                                <input
                                    type="text"
                                    placeholder="Optional"
                                />
                            </div>

                            <div className="form-group full-width">

                                <label>Restaurant Description</label>

                                <textarea
                                    rows="4"
                                    placeholder="Tell customers about your restaurant..."
                                ></textarea>

                            </div>

                            <div className="form-group">

                                <label>City</label>

                                <input
                                    type="text"
                                    placeholder="City"
                                />

                            </div>

                            <div className="form-group">

                                <label>Area</label>

                                <input
                                    type="text"
                                    placeholder="Area"
                                />

                            </div>

                            <div className="form-group full-width">

                                <label>Complete Address</label>

                                <textarea
                                    rows="3"
                                    placeholder="Restaurant Address"
                                ></textarea>

                            </div>

                            <div className="form-group">

                                <label>Restaurant Logo</label>

                                <input type="file" />

                            </div>

                            <div className="form-group">

                                <label>Restaurant Banner</label>

                                <input type="file" />

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="primary-btn submit-btn"
                        >
                            Create My Restaurant
                        </button>

                    </form>

                </div>

            </section>

            {/* FAQ */}

            <section className="partner-faq section">

                <div className="container">

                    <h2>Frequently Asked Questions</h2>

                    <div className="faq-item">

                        <h4>Do I need my own website?</h4>

                        <p>
                            No. Deliserve creates your online restaurant profile
                            so customers can easily discover your business.
                        </p>

                    </div>

                    <div className="faq-item">

                        <h4>How will I receive orders?</h4>

                        <p>
                            Every customer order is sent directly to your
                            WhatsApp number, making order management simple.
                        </p>

                    </div>

                    <div className="faq-item">

                        <h4>Can I update my menu later?</h4>

                        <p>
                            Yes. After creating your restaurant, you'll have a
                            dashboard where you can manage categories, menu
                            items, and restaurant details.
                        </p>

                    </div>

                </div>

            </section>

        </section>
    );
}

export default BecomePartner;