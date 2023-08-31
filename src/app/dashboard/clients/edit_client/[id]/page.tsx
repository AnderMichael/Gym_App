"use client";

import React from "react";

import { useRouter } from "next/navigation";
import useAxios from "axios-hooks";
import ClientFormEdit from "../components/ClientFormEdit";

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

  // Luego, maneja las condiciones
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar la página</div>;

  const handleBackToClients = () => {
    router.back();
  };
  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex justify-between px-10 mt-10">
          <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
            Editar Cliente
          </h1>
          <button
            onClick={handleBackToClients}
            type="button"
            className="text-white bg-[#DC6000] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold font-jost rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Volver a Clientes
          </button>
        </div>
        <div className="flex-1 justify-center items-center">
          <ClientFormEdit clientData={clientData}/>
        </div>
      </div>
    </>
  );
};

export default addClient;
