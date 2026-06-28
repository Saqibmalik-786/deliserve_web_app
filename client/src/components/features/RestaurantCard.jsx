import "./RestaurantCard.css";

function RestaurantCard() {

    return (

        <div className="restaurant-card">

            <img
                src="https://placehold.co/600x350"
                alt="Restaurant"
            />

            <div className="restaurant-info">

                <span className="restaurant-category">
                    Pizza
                </span>

                <h3>
                    Pizza House
                </h3>

                <p>
                    Delicious pizzas, burgers and fast food.
                </p>

                <div className="restaurant-footer">

                    <span>⭐ 4.8</span>

                    <button>
                        View Menu
                    </button>

                </div>

            </div>

        </div>

    )

}

export default RestaurantCard;