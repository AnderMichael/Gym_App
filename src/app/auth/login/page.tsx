"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";
import michi from "../../../assets/michi.jpeg"
import Image from "next/image";
export const Login = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F2F2F2] flex flex-col absolute h-full w-full justify-center items-center">
      <h1 className="font-jost font-medium text-black  text-justify text-4xl mb-10">INNOWAVE </h1>
      <div className="flex flex-row bg-[#302E46] divide-x-2 divide-white p-10 align-center shadow-2xl rounded-3xl shadow-[#302E46]">
        <div className="flex flex-1 flex-col justify-center items-center px-16 py-5 mx-10">
          <Image src={michi} alt={"uwu"} className="rounded-3xl w-60 shadow-2xl shadow-black"/>
          <h1 className="text-[40px] text-white my-5 text-left font-bold font-josefin mt-10">
            Michimamado
          </h1>
        </div>
        
        <div className="flex flex-1 flex-col px-16">
          <h1 className="text-[40px] text-white my-5 text-left font-bold font-jost">
            Iniciar Sesión
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;