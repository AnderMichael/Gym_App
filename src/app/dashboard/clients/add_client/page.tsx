"use client";

import React from "react";
import ClientForm from "../components/ClientForm";

import { useRouter } from "next/navigation";


const styles = {
    orangeButton: {
      backgroundColor: '#DC6000',
      color: 'white',
      '&:hover': {
        backgroundColor: 'darkorange',
      },
    },
  }

const addClient = () => {
    const router = useRouter();

    const handleBackToClients = () => {
        router.push("/dashboard/clients");
      };
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#F2F2F2] p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
            Nuevo Cliente
          </h1>
          <button onClick={handleBackToClients} type="button" className="text-white bg-[#DC6000] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold font-jost rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Volver a los clientes</button>         
        </div>
        <ClientForm />
      </div>
    </>
  );
};

export default addClient;