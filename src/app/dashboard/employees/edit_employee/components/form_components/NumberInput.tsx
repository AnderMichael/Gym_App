import React from "react";

interface NumberInputProps {
  register: any;
  errors: any;
  value: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  register,
  errors,
  value,
}) => {
  return (
    <div className="flex flex-col mb-2">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        Numero de Contacto
      </label>
      <input
        className="bg-white text-gray-800 rounded-lg text-center h-10"
        placeholder="66666666"
        type="text"
        {...register("contact", {
          required: true,
          pattern: /^[1-9][0-9]{7}$/,
          value: value,
        })}
      />
      {errors.contact?.type === "required" && (
        <p className="text-red-700 font-light leading-relaxed">
          * Debes introducir un número de télefono
        </p>
      )}
      {errors.contact?.type === "pattern" && (
        <p className="text-red-700 font-light leading-relaxed">
          * Este no es un número de teléfono
        </p>
      )}
    </div>
  );
};

export default NumberInput;
