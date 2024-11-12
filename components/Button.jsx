import React from "react";

const Button = ({ content, addClass }) => {
  return (
    <div>
      <button
        className={`  rounded-[2vw]  font-iskry bg-[#7db6dc] hover:bg-white  ${addClass}  `}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
