import React, { useState } from "react";
import FoodOptions from "@/components/foodOptions/FoodOptions";
import FoodItems from "@/components/foodItems/FoodItems";

function Home() {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <FoodOptions
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
      />

      <FoodItems selectedOption={selectedOption} />
    </div>
  );
}

export default Home;
