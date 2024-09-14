import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Extra({ extra, selected, setItemExtra }) {
  // State to manage checkbox status
  const [isChecked, setIsChecked] = useState(selected);

  // Handler for checkbox change
  const handleCheckboxChange = () => {
    const updatedCheckedStatus = !isChecked;
    setIsChecked(updatedCheckedStatus);

    setItemExtra((prev) => {
      if (updatedCheckedStatus) {
        // Add the extra if it is checked
        return [...prev, extra];
      } else {
        // Remove the extra if it is unchecked
        return prev.filter((i) => i.id !== extra.id);
      }
    });
  };

  return (
    <div className={`container mt-3`} onClick={handleCheckboxChange}>
      <div
        className={`p-3 mb-3 border rounded d-flex align-items-center ${
          isChecked ? "border-dark" : "border-light"
        }`}
        style={{ borderWidth: "2px" }}>
        <div className="form-check">
          <input
            type="checkbox"
            id={`extraCheckbox-${extra.id}`}
            className="form-check-input"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="ms-4">
          <label
            htmlFor={`extraCheckbox-${extra.id}`}
            className="form-check-label m-0">
            {extra.name}
          </label>
          <p className="m-0">Price: {extra.price.toFixed(2)} KD</p>
        </div>
      </div>
    </div>
  );
}

export default Extra;
