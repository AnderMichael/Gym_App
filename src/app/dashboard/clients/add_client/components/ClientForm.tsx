"use client";
import Button from "@/components/Button";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

const styles = {
  form: {
    display: "flex",
    flexDirection: "row", // Arrange elements side by side
    alignItems: "center", // Align elements vertically in the center
    gap: 2, // Add spacing between inputs
  },
};

const ClientForm = () => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); // NOTE: Para hacer validaciones en el formulario

  const [, executePost] = useAxios(
    {
      url: `${process.env.NEXT_PUBLIC_URL_BACKEND}/clients`,
      method: "POST",
    },
    { manual: true }
  );

  const onSubmitForm = async (data: any) => {
    if (isCancel) {
      try {
        await executePost({
          data: {
            clientFirstName: data.first_name,
            clientLastName: data.last_name,
            borndate: data.born_date,
            direction: data.direction,
            cellphone: data.contact,
            email: data.email,
            planType: data.plan,
            payplan: data.pay_method,
          },
        });
        router.replace("/dashboard/clients?added");
      } catch (error) {
        router.replace("/dashboard/clients?error");
        console.error("Hubo un error al enviar los datos:", error);
      }
    }
  };

  const [isCancel, setIsCancel] = useState(true);

  const registration = () => {
    setIsCancel(true);
  };


  return (
    <div className="container mx-auto w-[75%] bg-[#FFFFFF] p-10 rounded-md shadow-xl shadow-[#C0C0C0]">
      <form
        className="flex flex-col space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
          Datos Personales
        </h1>
        <div className="flex justify-center mt-2">
          <div className="mb-2 flex-col flex flex-1 mr-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Nombres
            </label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="Panquesito"
              type="text"
              {...register("first_name", {
                required: true,
                minLength: 5,
                maxLength: 50,
                pattern: /^[A-Za-záéíóúñÁÉÍÓÚÑ\s'-]+$/,
      
              })}
            />
            {errors.first_name?.type === "required" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * Debes introducir un nombre
              </p>
            )}
            {errors.first_name?.type === "minLength" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * El nombre debe tener 5 caracteres como mínimo
              </p>
            )}
            {errors.first_name?.type === "maxLength" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * El nombre debe tener 50 caracteres como máximo
              </p>
            )}
            {errors.first_name?.type === "pattern" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * Este no es un nombre válido, nombres con mayúsculas y sin caracteres especiales
              </p>
            )}
          </div>

          <div className="mb-2 flex-col flex flex-1 mx-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Apellidos
            </label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="Del Castillo Vainilla"
              type="text"
              {...register("last_name", {
                required: true,
                minLength: 5,
                maxLength: 50,
                pattern: /^[A-ZÁÉÍÓÚÑ][A-Za-záéíóúñÁÉÍÓÚÑ\s'-]+$/,
              })}
            />
            {errors.last_name?.type === "required" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * Debes introducir un apellido
              </p>
            )}
            {errors.last_name?.type === "minLength" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * El apellido debe tener 5 caracteres como mínimo
              </p>
            )}
            {errors.last_name?.type === "maxLength" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * El apellido debe tener 50 caracteres como máximo
              </p>
            )}
            {errors.last_name?.type === "pattern" && (
              <p className=" text-red-700 font-light leading-relaxed">
                * Este no es un apellido válido, apellidos con mayúsculas y sin caracteres especiales
              </p>
            )}
          </div>
          <div className="mb-2 flex-col flex flex-1 ml-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Fecha de nacimiento
            </label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="2023-08-13"
              type="date"
              {...register("born_date", {
                required: true,
                pattern:
                  /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
              })}
            />
            {errors.born_date?.type === "required" && (
              <p className="text-red-700 font-light leading-relaxed">
                * Debes introducir una fecha
              </p>
            )}
            {errors.born_date?.type === "pattern" && (
              <p className="text-red-700 font-light leading-relaxed">
                * Esta no es una fecha válida, el formato es yyyy-mm-dd
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center mb-2">
          <div className="mb-2 flex-col flex flex-[2] mr-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Direccion
            </label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="Dirección"
              type="text"
              {...register("direction", { required: true })}
            />
            {errors.direction?.type === "required" && (
              <p className="text-red-700 font-light leading-relaxed">
                * Debes introducir una dirección
              </p>
            )}
          </div>
          <div className="mb-2 flex-col flex flex-1 mx-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Correo Electrónico
            </label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="usuario@email.com"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-700 mt-2 font-normal font-jost">
                * Debes introducir un correo
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-700 mt-2 font-normal font-jost">
                * Introduce un correo válido
              </p>
            )}
          </div>
          <div className="mb-2 flex-col flex flex-1 ml-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Numero de Contacto
            </label>
            <input
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="66666666"
              type="text"
              {...register("contact", {
                required: true,
                pattern: /^[1-9][0-9]{7}$/,
              })}
            />
            {errors.contact?.type === "required" && (
              <p className="text-red-700 font-light leading-relaxed">
                * Debes introducir un número de télefono
              </p>
            )}
            {errors.contact?.type === "pattern" && (
              <p className="text-red-700 font-light leading-relaxed">
                * Este no es un número de teléfono
              </p>
            )}
          </div>
        </div>

        <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
          Membresía
        </h1>

        <div className="flex justify-center mt-2">
          <div className="mb-2 flex-col flex flex-1 mr-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Método de Pago
            </label>
            <select
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="Pago"
              {...register("pay_method")}
            >
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia">Transferencia</option>
              <option value="Tarjeta">Tarjeta</option>
            </select>
          </div>

          <div className="mb-2 flex-col flex flex-1 mr-3">
            <label className="text-[#302E46] font-semibold text-xl font-jost">
              Plan
            </label>
            <select
              className="bg-white text-gray-800 rounded-lg text-center h-10"
              placeholder="Plan"
              {...register("plan")}
            >
              <option value="Diario">Diario</option>
              <option value="Mensual">Mensual</option>
              <option value="Anual">Anual</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-1 mx-1">
            <Button title="Registrar" color="bg-[#3A7E3D]" onClick={registration}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
