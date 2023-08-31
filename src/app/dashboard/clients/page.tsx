"use client";
import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import { EyeIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import DeleteModal from "./components/DeleteModal";
import { toast } from "react-toastify";

const styles = {
  orangeButton: {
    backgroundColor: "#DC6000",
    color: "white",
    "&:hover": {
      backgroundColor: "darkorange",
    },
  },
};

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
            style: { fontFamily: "inherit" },
          });
        } else if (notification === "deleted") {
          toast.success("Cliente eliminado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: { fontFamily: "inherit" },
          });
        }
        sessionStorage.removeItem("notification");
      }
    };
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
      <div className="container mx-auto p-4 w-[70%]">
        <div className="flex justify-between items-center m-5">
          <h1 className="text-[#302E46] my-5 text-left  text-4xl font-black font-jost ">
            Clientes
          </h1>
          <button
            onClick={handleAddClient}
            className="font-bold font-jost text-lg bg-[#3d3b57] hover:bg-[#302E46]  text-white px-6 py-4 rounded-2xl shadow-black shadow-md"
          >
            Agregar Empleado
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="bg-[#1F1C53] text-white font-bold font-jost text-2xl">
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
                <th colSpan={3} />
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
                    {client.createdDate.substring(0, 10)}
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
