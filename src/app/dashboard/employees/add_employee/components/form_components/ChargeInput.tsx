import React from 'react';

interface ChargeInputProps {
  register: any;
}

const ChargeInput: React.FC<ChargeInputProps> = ({ register }) => {
  return (
      <div className="flex flex-col mb-2">
        <label className="text-[#302E46] font-semibold text-xl font-jost">
          Cargo
        </label>
        <select
          className="bg-white text-gray-800 rounded-lg text-center h-10"
          placeholder="Cargo"
          {...register("charge")}
        >
          <option value="Entrenador">Entrenador</option>
          <option value="Conserje">Conserje</option>
        </select>
      </div>
  );
};

export default ChargeInput;
