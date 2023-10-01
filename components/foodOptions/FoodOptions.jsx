import React from "react";
import styles from "./FoodOptions.module.css"; // Import the CSS module

function FoodOptions({ selectedOption, onSelectOption }) {
  const foodOptions = ["All", "Roties", "Veg", "NonVeg", "Punjabi", "Gujarati"]; // Add more options as needed

  return (
    <div
      className={`${styles.foodOptions} overflow-x-scroll ml-8 my-6 text-xs font-[inter]`}
    >
      {" "}
      {/* Apply the .foodOptions class */}
      {foodOptions.map((option, index) => (
        <div key={index} className={styles.optionWrapper}>
          {" "}
          {/* Apply the .optionWrapper class */}
          <button
            onClick={() => onSelectOption(option)}
            className={`${styles.optionButton} ${
              selectedOption === option ? styles.active : ""
            }`}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FoodOptions;
