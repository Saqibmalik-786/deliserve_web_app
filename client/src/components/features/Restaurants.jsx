import "./Restaurants.css";
import RestaurantCard from "./RestaurantCard";

function Restaurants() {

    return (

        <section className="restaurants section">

            <div className="container">

                <div className="section-header">

                    <div>

                        <h2 className="section-title">
                            Nearby Restaurants
                        </h2>

                        <p className="section-subtitle">
                            Discover popular local restaurants and explore their delicious menus.
                        </p>

                    </div>

                    <button className="view-all-btn">
                        View All
                    </button>

                </div>

                <div className="restaurants-grid">

                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />

                </div>

            </div>

        </section>

    )

}

export default Restaurants;