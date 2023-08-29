"use client"
import Card from "./Card";
import { useRouter } from "next/navigation";

const CardContainer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-[70%] w-[80%] border-black rounded-2xl px-10 shadow-2xl">
      <div className="flex h-[20%] items-center">
        <h1 className="font-semibold text-2xl">
          Elija la lista que desea ver:
        </h1>
      </div>
      <div className="flex h-[40%] items-center justify-center">
        <Card title="Empleados" color="bg-[#DC6000]" redirection={()=> router.push('dashboard/employees/')}/>
        <Card title="Clientes" color="bg-[#1F1C53]" />
      </div>
      <div className="flex h-[40%] justify-center">
        <Card title="Maquinaria" color="bg-[#4b5563]" />
      </div>
    </div>
  );
};

export default CardContainer;
