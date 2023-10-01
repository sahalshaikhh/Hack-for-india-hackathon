import React, { useState } from "react";

function MenuItem() {
  // Define an array of cuisines and their menus with prices
  const cuisines = [
    {
      name: "Chinese",
      items: [
        { name: "Shezwan rice", price: 10 },
        { name: "Hakka Noodles", price: 12 },
        { name: "Manchaw Noodles", price: 11 },
      ],
    },
    {
      name: "Italian",
      items: [
        { name: "Pasta", price: 9 },
        { name: "Pizza", price: 15 },
        { name: "Spaghetti", price: 13 },
      ],
    },
    {
      name: "Indian",
      items: [
        { name: "Dal Chawal", price: 8 },
        { name: "Kadi", price: 10 },
        { name: "Sabzi", price: 9 },
      ],
    },
  ];

  // Initialize state to keep track of selected cuisine
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  // Initialize state to keep track of selected items and their quantities
  const [selectedItems, setSelectedItems] = useState({});

  // Function to handle cuisine selection
  const handleCuisineSelect = (cuisineIndex) => {
    setSelectedCuisine(cuisineIndex);
  };

  // Function to handle quantity selection
  const handleQuantityChange = (cuisineIndex, itemIndex, quantity) => {
    if (quantity >= 0) {
      const newSelectedItems = { ...selectedItems };
      if (!newSelectedItems[cuisineIndex]) {
        newSelectedItems[cuisineIndex] = {};
      }
      newSelectedItems[cuisineIndex][itemIndex] = quantity;
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <>
      <ul>
        {cuisines.map((cuisine, cuisineIndex) => (
          <li key={cuisineIndex}>
            <button onClick={() => handleCuisineSelect(cuisineIndex)}>
              {cuisine.name}
            </button>
            {selectedCuisine === cuisineIndex && (
              <ul>
                {cuisine.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-center">
                    {item.name} - Price: ${item.price}
                    <div>
                      Quantity:{" "}
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            cuisineIndex,
                            itemIndex,
                            selectedItems[cuisineIndex]?.[itemIndex] - 1 || 0
                          )
                        }
                      >
                        -
                      </button>
                      {selectedItems[cuisineIndex]?.[itemIndex] || 0}
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            cuisineIndex,
                            itemIndex,
                            (selectedItems[cuisineIndex]?.[itemIndex] || 0) + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuItem;
