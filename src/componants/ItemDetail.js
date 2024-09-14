import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import CartContext, { cart } from "../assets/data/cart";
import { dishes } from "../assets/data/dishes";
import { extars } from "../assets/data/extras";
import Extra from "./Extra";

const ItemDetail = () => {
  const { id } = useParams();
  const item = dishes.find((i) => i.id === +id);
  const [cart, setCart] = useContext(CartContext);

  const [itemExtra, setItemExtra] = useState(
    extars.filter((i) => item.extars.includes(i.id))
  );

  const getExtrasSelected = (id) => {
    return itemExtra.some((i) => i.id === id);
  };

  const extraList = extars.map((i) => (
    <Extra
      key={i.id}
      extra={i}
      selected={getExtrasSelected(i.id)}
      setItemExtra={setItemExtra}
    />
  ));

  const price = () => {
    let total = item.price;
    itemExtra.forEach((i) => (total += i.price));
    return `${total.toFixed(2)} KWD`;
  };
  const addItem = () => {
    const findItem = cart.find((i) => i.id === +id);

    if (findItem) {
      findItem.quantity += 1;
    } else {
      const newCart = [
        ...cart,
        { ...item, extra: itemExtra, quantity: 1, price: price() },
      ];

      setCart(newCart);
    }
  };
  return (
    <div>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: 500,
          borderBottom: "solid",
          borderColor: "#e9e9e9",
          margin: 10,
        }}
      />
      <div style={{ width: "100%", padding: 10 }}>
        <p className="m-0 fw-bold">{item.name}</p>
        <p className="fw-light">{item.description}</p>
      </div>
      <div style={{ width: "100%", height: 50, background: "#e9e9e9" }}>
        <p className="p-4 ps-2">Extras</p>
      </div>
      {extraList}
      <div style={{ paddingBottom: "60px" }} />
      <div
        className="fixed-bottom p-3 d-flex justify-content-center align-items-center"
        style={{ height: "50px", background: "white", zIndex: 1000 }}>
        <button className="btn btn-dark w-100 ms-2 me-2" onClick={addItem}>
          Add to Cart {price()}
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
