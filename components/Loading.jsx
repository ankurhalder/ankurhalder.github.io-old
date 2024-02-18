import { useEffect, useState } from "react";

const Loader = () => {
  const [isActive, setIsActive] = useState(true); // Initially set to true to trigger the loader on component mount

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`loader ${isActive ? "loader--active" : ""}`}>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="loader__tile"></div>
      ))}
    </div>
  );
};

export default Loader;
