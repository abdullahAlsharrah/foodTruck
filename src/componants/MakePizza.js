import React, { useState } from "react";

// Placeholder images for the toppings
const toppingsImages = {
  cheese: "https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_make_Pizza_Cheese.jpg", // Cheese topping image
  pepperoni: "https://www.setasdelacosta.com.co/wp-content/uploads/2020/09/PeperoniEko.png", // Pepperoni topping image
  olives: "https://upload.wikimedia.org/wikipedia/commons/2/26/Black_Olives.jpg", // Olives topping image
  mushroom: "https://upload.wikimedia.org/wikipedia/commons/6/64/White_button_mushroom.png", // Mushroom topping image
};

const MakePizza = () => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  // Function to toggle the selection of a topping
  const toggleTopping = (topping) => {
    if (selectedToppings.includes(topping)) {
      // Remove the topping if already selected
      setSelectedToppings(selectedToppings.filter((t) => t !== topping));
    } else {
      // Add the topping if not selected
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <h2 className="text-center">Make Your Own Pizza</h2>
      
      {/* Base plain pizza image */}
      <div style={{ position: "relative", width: "100%", height: 500 }}>
        <img
          src="https://www.simplyrecipes.com/thmb/LbUexhMFTkPyxDHuIqSRpbZZRMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-LEAD-02-fde0292b943245e1af62f0672d8ea0f2.jpg" // Base pizza image URL
          alt="Plain Pizza"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Render cheese topping if selected */}
        {selectedToppings.includes("cheese") && (
          <img
            src={toppingsImages.cheese}
            alt="Cheese Topping"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              zIndex: 2,
              background: "transparent",
            }}
          />
        )}

        {/* Render pepperoni topping if selected */}
        {selectedToppings.includes("pepperoni") && (
          <img
            src={toppingsImages.pepperoni}
            alt="Pepperoni Topping"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              zIndex: 3,
              background: "transparent",
            }}
          />
        )}

        {/* Render olives topping if selected */}
        {selectedToppings.includes("olives") && (
          <img
            src={toppingsImages.olives}
            alt="Olives Topping"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              zIndex: 4,
              background: "transparent",
            }}
          />
        )}

        {/* Render mushroom topping if selected */}
        {selectedToppings.includes("mushroom") && (
          <img
            src={toppingsImages.mushroom}
            alt="Mushroom Topping"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              zIndex: 5,
              background: "transparent",
            }}
          />
        )}
      </div>

      <div className="text-center mt-4">
        <h4>Select Toppings</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className={`btn btn-${selectedToppings.includes("cheese") ? "success" : "secondary"}`}
            onClick={() => toggleTopping("cheese")}
          >
            Cheese
          </button>
          <button
            className={`btn btn-${selectedToppings.includes("pepperoni") ? "success" : "secondary"}`}
            onClick={() => toggleTopping("pepperoni")}
          >
            Pepperoni
          </button>
          <button
            className={`btn btn-${selectedToppings.includes("olives") ? "success" : "secondary"}`}
            onClick={() => toggleTopping("olives")}
          >
            Olives
          </button>
          <button
            className={`btn btn-${selectedToppings.includes("mushroom") ? "success" : "secondary"}`}
            onClick={() => toggleTopping("mushroom")}
          >
            Mushroom
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakePizza;
