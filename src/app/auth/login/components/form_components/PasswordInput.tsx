import React from 'react';

interface PasswordInputProps {
  register: any;
  errors: any;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-2 block">
        <label className="text-[#302E46] font-semibold font-jost text-xl">
          Contraseña
        </label>
      </div>
      <input
        className="flex-1 bg-white text-gray-800 rounded-lg font-josefin"
        placeholder="°°°°°°°°"
        type="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password?.type === "required" && (
        <p className="text-red-700 mt-2 font-normal leading-relaxed font-jost ">
          * Debes introducir una contraseña
        </p>
      )}
      {errors.password?.type === "minLength" && (
        <p className="text-red-700 mt-2 font-normal leading-relaxed font-jost">
          * Una contraseña debe tener al menos 8 caracteres
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
