import React from "react";

interface CheckBoxInputProps {
  register: any;
  onClick: () => void;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ register, onClick }) => {
  return (
    <div className="mb-2 flex flex-1 mr-3 items-center space-x-4 justify-center">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        ¿Recibe Mantenimiento?
      </label>
      <input
        type="checkbox"
        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onClick={onClick}
        {...register("maintenance")}
      />
    </div>
  );
};

export default CheckBoxInput;
