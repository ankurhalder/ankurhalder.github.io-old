import { useEffect, useState } from "react";

const Loader = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(false);
    }, 1000);

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
