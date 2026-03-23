"use client";
import { useState, ChangeEvent } from 'react';

export default function MySelect() {
  const [selected, setSelected] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div>
		<label htmlFor="options">Choose your device: </label>
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


