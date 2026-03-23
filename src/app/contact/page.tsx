"use client";

import { useState } from 'react';

export default function MySelectField() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <label htmlFor="fruit-select" className="font-medium text-gray-700">
        Pick a fruit:
      </label>
      
      <select
        id="fruit-select"
        value={selectedOption}
        onChange={handleSelectChange}
        className="border border-gray-300 rounded-md p-2 bg-white text-black"
      >
        <option value="" disabled>-- Please choose an option --</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>

      {selectedOption && (
        <p className="mt-2 text-sm text-blue-600">
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
}