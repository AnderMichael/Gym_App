import React from "react";
interface TextProfileProps {
  clientData: string;
}

const TextProfile = ({clientData}: TextProfileProps) => {
  return (
    <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
      {clientData}
    </p>
  );
};

export default TextProfile;
