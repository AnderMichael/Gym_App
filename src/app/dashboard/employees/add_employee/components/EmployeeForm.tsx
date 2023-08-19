"use client";
import Button from "@/components/Button";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
const EmployeeForm = () => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas
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
    if (isCancel) {
      try {
        await executePost({
          data: {
            employeename: data.name,
            cargo: data.charge,
            numero: data.CI,
          },
        });
        router.back();
        window.location.reload();
      } catch (error) {
        console.error("Hubo un error al enviar los datos:", error);
      }
    }
  };

  const [isCancel, setIsCancel] = useState(true);

  const registration = () => {
    setIsCancel(true);
  };

  const cancellation = () => {
    setIsCancel(false);
    router.back();
  };

  return (
    <div className="flex bg-[#DC6000] p-10 rounded-md">
      <form
        className="flex flex-col space-y-4 md:space-y-6 w-[300px]"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="flex flex-col">
          <div className="mb-2 flex-col flex">
            <label className="text-white">Nombre Completo</label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="Panquesito del Castillo Vainilla"
              type="text"
              {...register("name", {
                required: true,
                minLength: 6,
                maxLength: 50,
              })}
            />
            {errors.name?.type === "required" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * You need to type a Name
              </p>
            )}
            {errors.minLenght?.type === "required" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * You need to type a name of min 6 characters
              </p>
            )}
            {errors.maxLenght?.type === "required" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * You need to type a name of max 50 characters
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-2 flex flex-col">
            <label className="text-white">Cargo</label>
            <select
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="Cargo"
              {...register("charge", { required: true })}
            >
              <option value="trainer">Trainer</option>
              <option value="cleaner">Cleaner</option>
            </select>
            {errors.charge?.type === "required" && (
              <p className="text-red-700 font-light leading-relaxed">
                * You need to type a Charge
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-2 flex-col flex">
            <label className="text-white">Numero de Contacto</label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="66666666"
              type="text"
              {...register("CI", { required: true, minLength: 8 })}
            />
            {errors.CI?.type === "required" && (
              <p className="text-red-700 font-light leading-relaxed">
                * You need to type a Phone Number
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-1">
            <Button title="Register" onClick={registration} />
          </div>
          <div className="flex flex-1">
            <Button title="Cancel" onClick={cancellation} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
