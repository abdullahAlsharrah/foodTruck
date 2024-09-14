import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="no-link-style">
      <div
        className="d-flex justify-content-around align-items-start p-2 mb-3 custom-border "
        style={{
          width: 700,
          borderRadius: 10,
        }}>
        <img src={item.image} alt={item.name} style={{ width: 90 }} />
        <div className=" d-flex flex-column">
          <p className="m-0 fw-bold">{item.name}</p>
          <p className="m-0 fw-light">{item.description}</p>
        </div>
        <div className="d-flex align-self-end justify-content-center align-items-center ">
          <p className="m-0 me-1 fw-bold"> {item.price.toFixed(2)} KD</p>
          <Button
            variant="outline-dark fw-bold"
            style={{ height: 30, lineHeight: 1 }}>
            + Add
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
