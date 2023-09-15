import React from "react";

interface LabelProfileProps {
  title: string;
}

const LabelProfile = ({ title }: LabelProfileProps) => {
  return (
    <label id="seeMachineLabelProfile" className="text-[#302E46] font-semibold text-xl font-jost">
      {title}
    </label>
  );
};

export default LabelProfile;
