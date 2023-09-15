import React from "react";

interface TitleProfileProps {
  title: string;
}

const TitleProfile: React.FC<TitleProfileProps> = ({ title }) => {
  return (
    <h1 id="seeMachineProfileTitle" className="text-[#302E46] font-bold font-jost text-4xl ">{title}</h1>
  );
};

export default TitleProfile;
