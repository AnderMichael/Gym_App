import React from "react";
interface TextProfileProps {
  machineData: string;
}

const TextProfile = ({machineData}: TextProfileProps) => {
  return (
    <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2 border-[1.5px] border-[#302E46]">
      {machineData}
    </p>
  );
};

export default TextProfile;
