"use client";
import Image from "next/image";
import sadMichi from "../../../assets/sadMichi2.png";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
    const router = useRouter();
    const handleReTry = () => {
        router.back();
      };




  return (
    <div className="flex flex-col inset-0 justify-center items-center absolute font-jost bg-[#F2F2F2]">
        <Image src={sadMichi} alt={":c"}/>
        <p className="text-5xl text-gray-900 dark:text-white mb-4">Oops! Parece que algo salio mal....</p>
        <p className="text-3xl text-gray-900 dark:text-white mt-4">Haz click <a href="#" onClick={handleReTry} className="font-semibold text-gray-900 underline dark:text-white decoration-red-500">acá</a> para intentarlo de nuevo</p>
        
    </div>
  );
};

export default ErrorPage;