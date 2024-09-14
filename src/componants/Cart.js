import React, { useContext } from "react";
import CartContext from "../assets/data/cart";
import CartItem from "./CartItem";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const cartList = cart?.map((i) => <CartItem item={i} key={i.id} />);
  return <div>{cartList}</div>;
};

export default Cart;
