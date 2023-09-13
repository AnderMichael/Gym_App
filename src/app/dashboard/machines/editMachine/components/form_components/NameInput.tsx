import React from "react";
import Machine from "../../../types/Machine";

interface NameInputProps {
  register: any;
  errors: any;
  machineData: string;
}

const NameInput: React.FC<NameInputProps> = ({ register, machineData }) => {
  return (
    <div className="flex-col flex mb-2 flex-1">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        Nombre
      </label>
      <select
        className="bg-white text-gray-800 rounded-lg text-center h-10"
        {...register("name", { value: machineData })}
      >
        <option value="Trotadora">Trotadora</option>
        <option value="Maquina Smith">Maquina Smith</option>
        <option value="Maquina de poleas multifuncional">
          Maquina de poleas multifuncional
        </option>
        <option value="Bici Eliptica">Bici Eliptica</option>
        <option value="Prensa de pierna">Prensa de pierna</option>
        <option value="Maquina de press banca">Maquina de press banca</option>
      </select>
    </div>
  );
};

export default NameInput;
