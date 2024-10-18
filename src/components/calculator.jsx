import React, { useState, useEffect } from 'react';
import './calculator.css';

export default function Calculator() {
  const [value, setValue] = useState(5.7);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState('Male');
  const [bmi, setBmi] = useState(null); // State for BMI
  const [showResult, setShowResult] = useState(true); // State for result visibility

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    switch (gender) {
      case 'Male':
        setWeight(70);
        setAge(24);
        break;
      case 'Female':
        setWeight(60);
        setAge(22);
        break;
      case 'Other':
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
        src="/assets/BMI/bmi-decor.webp"
        alt="Just Decor"
        className="bmi-styling"
      />
      <img
        src="/assets/BMI/bmi-decor2.webp"
        alt="Just Decor"
        className="bmi2-styling"
      />

      <div className="bmi-innerbody">
        <div className="calculator-body">
          <div className="container text-center">
            <div className="bmi-calculator-row">
              <div className="col">
                <button
                  className={`gender-btn ${gender === 'Male' ? 'active' : ''}`}
                  onClick={() => handleGenderChange('Male')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    // class="bi bi-gender-male"
                    className="gender-svg bi bi-gender-male"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                    />
                  </svg>
                  <span>Male</span>
                </button>
              </div>
              <div className="col">
                <button
                  className={`gender-btn ${
                    gender === 'Female' ? 'active' : ''
                  }`}
                  onClick={() => handleGenderChange('Female')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="gender-svg bi bi-gender-female"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
                    />
                  </svg>
                  Female
                </button>
              </div>
            </div>

            <div className="bmi-height">
              <div className="height-container">
                <div className="range-cm">
                  <span>8 ft</span>
                  <span>7 ft</span>
                  <span>6 ft</span>
                  <span>5 ft</span>
                  <span>4 ft</span>
                  <span>3 ft</span>
                  <span>2 ft</span>
                </div>
                <div id="heightValue">{value} ft</div>
                <div className="range-group">
                  <input
                    type="range"
                    className="range"
                    min="2"
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
          {showResult && bmi && (
            <p className="BMI-result">
              Your BMI is: <span>{bmi !== null ? bmi : 'N/A'}</span>
            </p>
          )}
        </div>
        <img
          src="/assets/BMI/thomas.webp"
          alt="Kizaru"
          className="bmi-thomas"
        />
      </div>
    </div>
  );
}
