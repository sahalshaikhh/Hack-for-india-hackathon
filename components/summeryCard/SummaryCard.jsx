import React from "react";
import { useRouter } from "next/router";

function calculateTotalBill(bill) {
  // Calculate the total bill based on the prices of items in the bill array
  return bill
    .reduce((total, item) => total + parseFloat(item.price), 0)
    .toFixed(2);
}

function BillPage() {
  const router = useRouter();
  const { bill } = router.query; // Get the bill query parameter

  // Parse the bill JSON string into an array
  const billArray = JSON.parse(bill || "[]");

  // Calculate total bill based on the parsed bill array
  const totalBill = calculateTotalBill(billArray);

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-semibold mb-4 text-center text-blue-900">
        Bill Summary
      </h1>
      <ul className="list-disc pl-4">
        {billArray.map((item, index) => (
          <li
            key={index}
            className="mb-2 flex justify-between items-center text-gray-800"
          >
            {/* Display food item name, quantity, and price */}
            <span className="text-lg">{item.name}</span>
            <span className="text-lg font-semibold">{item.price} Rs.</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center text-xl font-semibold text-orange-500">
        <span>Total Bill:</span>
        <span>{totalBill} Rs.</span>
      </div>
      <div className="mt-6">
        <button
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => window.print()}
        >
          Print Bill
        </button>
      </div>
    </div>
  );
}

export default BillPage;
