import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

export const Input = ({ value, type, placeholder, className, onChange }) => {
  return (
    <>
      <input
        value={value}
        type={type}
        className={className}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </>
  );
};

export const Checkbox = ({ size1, size2, className1, className2 }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      {checked === true ? (
        <BsCheck size={size1} className={className1} onClick={() => setChecked(false)} />
      ) : (
        <input size={size2} type="checkbox" className={className2} onClick={handleChecked} />
      )}
    </>
  );
};

export const Link = ({ className, children, href }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export const Button = ({ type, className, children }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
