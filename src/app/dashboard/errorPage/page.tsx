"use client";
import Image from "next/image";
import sadMichi from "../../../assets/sadMichi2.png"

const ErrorPage = () => {
  return (
    <div className="flex flex-col inset-0 justify-center items-center absolute font-jost bg-[#F2F2F2]">
        <Image src={sadMichi} alt={"uwu"}/>
        <p className="text-5xl text-gray-900 dark:text-white mb-4">Oops! Parece que algo salio mal....</p>
        <p className="text-3xl text-gray-900 dark:text-white mt-4">Verifica tu conexion a internet o intentalo mas tarde</p>
    </div>
  );
};

export default ErrorPage;