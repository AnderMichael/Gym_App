"use client";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import NameInput from "./form_components/NameInput";
import Employee from "../../types/Employee";
import Button from "@/components/Button";
import ChargeInput from "./form_components/ChargeInput";
import NumberInput from "./form_components/NumberInput";

interface EmployeeProfileProps {
  employeeData: Employee;
}

const EmployeeFormEdit = ({ employeeData }: EmployeeProfileProps) => {
  // ! Hooks para el form
  const router = useRouter();
  const [isCancel, setIsCancel] = useState(true);

  const [{ loading: updateLoading, error: updateError }, updateEmployee] =
    useAxios(
      {
        method: "PATCH",
        url: `${process.env.NEXT_PUBLIC_URL_BACKEND}/employee/${employeeData.id}`,
      },
      { manual: true }
    );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (updateLoading) return <div>Cargando...</div>;
  if (updateError) return <div>Hubo un error en la carga de datos</div>;

  const onSubmitForm = async (data: any) => {
    if (isCancel) {
      try {
        await updateEmployee({
          data: {
            employeename: data.name,
            cargo: data.charge,
            numero: data.contact,
          },
        });
        router.replace("/dashboard/employees?edited");
      } catch (error) {
        router.replace("/dashboard/employees?error");
        console.error("Hubo un error al actualizar los datos:", error);
      }
    }
  };

  const registration = () => {
    setIsCancel(true);
  };

  const cancellation = () => {
    setIsCancel(false);
    router.back();
  };

  return (
    <div className="flex bg-white p-10 rounded-md shadow-md shadow-[#C0C0C0] w-[45%]">
      <form
        className="flex flex-1 flex-col space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <h1 className="text-[#302E46] my-3 text-left text-3xl font-black font-jost">
          Datos Personales
        </h1>
        <NameInput
          register={register}
          errors={errors}
          value={employeeData.employeename}
        />
        <ChargeInput register={register} value={employeeData.cargo} />
        <NumberInput
          register={register}
          errors={errors}
          value={employeeData.numero}
        />
        <div className="flex">
          <div className="flex flex-1 mx-1">
            <Button
              color="bg-[#3A7E3D]"
              title="Actualizar"
              onClick={registration}
            />
          </div>
          <div className="flex flex-1 mx-1">
            <Button
              color="bg-[#CE0A0B]"
              title="Cancelar"
              onClick={cancellation}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeFormEdit;
