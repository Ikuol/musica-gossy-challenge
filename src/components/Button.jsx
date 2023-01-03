import React from "react";

const Button = ({ bgColor, Width, Border, text, className, onClick }) => {
  return (
    <div>
      <button
        className={className}
        style={{
          background: `${bgColor}`,
          width: `${Width}`,
          border: `${Border}`
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
