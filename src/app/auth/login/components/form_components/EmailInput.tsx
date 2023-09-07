import React from 'react';

interface EmailInputProps {
  register: any;
  errors: any; 
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-2 block">
        <label className="text-[#302E46] font-semibold text-xl font-jost">
          Correo Electrónico
        </label>
      </div>
      <input
        className="flex-1 bg-white text-gray-800 rounded-lg font-josefin font-light"
        placeholder="usuario@email.com"
        type="text"
        {...register("email", {
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
      />
      {errors.email?.type === "required" && (
        <p className="text-red-700 mt-2 font-normal font-jost">
          * Debes introducir un correo
        </p>
      )}
      {errors.email?.type === "pattern" && (
        <p className="text-red-700 mt-2 font-normal font-jost">
          * Introduce un correo válido
        </p>
      )}
    </div>
  );
};

export default EmailInput;
