"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";

export const Login = () => {
  const router = useRouter();
  return (
    <div className="flex inset-0 absolute">
      <div className="flex flex-1 bg-black" />
      <div className="flex flex-1 flex-col bg-[#CE0A0B] justify-center items-center">
        <h1 className="text-[40px] text-white m-5 text-center font-bold">¿Listo para{<br/>} entrenar?</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
