import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// Topping images with Wikipedia URLs
const toppingsImages = {
  cheese: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQy1iJCo3Ms-cOMNDrOLV1zYQyT84fWunzvw&s",
  pepperoni: "https://www.setasdelacosta.com.co/wp-content/uploads/2020/09/PeperoniEko.png",
  mushroom: "https://liof.nl/application/themes/ztheme/img/itd/infographic__mushroom.png",
  tomatopaste: "https://www.morningstarco.com/wp-content/uploads/2020/04/Paste.png",
};

const PizzaApp = () => {
  const [show, setShow] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);
  
  // Pizza menu with images from Wikipedia
  const pizzas = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      name: "Cheese Pizza",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
    },
    {
      id: 3,
      name: "Make Your Own Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4D8xoQF1q5f-I4vyAA3QqNgM_r9le2qHOUg&s"
    }
  ];

  // Handle modal opening and closing
  const handleClose = () => setShow(false);
  const handleShow = (pizza) => {
    setSelectedPizza(pizza);
    setShow(true);
  };

  // Handle topping selection for "Make Your Own Pizza"
  const handleToppingChange = (topping) => {
    setSelectedToppings((prevToppings) =>
      prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping)
        : [...prevToppings, topping]
    );
  };

  // Render pizza with selected toppings
  const renderPizzaWithToppings = () => {
    return (
      <div style={{ position: "relative", width: "300px", height: "300px" }}>
        <img
          src={pizzas[2].image} // Plain pizza image for "Make Your Own"
          alt="Plain Pizza"
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative" }}
        />
        {selectedToppings.includes("cheese") && (
          <img
            src={toppingsImages.cheese}
            alt="Cheese Topping"
            style={{
              position: "absolute",
              top: 50,
              left: 50,
              width: "50%",
              height: "50%",
              objectFit: "cover",
              zIndex: 2,
            }}
          />
        )}
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
              objectFit: "cover",
              zIndex: 3,
            }}
          />
        )}
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
              objectFit: "cover",
              zIndex: 4,
            }}
          />
        )}
        {selectedToppings.includes("tomatopaste") && (
          <img
            src={toppingsImages.tomatopaste}
            alt="Tomato Paste"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 5,
            }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Pizza Menu</h1>
      <p>Can order only 1 pizza for your health</p>

      <div className="d-flex justify-content-around">
        {pizzas.map((pizza) => (
          <div key={pizza.id} style={{ textAlign: "center" }}>
            <img
              src={pizza.image}
              alt={pizza.name}
              style={{ width: "200px", cursor: "pointer" }}
              onClick={() => handleShow(pizza)}
            />
            <p>{pizza.name}</p>
          </div>
        ))}
      </div>

      {/* Modal for pizza details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPizza?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPizza?.id === 3 ? (
            <>
              <p>Select your toppings:</p>
              <Form>
                {Object.keys(toppingsImages).map((topping) => (
                  <Form.Check
                    key={topping}
                    type="checkbox"
                    label={topping}
                    onChange={() => handleToppingChange(topping)}
                    checked={selectedToppings.includes(topping)}
                  />
                ))}
              </Form>
              <div className="mt-3">
                <h5>Your Pizza:</h5>
                {renderPizzaWithToppings()}
              </div>
            </>
          ) : (
            <div>
              <img
                src={selectedPizza?.image}
                alt={selectedPizza?.name}
                style={{ width: "100%" }}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              alert("Order will be delivered soon");
              handleClose();
            }}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PizzaApp;
