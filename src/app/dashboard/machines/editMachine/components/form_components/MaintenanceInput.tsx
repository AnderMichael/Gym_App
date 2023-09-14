import React from "react";

interface MaintenanceInputProps {
  register: any;
  errors: any;
  date: any;
  validateMaintenanceDate : any;
}

const MaintenanceInput: React.FC<MaintenanceInputProps> = ({ register, errors, date, validateMaintenanceDate }) => {
  return (
    <div className="mb-2 flex-col flex flex-1 ml-3">
      <label className="text-[#302E46] font-semibold text-xl font-jost">
        Fecha del próximo mantenimiento
      </label>
      <input
        className="bg-white text-gray-800 rounded-lg text-center h-10"
        placeholder="2023-08-13"
        type="date"
        {...register("maintenance_date", {
          required: true,
          value: date,
          validate: validateMaintenanceDate
        })}
      />
      {errors.maintenance_date && (
        <p className="text-red-700 font-light leading-relaxed">
          * {errors.maintenance_date.message}
        </p>
      )}
    </div>
  );
};

export default MaintenanceInput;
