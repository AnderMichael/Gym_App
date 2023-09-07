"use client";
import Button from "@/components/Button";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import EmailInput from "./form_components/EmailInput";
import PasswordInput from "./form_components/PasswordInput";
import IncorrectText from "./form_components/IncorrectText";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isLogged, login } = useAuth();

  const [incorrect, setIncorrect] = useState(false);

  const checkUser = (data: any) => {
    if (
      data.email === "panque.sito@hotcake.com" &&
      data.password === "ChantilinConHelado"
    ) {
      router.push("/dashboard");
      login();
    } else {
      setIncorrect(true);
    }
  };

  return (
    <div className="flex bg-white p-10 rounded-lg">
      <form
        className="flex flex-col space-y-4 md:space-y-6 h-[50%] w-[270px]"
        onSubmit={handleSubmit(checkUser)}
      >
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        {incorrect && <IncorrectText />}
        <Button title="Ingresar" color="bg-[#EA9553]" />
      </form>
    </div>
  );
};

export default LoginForm;
