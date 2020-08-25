import React from 'react';

function SelectBuyers({ setNumberOfBuyers }) {
  function handleChange(event) {
    setNumberOfBuyers(event.target.value);
  }
  return (
    <div>
      <select onChange={handleChange}>
        <option name="15">15</option>
        <option name="10">10</option>
        <option name="5">5</option>
      </select>
    </div>
  );
}

export default SelectBuyers;
