import React from "react";
interface TextProfileProps {
  machineData: string;
}

const TextProfile = ({machineData}: TextProfileProps) => {
  return (
    <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
      {machineData}
    </p>
  );
};

export default TextProfile;
