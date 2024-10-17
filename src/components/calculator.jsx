import React, { useState, useEffect } from "react";
import "./calculator.css";

export default function Calculator() {
  const [value, setValue] = useState(5.7);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState("Male");
  const [bmi, setBmi] = useState(null); // State for BMI
  const [showResult, setShowResult] = useState(true); // State for result visibility

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    switch (gender) {
      case "Male":
        setWeight(70);
        setAge(24);
        break;
      case "Female":
        setWeight(60);
        setAge(22);
        break;
      case "Other":
        setWeight(65);
        setAge(23);
        break;
      default:
        break;
    }
  }, [gender]);

  // Calculate BMI
  const calculateBMI = () => {
    const heightInMeters = value * 0.3048; // Convert height to meters
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(
      2
    );
    setBmi(calculatedBmi);
    setShowResult(true); // Show result after calculation
  };

  // Handler functions to increase/decrease values
  const increaseWeight = () => setWeight(weight + 1);
  const decreaseWeight = () => setWeight(weight > 0 ? weight - 1 : 0);
  const increaseAge = () => setAge(age + 1);
  const decreaseAge = () => setAge(age > 0 ? age - 1 : 0);

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className="calsi-body" id="BMI">
      <p className="calsi-heading-style">Calculate your BMI</p>
      <img
        src="./src/assets/BMI/bmi-decor.webp"
        alt="Just Decor"
        className="bmi-styling"
      />
      <img
        src="./src/assets/BMI/bmi-decor2.webp"
        alt="Just Decor"
        className="bmi2-styling"
      />

      <div className="bmi-innerbody">
        <div className="calculator-body">
          <div className="container text-center">
            <div className="bmi-calculator-row">
              <div className="col">
                <button
                  className={`gender-btn ${gender === "Male" ? "active" : ""}`}
                  onClick={() => handleGenderChange("Male")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gender-female"
                    className="gender-svg" viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
                    />
                  </svg>
                  <span>Male</span>
                </button>
              </div>
              <div className="col">
                <button
                  className={`gender-btn ${
                    gender === "Female" ? "active" : ""
                  }`}
                  onClick={() => handleGenderChange("Female")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gender-male"
                    className="gender-svg" viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                    />
                  </svg>
                  Female
                </button>
              </div>
              <div className="col">
                <button
                  className={`gender-btn ${gender === "Other" ? "active" : ""}`}
                  onClick={() => handleGenderChange("Other")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="gender-svg" viewBox="0 0 512 512">
                    <path d="M112 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-31 31L112 78.1l7-7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-7 7 15.2 15.2C187.7 107.6 220.5 96 256 96s68.3 11.6 94.9 31.2l68.8-68.8-31-31c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l96 0c8.8 0 16 7.2 16 16l0 96c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-31-31-68.8 68.8C404.4 187.7 416 220.5 416 256c0 80.2-59 146.6-136 158.2l0 17.8 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-17.8C155 402.6 96 336.2 96 256c0-35.5 11.6-68.3 31.2-94.9L112 145.9l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l7-7L58.3 92.3l-31 31c-4.6 4.6-11.5 5.9-17.4 3.5S0 118.5 0 112L0 16C0 7.2 7.2 0 16 0l96 0zM352 256a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
                  </svg>
                  Other
                </button>
              </div>
            </div>

            <div className="bmi-height">
              <div className="height-container">
                <div className="range-cm">
                  <span>240</span>
                  <span>220</span>
                  <span>200</span>
                  <span>180</span>
                  <span>160</span>
                  <span>140</span>
                  <span>120</span>
                  <span>100</span>
                  <span>&nbsp;80</span>
                </div>
                <div id="heightValue">{value} ft</div>
                <div className="range-group">
                  <input
                    type="range"
                    className="range"
                    min="2.6"
                    max="8"
                    step="0.1"
                    value={value}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="AgeWeight-section">
                <div className="AW-box">
                  <p className="weight-text">Weight</p>
                  <p className="num">{weight}</p>
                  <div className="bmi-us-btns">
                    <button className="btn-down" onClick={decreaseWeight}>
                      -
                    </button>
                    <button className="btn-up" onClick={increaseWeight}>
                      +
                    </button>
                  </div>
                </div>
                <div className="AW-box">
                  <p className="age-text">Age</p>
                  <p className="num">{age}</p>
                  <div className="bmi-us-btns">
                    <button className="btn-down" onClick={decreaseAge}>
                      -
                    </button>
                    <button className="btn-up" onClick={increaseAge}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button id="calculate-BMI" onClick={calculateBMI}>
            Calculate your BMI
          </button>
          {showResult && (
            <p className="BMI-result">
              Your BMI is: <span>{bmi !== null ? bmi : "N/A"}</span>
            </p>
          )}
        </div>
        <img src="./src/assets/BMI/thomas.webp" alt="Kizaru" className="bmi-thomas"/>
      </div>
    </div>
  );
}
