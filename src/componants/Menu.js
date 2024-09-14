import React from "react";
import { dishes } from "../assets/data/dishes";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = dishes.map((i) => <MenuItem item={i} key={i.id} />);
  return (
    <div
      className="d-flex flex-column justify-content-around align-items-center "
      style={{ width: "100%" }}>
      {menu}
    </div>
  );
};

export default Menu;
