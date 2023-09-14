import React from "react";

interface BrandInputProps {
  register: any;
}

const BrandInput: React.FC<BrandInputProps> = ({ register }) => {
  return (
    <div className="flex-1 flex flex-col mb-2">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        Marca
      </label>
      <select
        className="bg-white text-gray-800 rounded-lg text-center h-10"
        placeholder="Cargo"
        {...register("brand")}
      >
        <option value="AFW - All Free Weight">AFW - All Free Weight</option>
        <option value="Adidas">Adidas</option>
        <option value="Assault Fitness">Assault Fitness</option>
        <option value="UFC">UFC</option>
        <option value="BH Hi Power">BH Hi Power</option>
      </select>
    </div>
  );
};

export default BrandInput;
