"use client";
import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import { EyeIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import DeleteModal from "./components/DeleteModal";
import { toast } from "react-toastify";




const styles = {
  orangeButton: {
    backgroundColor: '#DC6000',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkorange',
    },
  },
}

const ClientsPage = () => {
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has("added")) {
      queryParams.delete("added");
      window.history.replaceState(
        {},
        document.title,
        `${window.location.pathname}${queryParams}`
      );
      sessionStorage.setItem("notification", "added");
      window.location.reload();
    } else {
      if (queryParams.has("error")) {
        queryParams.delete("error");
        window.history.replaceState(
          {},
          document.title,
          `${window.location.pathname}${queryParams}`
        );
        toast.error("Cliente no añadido", { autoClose: 3000 });
      }
    }
    window.onload = () => {
      let notification = sessionStorage.getItem("notification");
      if (notification != null) {
        if (notification === "added") {
          toast.success("Cliente agregado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: {fontFamily: "inherit"},
          });
        } else if (notification === "deleted") {
          toast.success("Cliente eliminado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: {fontFamily: "inherit"},
          });
        }
        sessionStorage.removeItem("notification");
      }
    }
    }, []);

  const [{ data: clientData, loading, error }, refetch] = useAxios(
    "http://localhost:3000/clients"
  );
  const [clientToDelete, setClientToDelete] = useState(null);

  const handleAddClient = () => {
    router.push("/dashboard/clients/add_client");
  };

  const handleView = (client: any) => {
    console.log("Viewing:", client);
    router.push(`/dashboard/clients/see_client/${client.id}`);
  };

  const promptToDelete = (client: any) => {
    setClientToDelete(client);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  interface Client {
    id: number;
    clientFirstName: string;
    clientLastName: string;
    createdDate: string;
    planType: string;
  }

  const sortByClientName = (clients: Client[]): Client[] => {
    return clients
      .slice()
      .sort((a, b) => a.clientFirstName.localeCompare(b.clientFirstName));
  };

  const sortedClientsData = sortByClientName(clientData);

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#F2F2F2] p-4" >
        <div className="flex justify-between items-center">
          <h1 className="text-[#1F1C53] font-extrabold text-4xl ">Clientes</h1>
          
          <button type="button" className="text-white bg-[#DC6000] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Añadir clientes</button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-[#1F1C53] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Nombres
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Apellidos
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Fecha de registro
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Plan
                      </th>
                      <th scope="col" className="px-6 py-3">
                          
                      </th>
                  </tr>
              </thead>
              <tbody>
              {sortedClientsData.map((client: any) => (
              <tr
                key={client.id}
                className={client.id % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="text-black font-light bg-[#B0ADEA] border px-4 py-2">
                  {client.clientFirstName}
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  {client.clientLastName}
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  {client.createdDate}
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  {client.planType}
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  <button onClick={() => handleView(client)}>
                    <EyeIcon className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                  </button>
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  <button onClick={() => promptToDelete(client)}>
                    <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
              </tbody>
          </table>
        </div>
        
      </div>
      <DeleteModal
        isOpen={!!clientToDelete}
        onClose={() => setClientToDelete(null)}
        client={clientToDelete}
      />
    </>
  );
};

export default ClientsPage;