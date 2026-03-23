"use client";

import { useState, ChangeEvent } from 'react'; // 1. Import ChangeEvent

export default function MySelectField() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  // 2. Add the type to the event parameter
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="border p-2 rounded"
    >
      <option value="" disabled>Select one...</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
    </select>
  );
}
