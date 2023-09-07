interface buttonApp {
  title: string;
  color?: string;
  onClick?: () => void;
}

const Button = (props: buttonApp) => {
  const color = props.color ? props.color : "bg-[#15133B]";
  return (
    <>
      <button
        className={`flex-1 ${color} hover:opacity-50 p-2 rounded-xl`}
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
