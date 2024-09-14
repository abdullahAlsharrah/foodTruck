import logo from "./logo.svg";
import "./App.css";
import { Outlet, useNavigate } from "react-router";
import { IoChevronBackOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import CartContext from "./assets/data/cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div
        className="d-flex align-items-center justify-content-between"
        style={{
          width: "100%",
          height: 50,
          borderBottom: "solid",
          borderColor: "#e9e9e9",
        }}>
        {currentPath !== "/" ? (
          <IoChevronBackOutline size={25} onClick={() => navigate(-1)} />
        ) : null}
        <IoBagOutline onClick={() => navigate("/cart")} />
      </div>
      <Outlet />
    </CartContext.Provider>
  );
}

export default App;
