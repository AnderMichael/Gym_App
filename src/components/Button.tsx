import React from "react";

interface buttonApp {
  title: string;
  onClick?: () => void;
}

const Button = (props: buttonApp) => {
  return (
    <button
      className="bg-[#15133B] p-2 text-white rounded-xl"
      onClick={props.onClick}
    >
      <h1>{props.title}</h1>
    </button>
  );
};

export default Button;
