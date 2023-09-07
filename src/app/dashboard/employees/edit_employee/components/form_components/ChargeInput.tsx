import React from "react";

interface ChargeInputProps {
  register: any;
  value: string;
}

const ChargeInput: React.FC<ChargeInputProps> = ({ register, value }) => {
  return (
    <div className="flex flex-col mb-2">
        <label className="text-[#302E46] font-semibold text-xl font-jost">
          Cargo
        </label>
        <select
          className="bg-white text-gray-800 rounded-lg text-center h-10"
          placeholder="Cargo"
          {...register("charge", { value: value })}
        >
          <option value="Entrenador">Entrenador</option>
          <option value="Conserje">Conserje</option>
        </select>
    </div>
  );
};

export default ChargeInput;
