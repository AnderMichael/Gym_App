"use client";
import Button from "@/components/Button";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import NameInput from "./form_components/NameInput";
import ChargeInput from "./form_components/ChargeInput";
import NumberInput from "./form_components/NumberInput";

const EmployeeForm = () => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas
  const [isCancel, setIsCancel] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); // NOTE: Para hacer validaciones en el formulario

  const [, executePost] = useAxios(
    {
      url: "http://localhost:3000/employee",
      method: "POST",
    },
    { manual: true }
  );

  const onSubmitForm = async (data: any) => {
    console.log(data);
    if (isCancel) {
      try {
        await executePost({
          data: {
            employeename: data.name,
            cargo: data.charge,
            numero: data.contact,
          },
        });
        router.replace("/dashboard/employees?added");
      } catch (error) {
        router.replace("/dashboard/employees?error");
        console.error("Hubo un error al enviar los datos:", error);
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
        <NameInput register={register} errors={errors} />
        <ChargeInput register={register} />
        <NumberInput register={register} errors={errors} />
        <div className="flex">
          <div className="flex flex-1 mx-1">
            <Button
              color="bg-[#3A7E3D]"
              title="Registrar"
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

export default EmployeeForm;
