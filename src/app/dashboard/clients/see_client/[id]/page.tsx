"use client";

import React from "react";

import { useRouter } from "next/navigation";
import useAxios from "axios-hooks";
import ClientProfile from "../components/ClientProfile";

interface TokenProps {
  params: {
    id: string;
  };
  searchParams: string;
}

const addClient = ({ params, searchParams }: TokenProps) => {
  const router = useRouter();

  const [{ data: clientData, loading, error }] = useAxios(
    `http://localhost:3000/clients/${params.id}`
  );

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleBackToClients = () => {
    router.back();
  };
  return (
    <>
      <div className="flex flex-col  justify-center items-center p-4">
        <div className="flex justify-between w-[75%] my-7">
          <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
            Ver Cliente
          </h1>
          <button
            onClick={handleBackToClients}
            type="button"
            className="text-white bg-[#DC6000] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold font-jost rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Volver a Clientes
          </button>
        </div>
        <ClientProfile clientData={clientData} />
      </div>
    </>
  );
};

export default addClient;
