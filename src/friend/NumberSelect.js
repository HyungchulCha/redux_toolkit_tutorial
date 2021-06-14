import React from 'react';

const NumberSelect = ({ value, options, onChange, postfix }) => {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => {
          const number = Number(e.target.value);
          onChange(number);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {postfix}
    </div>
  );
};

export default NumberSelect;
