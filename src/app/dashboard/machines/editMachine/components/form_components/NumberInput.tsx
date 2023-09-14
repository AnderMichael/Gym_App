import React from "react";

interface NumberInputProps {
  register: any;
  errors: any;
}

const NumberInput: React.FC<NumberInputProps> = ({ register, errors }) => {
  return (
    <div className="flex-1 flex flex-col mb-2">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        Código
      </label>
      <input
        className="bg-white text-gray-800 rounded-lg text-center h-10"
        placeholder="66666"
        type="text"
        {...register("code", {
          required: true,
          pattern: /^[1-9][0-9]{1,4}$/,
        })}
      />
      {errors.code?.type === "required" && (
        <p className="text-red-700 font-light leading-relaxed">
          * Debes introducir un número de hasta 5 dígitos
        </p>
      )}
      {errors.code?.type === "pattern" && (
        <p className="text-red-700 font-light leading-relaxed">
          * Este no es un número válido, se requiere un número de hasta 5 dígitos
        </p>
      )}
    </div>
  );
};

export default NumberInput;
