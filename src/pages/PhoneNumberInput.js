import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const PhoneNumberInput = () => {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleNumberInput = (event) => {
    const { value } = event.target;
    const formattedNumber = formatNumber(value);
    setNumber(formattedNumber);
  };

  const formatNumber = (value) => {
    if (!value) return value;
    const number = value.replace(/[^\d]/g, "");
    const numberLength = number.length;
    if (numberLength < 4) return number;
    if (numberLength < 7) {
      return `(${number.slice(0, 3)}) ${number.slice(3)}`;
    }
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
      6,
      10
    )}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/display", { state: number });
  };

  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div
          className={number.length < 14 ? "numberDisplayRed" : "numberDisplay"}
        >
          {number.length <= 0 ? "###" : number}
        </div>
        <div className="numberInput">
          <input
            type="text"
            onChange={handleNumberInput}
            value={number}
            maxLength="14"
            style={{
              color: "black",
              backgroundColor: " white",
              border: "1px solid black",
              width: "99%",
              height: "40px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          />
        </div>
        <div
          className={number.length < 14 ? "warningMessage" : "successMessage"}
        >
          {number.length < 14 ? "Submit A 10 Digit Phone Number" : "DONE"}
        </div>

        <button
          onClick={handleSubmit}
          disabled={number.length < 14 ? true : false}
          className={number.length < 14 ? "disabledButton" : "submitButton"}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export { PhoneNumberInput };
