import React, { useState } from "react";

function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={`checkbox ${isChecked ? "checked" : ""}`}>
      <input
        type="checkbox"
        name="toggle"
        className="checkbox"
        onChange={handleChange}
      />
    </div>
  );
}

export default CheckboxComponent;
