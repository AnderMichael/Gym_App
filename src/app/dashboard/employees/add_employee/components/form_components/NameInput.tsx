import React from "react";

interface NameInputProps {
  register: any;
  errors: any;
}

const NameInput: React.FC<NameInputProps> = ({ register, errors }) => {
  return (
      <div className="flex-col flex mb-2">
        <label className="text-[#302E46] font-semibold text-xl font-jost">
          Nombre Completo
        </label>
        <input
          className="bg-white text-gray-800 rounded-lg text-center h-10"
          placeholder="Panquesito del Castillo Vainilla"
          type="text"
          {...register("name", {
            required: true,
            minLength: 5,
            maxLength: 50,
            pattern: /^[A-Za-záéíóúñÁÉÍÓÚÑ\s'-]+$/,
          })}
        />
        {errors.name?.type === "required" && (
          <p className="text-red-700 font-light leading-relaxed">
            * Debes introducir un nombre
          </p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-red-700 font-light leading-relaxed">
            * El nombre debe tener 5 caracteres como mínimo
          </p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="text-red-700 font-light leading-relaxed">
            * El nombre debe tener 50 caracteres como máximo
          </p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="text-red-700 font-light leading-relaxed">
            * Este no es un nombre válido, nombres con mayúsculas
          </p>
        )}
      </div>
  );
};

export default NameInput;
