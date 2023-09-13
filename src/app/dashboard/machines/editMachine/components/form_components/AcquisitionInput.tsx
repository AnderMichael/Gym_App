import React from "react";

interface AcquisitionInputProps {
  register: any;
  errors: any;
  date:any;
}

const AcquisitionInput: React.FC<AcquisitionInputProps> = ({ register, errors, date }) => {
  return (
    <div className="mb-2 flex-col flex flex-1 ml-3">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        Fecha de Adquisición
      </label>
      <input
        className="bg-white text-gray-800 rounded-lg text-center h-10"
        placeholder="2023-08-13"
        type="date"
        {...register("acquisition", {
          required: true,
          value: date
        })}
      />
      {errors.born_date?.type === "required" && (
        <p className="text-red-700 font-light leading-relaxed">
          * Debes introducir una fecha
        </p>
      )}
    </div>
  );
};

export default AcquisitionInput;
