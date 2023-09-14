"use client";
interface CardMainMenuProps {
  title: string;
  color: string;
  redirection?: () => void;
  disabled?: boolean;
}

const Card = ({
  title,
  color,
  redirection,
  disabled = false,
}: CardMainMenuProps) => {
  return (
    <>
      <button
        className={`${!disabled ? `${color} hover:bg-opacity-60` : "bg-gray-400"} rounded-2xl flex max-w-sm overflow-hidden w-[80%] h-[45%] justify-center items-center mx-5 shadow-xl shadow-[#C0C0C0]`}
        onClick={redirection}
        disabled={disabled}
      >
        <h1 className="font-bold mb-2 text-white text-3xl">{title}</h1>
      </button>
    </>
  );
};

export default Card;
