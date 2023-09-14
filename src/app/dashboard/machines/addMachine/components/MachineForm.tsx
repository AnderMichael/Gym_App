"use client";
import Button from "@/components/Button";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import NameInput from "./form_components/NameInput";
import BrandInput from "./form_components/BrandInput";

import CheckBoxInput from "./form_components/CheckBoxInput";
import MaintenanceInput from "./form_components/MaintenanceInput";
import AcquisitionInput from "./form_components/AcquisitionInput";

const MachineForm = () => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas
  const [maintenance, setMaintenance] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();// NOTE: Para hacer validaciones en el formulario

  const [, executePost] = useAxios(
    {
      url: "http://localhost:3000/machine",
      method: "POST",
    },
    { manual: true }
  );
  const acquisitionDate = watch("acquisition");

  const validateMaintenanceDate = (value: any) => {
    if (new Date(value) <= new Date(acquisitionDate)) {
      return "La fecha de mantenimiento debe ser mayor que la fecha de adquisición";
    }
    return true;
  };


  const onSubmitForm = async (data: any) => {
    console.log(data);
    try {
      await executePost({
        data: {
          machineName: data.name,
          needMaintenance: maintenance,
          acquisitionDate: data.acquisition,
          machineBrand: data.brand,
          maintenanceDate: maintenance ? data.maintenance_date : "",
        },
      });
      router.replace("/dashboard/machines?added");
    } catch (error) {
      router.replace("/dashboard/machines?error");
      console.error("Hubo un error al enviar los datos:", error);
    }
  };

  const isClicked = () => {
    setMaintenance(!maintenance);
  };

  return (
    <div className="flex bg-white p-10 rounded-md shadow-md shadow-[#C0C0C0] w-[75%]">
      <form
        id="addMachineForm"
        className="flex flex-1 flex-col space-y-4 md:space-y-6 justify-center"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <h1 id="addMachineFormTitle" className="text-[#302E46] my-3 text-left text-3xl font-black font-jost">
          Información de la Máquina
        </h1>
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <NameInput register={register} errors={errors} />
            <BrandInput register={register} />
            <AcquisitionInput register={register} errors={errors} />
          </div>
        </div>
        <h1 className="text-[#302E46] my-3 text-left text-3xl font-black font-jost">
          Mantenimiento
        </h1>
        <div className="flex space-x-4">
          <CheckBoxInput onClick={isClicked} />
          {maintenance && (
            <MaintenanceInput
              register={register}
              errors={errors}
              maintenanceCheck={maintenance}
              validateMaintenanceDate={validateMaintenanceDate}
            />
          )}
        </div>
        <div className="flex">
          <Button color="bg-[#3A7E3D]" title="Registrar Máquina" />
        </div>
      </form>
    </div>
  );
};

export default MachineForm;
