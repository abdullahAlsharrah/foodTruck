import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartContext from "../assets/data/cart";

const CartItem = ({ item }) => {
  const [cart, setCart] = useContext(CartContext);
  const remove = () => {
    setCart(cart.filter((i) => i.id !== item.id));
  };
  return (
    <div
      className="d-flex justify-content-around align-items-start p-2 mb-3 custom-border "
      style={{
        width: 700,
        borderRadius: 10,
      }}>
      <p className="align-self-center">{item.quantity}X</p>

      <img src={item.image} alt={item.name} style={{ width: 90 }} />
      <div className=" d-flex flex-column">
        <p className="m-0 fw-bold">{item.name}</p>
        <p className="m-0 fw-light">{item.description}</p>
        <div className="d-flex flex-wrap">
          {item.extra.map((i) => (
            <p style={{ color: "grey", marginRight: 5, fontSize: 10 }}>
              {i.name}
            </p>
          ))}
        </div>
      </div>
      <div
        className="d-flex justify-content-around align-items-center flex-column"
        style={{ height: 90 }}>
        <RiDeleteBin6Line color={"red"} onClick={remove} />

        <p className="m-0 me-1 fw-bold">{parseInt(item.price).toFixed(2)} KD</p>
      </div>
    </div>
  );
};

export default CartItem;
