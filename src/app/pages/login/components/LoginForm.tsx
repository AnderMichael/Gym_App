"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); // NOTE: Para hacer validaciones en el formulario

  // ! Función para verificar los datos
  const checkUser = (data: any) => {
    if (
      data.email === "panque.sito@hotcake.com" &&
      data.password === "ChantilinConHelado"
    ) {
      router.push("pages/employees");
    } else {
      alert("Logeo erróneo, intenta de nuevo!");
    }
  };

  return (
    <div className="flex bg-black p-10 rounded-md">
      <form
        className="flex flex-col space-y-4 md:space-y-6 h-[50%] w-[270px]"
        onSubmit={handleSubmit(checkUser)}
      >
        <div className="flex flex-1 flex-col">
          <div className="mb-2 block">
            <label className="text-white">Email</label>
          </div>
          <input
            className="flex-1 bg-white text-gray-800 rounded-lg"
            placeholder="name@email.com"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors.email?.type === "required" && (
              <p className="text-red-700 mt-3">
                * You need to type an Email
              </p>
          )}
          {errors.email?.type === "pattern" && (
              <p className="text-red-700 mt-3">
                * Type a correct Email
              </p>
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <div className="mb-2 block">
            <label className="text-white">Password</label>
          </div>
          <input
            className="flex-1 bg-white text-gray-800 rounded-lg"
            placeholder="°°°°°°°°°"
            type="password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password?.type === "required" && (
              <p className="text-red-700 mt-3 font-light leading-relaxed">
                * You need to type a Password
              </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-700 mt-3 font-light leading-relaxed">
              * A password has at least 8 characters
            </p>
          )}
        </div>
        <Button title="Sign in" />
      </form>
    </div>
  );
};

export default LoginForm;
