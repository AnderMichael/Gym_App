interface buttonApp {
  title: string;
  color?: string;
  hover?: string;
  onClick?: () => void;
}

const Button = (props: buttonApp) => {
  const hover = props.hover ? props.hover : "bg-[#345678]";
  const color = props.color ? props.color : "bg-[#15133B]";
  return (
    <>
      <button
        className={`flex-1 ${color} hover:${hover} p-2 rounded-xl`}
        onClick={props.onClick}
      >
        <h1 className="font-bold font-jost text-lg text-white">
          {props.title}
        </h1>
      </button>
    </>
  );
};

export default Button;
