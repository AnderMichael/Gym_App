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
import Machine from "../../types/Machine";
import AcquisitionInput from "./form_components/AcquisitionInput";

interface MachineEditProps {
  machineData: Machine;
}

const MachineForm = ({ machineData }: MachineEditProps) => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas
  const [maintenance, setMaintenance] = useState(machineData.needMaintenance);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); // NOTE: Para hacer validaciones en el formulario

  const [{ loading: updateLoading, error: updateError }, updateClient] =
    useAxios(
      {
        method: "PATCH",
        url: `http://localhost:3000/machine/${machineData.id}`,
      },
      { manual: true }
    );

  if (updateLoading) return <div>Cargando...</div>;
  if (updateError) return <div>Error al cargar pagina</div>;

  const onSubmitForm = async (data: any) => {
    console.log(data);
    try {
      await updateClient({
        data: {
          machineName: data.name,
          needMaintenance: maintenance,
          machineBrand: data.brand,
          maintenanceDate: maintenance ? data.maintenance_date : "",
        },
      });
      router.replace("/dashboard/machines?edited");
    } catch (error) {
      router.replace("/dashboard/machines?error");
      console.error("Hubo un error al enviar los datos:", error);
    }
  };

  const isChecked = () => {
    setMaintenance(!maintenance);
    console.log(maintenance);
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
            <NameInput
              register={register}
              errors={errors}
              machineData={machineData.machineName}
            />
            <BrandInput
              register={register}
              machineData={machineData.machineBrand}
            />
            <AcquisitionInput
              register={register}
              errors={errors}
              machineData={machineData.acquisitionDate}
            />
          </div>
        </div>
        <h1 className="text-[#302E46] my-3 text-left text-3xl font-black font-jost">
          Mantenimiento
        </h1>
        <div className="flex space-x-4">
          <CheckBoxInput
            machineData={machineData.needMaintenance}
            onClick={isChecked}
          />
          {maintenance && (
            <MaintenanceInput
              register={register}
              errors={errors}
              machineData={machineData.maintenanceDate}
            />
          )}
        </div>
        <div className="flex">
          <Button color="bg-[#3A7E3D]" title="Actualizar Máquina" />
        </div>
      </form>
    </div>
  );
};

export default MachineForm;
