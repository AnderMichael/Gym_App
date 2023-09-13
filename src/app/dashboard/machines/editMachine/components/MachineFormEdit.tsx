"use client";
import Button from "@/components/Button";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import NameInput from "./form_components/NameInput";
import BrandInput from "./form_components/BrandInput";
import NumberInput from "./form_components/NumberInput";
import DateInput from "./form_components/AcquisitionInput";
import CheckBoxInput from "./form_components/CheckBoxInput";
import MaintenanceInput from "./form_components/MaintenanceInput";


interface EditFormProps {
    machineData: any;
  }

const MachineFormEdit = ({ machineData }: EditFormProps) => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas
  const [isCancel, setIsCancel] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); // NOTE: Para hacer validaciones en el formulario

  const [, updateMachine] = useAxios(
    {
      url: `http://localhost:3000/machine/${machineData.id}`,
      method: "PATCH",
    },
    { manual: true }
  );

  const onSubmitForm = async (data: any) => {
    console.log(data);
    if (isCancel) {
      try {
        await updateMachine({
          data: {
            machineName: data.name,
            needMaintenance: data.maintenance,
            machineBrand: data.brand,
            maintenanceDate: data.maintenance_date,
            acquisitionDate: data.acquisition
          },
        });
        router.replace("/dashboard/machines?edited");
      } catch (error) {
        router.replace("/dashboard/machines?error");
        console.error("Hubo un error al enviar los datos:", error);
      }
    }
  };

  const registration = () => {
    setIsCancel(true);
  };

  return (
    <div className="flex bg-white p-10 rounded-md shadow-md shadow-[#C0C0C0] w-[75%]">
      <form
        className="flex flex-1 flex-col space-y-4 md:space-y-6 justify-center"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <h1 className="text-[#302E46] my-3 text-left text-3xl font-black font-jost">
          Información de la Máquina
        </h1>
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <NameInput register={register} errors={errors} name={machineData.machineName} />
            <DateInput
              register={register}
              errors={errors}
              date={machineData.acquisitionDate}
            />
          </div>
          <div className="flex space-x-4">
            <BrandInput register={register} brand={machineData.machineBrand} />
            
          </div>
        </div>
        <h1 className="text-[#302E46] my-3 text-left text-3xl font-black font-jost">
          Mantenimiento
        </h1>
        <div className="flex space-x-4">
          <CheckBoxInput register={register} needMaintenance={machineData.needMaintenance} />
          <MaintenanceInput
            register={register}
            errors={errors}
            date={machineData.maintenanceDate}
          />
        </div>
        <div className="flex">
          <Button
            color="bg-[#3A7E3D]"
            title="Actualizar"
            onClick={registration}
          />
        </div>
      </form>
    </div>
  );
};

export default MachineFormEdit;
