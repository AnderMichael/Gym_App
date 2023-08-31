interface buttonApp {
  title: string;
  color?: string;
  hover?: string;
  onClick?: () => void;
}

const Button = (props: buttonApp) => {
  const hover = props.hover ? props.hover : "#345678";
  const color = props.color ? props.color : "#15133B";

  const buttonProps = `flex-1 bg-[${color}] hover:bg-[${hover}] p-2 rounded-xl`;
  
  console.log(buttonProps)
  return (
    <>
    <button className={buttonProps} onClick={props.onClick}>
      <h1 className="font-bold font-jost text-lg text-white">{props.title}</h1>
    </button>
    </>
  );
};

export default Button;
