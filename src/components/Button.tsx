import React from "react";

interface buttonApp {
  title: string;
  color?: string;
  onClick?: () => void;
}

const Button = (props: buttonApp) => {
  const buttonProps = `flex-1 bg-[${props.color ? props.color : "#15133B"}] p-2 text-white rounded-xl`;
  return (
    <button className={buttonProps} onClick={props.onClick}>
      <h1 className="font-semibold">{props.title}</h1>
    </button>
  );
};

export default Button;
