import React from "react";

interface buttonApp {
  title: string;
}

const Button = (props: buttonApp) => {
  return (
    <button className="bg-[#15133B] p-2 text-white rounded-xl">
      <h1>{props.title}</h1>
    </button>
  );
};

export default Button;
