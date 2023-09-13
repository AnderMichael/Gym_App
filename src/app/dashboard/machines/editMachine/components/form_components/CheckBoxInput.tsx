import React from "react";

interface CheckBoxInputProps {
  machineData: boolean;
  onClick: () => void;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
  machineData,
  onClick,
}) => {
  return (
    <div className="mb-2 flex flex-1 mr-3 items-center justify-evenly">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        ¿Recibe Mantenimiento?
      </label>
      <input
        type="checkbox"
        className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onClick={onClick}
      />
    </div>
  );
};

export default CheckBoxInput;
