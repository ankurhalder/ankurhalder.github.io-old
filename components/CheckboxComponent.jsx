import React, { useState, useEffect } from "react";

function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    document.body.classList.add("theme-light");
    return () => {
      document.body.classList.remove("theme-light");
    };
  }, []);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
  };
  //
  //
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
