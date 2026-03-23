"use client";
import { useState } from 'react';

export default function MySelect() {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <label htmlFor="options">Choose an option: </label>
      <select 
        id="options" 
        value={selected} 
        onChange={handleChange}
        className="border p-2 rounded"
      >
		<option value="" disabled>Select one...</option>
		<option value="option1">Laptop</option>
		<option value="option2">Smart Phone</option>
		<option value="option3">Tablet</option>
		<option value="option3">Game Console</option>
		<option value="option3">Other</option>
	  </select>
	  <p>Selected: {selected}</p>
	</div>
  );
}


