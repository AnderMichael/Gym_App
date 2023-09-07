"use client";

import React from "react";
import ClientForm from "./components/ClientForm";

import { useRouter } from "next/navigation";

const AddClient = () => {
  const router = useRouter();

  const handleBackToClients = () => {
    router.back();
  };
  return (
    <>
      <div className="flex flex-col p-4 justify-center items-center">
        <div className="flex justify-between w-[75%] my-7">
          <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
            Nuevo Cliente
          </h1>
          <button
            onClick={handleBackToClients}
            type="button"
            className="text-white bg-[#DC6000] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold font-jost rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Volver a Clientes
          </button>
        </div>
        <ClientForm />
      </div>
    </>
  );
};

export default AddClient;
