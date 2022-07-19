import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DisplayNumber = () => {
  const [count, setCount] = useState(0);
  const phoneNumbers = [];

  const location = useLocation();
  const navigate = useNavigate();

  const displayNumbers = () => {
    let i = 1;
    const number = formatNumber(location.state);
    while (i <= count) {
      phoneNumbers.push(number);
      i++;
    }
    console.log(phoneNumbers, "current count");
    return (
      <div>
        {phoneNumbers.map((number) => {
          return <div className="number"> {number}</div>;
        })}
      </div>
    );
  };

  const formatNumber = (number) => {
    let cleaned = ("" + number).replace(/\D/g, "");

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return null;
  };

  const resetNumber = () => {
    navigate("/");
  };

  useState(() => {
    setCount(location.state.slice(-1));
  }, []);

  return (
    <div className="listDisplay">
      <div className="listContainer">{displayNumbers()}</div>
      <button
        onClick={resetNumber}
        style={{
          color: "black",
          backgroundColor: " white",
          border: "2px solid black",
          width: "50%",
          height: "50px",
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        RESET
      </button>
    </div>
  );
};

export { DisplayNumber };
