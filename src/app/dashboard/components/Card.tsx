"use client";
interface CardMainMenuProps {
  title: string;
  color: string;
  redirection?: () => void;
}

const Card = ({ title, color, redirection }: CardMainMenuProps) => {
  return (
    <>
      <button
        className={`${color} hover:bg-opacity-60 flex max-w-sm rounded overflow-hidden w-[80%] h-[45%] justify-center items-center mx-5 shadow-2x `}
        onClick={redirection}
      >
        <h1 className="font-bold mb-2 text-white text-3xl">{title}</h1>
      </button>
    </>
  );
};

export default Card;
