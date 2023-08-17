"use client";
import Button from "@/components/Button";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

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
      url: 'http://localhost:3000/employee',
      method: 'POST'
    },
    { manual: true }
  );

  const onSubmitForm = async (data) => {
    try {
      await executePost({
        data: {
          employeename: data.name,
          cargo: data.charge,
          numero: data.CI
        }
      });
      router.back();
      window.location.reload();
    } catch (error) {
      console.error("Hubo un error al enviar los datos:", error);
    }
  };


  return (
    <div className="flex bg-[#DC6000] p-10 rounded-md">
      <form
        className="flex flex-col space-y-4 md:space-y-6 w-[300px]"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="flex flex-col">
          <div className="mb-2 block">
            <label className="text-white">Nombre Completo</label>
          </div>
          <input
            className="bg-white text-gray-800 rounded-lg text-center h-10"
            placeholder="Panquesito del Castillo Vainilla"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <p className=" text-red-700 font-light leading-relaxed">
              * You need to type a Name
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="mb-2 block">
            <label className="text-white">Cargo</label>
          </div>
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
        <div className="flex flex-col">
          <div className="mb-2 block">
            <label className="text-white">Carnet de identidad</label>
          </div>
          <input
            className="bg-white text-gray-800 rounded-lg text-center h-10"
            placeholder="12834593LP"
            type="text"
            {...register("CI", { required: true })}
          />
          {errors.CI?.type === "required" && (
            <p className="text-red-700 font-light leading-relaxed">
              * You need to type a CI
            </p>
          )}
        </div>
        <Button title="Close" />
      </form>
    </div>
  );
};

export default EmployeeForm;
