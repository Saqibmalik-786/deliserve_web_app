import "./BecomePartner.css";

function BecomePartner() {
  return (
    <section className="partner section">

      <div className="container">

        <div className="partner-content">

          <div className="partner-left">

            <span className="partner-badge">
              🚀 Grow Your Food Business
            </span>

            <h2>
              Bring Your Restaurant Online
              <span> In Minutes.</span>
            </h2>

            <p>
              Join Deliserve and showcase your restaurant to more customers.
              Create your store, upload your menu, and receive orders directly
              on WhatsApp—no website, no app, and no complicated setup.
            </p>

            <div className="partner-features">

              <div className="feature">
                ✅ Create your restaurant for free
              </div>

              <div className="feature">
                ✅ Upload unlimited food items
              </div>

              <div className="feature">
                ✅ Receive orders directly on WhatsApp
              </div>

            </div>

            <button className="primary-btn">
              Become a Partner
            </button>

          </div>

          <div className="partner-right">

            <img
              src="/partner.png"
              alt="Restaurant Owner"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default BecomePartner;