import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhoneNumberInput = () => {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleNumberInput = (event) => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/display", { state: number });
  };

  console.log(number, "phone number");
  return (
    <div className="mainContainer">
      <div className="inputFieldContainer">
        <div className="numberDisplay">
          {number.length <= 0 ? "Phone Number" : number}
        </div>
        <div className="userInput">
          <input
            type="text"
            onChange={handleNumberInput}
            value={number}
            maxLength="10"
            placeholder="Enter A 10 Digit Number"
            style={{
              color: "black",
              backgroundColor: " white",
              border: "1px solid black",
              width: "99%",
              height: "40px",
              fontSize: "20px",
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={number.length < 10 ? true : false}
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
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export { PhoneNumberInput };
