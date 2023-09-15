"use client";
import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import DeleteModal from "./components/DeleteModal";
import { toast } from "react-toastify";
import { EyeIcon, TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import { columnsClients, rowsClients } from "@/app/helpers/dataColumns";
import Table from "@/components/Table";
import Client from "./types/Client";

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
      router.back();
      window.location.reload();
    } else if (queryParams.has("edited")) {
      queryParams.delete("edited");
      window.history.replaceState(
        {},
        document.title,
        `${window.location.pathname}${queryParams}`
      );
      sessionStorage.setItem("notification", "edited");
      router.back();
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
        } else if (notification === "edited") {
          toast.success("Cliente actualizado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: { fontFamily: "inherit" },
          });
        }
        sessionStorage.removeItem("notification");
      }
    };
  }, [router]);

  const [{ data: clientData, loading, error }, refetch] = useAxios(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/clients`
  );
  const [clientToDelete, setClientToDelete] = useState(null);

  const handleAddClient = () => {
    router.push("/dashboard/clients/add_client");
  };

  const handleView = (client: any) => {
    console.log("Viewing:", client);
    router.push(`/dashboard/clients/see_client/${client.id}`);
  };

  const handleEdit = (client: any) => {
    router.push(`/dashboard/clients/edit_client/${client.id}`);
  };

  const promptToDelete = (client: any) => {
    setClientToDelete(client);
  };

  if (loading)
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <span>Cargando...</span>
      </div>
    );
  if (error) return router.push("/dashboard/errorPage");

  const sortByClientName = (clients: Client[]): Client[] => {
    return clients
      .slice()
      .sort((a, b) => a.clientFirstName.localeCompare(b.clientFirstName));
  };

  const sortedClientsData = sortByClientName(clientData);

  return (
    <>
      <button
        className="absolute top-[4rem] ml-14 text-blue-950"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="container mx-auto p-4 w-[70%]">
        <div className="flex justify-between items-center m-5">
          <h1 className="text-[#302E46] my-5 text-left  text-4xl font-black font-jost ">
            Clientes
          </h1>
          <button
            onClick={handleAddClient}
            className="font-bold font-jost text-lg bg-[#DC6000] hover:bg-yellow-500 text-white px-6 py-4 rounded-2xl shadow-[#C0C0C0] shadow-md"
          >
            Agregar Cliente
          </button>
        </div>
        <Table
          color="bg-[#1F1C53]"
          shadow="bg-[#DDDDE5]"
          columns={columnsClients}
          dataRow={rowsClients}
          rows={sortedClientsData}
          handleEdit={handleEdit}
          handleView={handleView}
          promptToDelete={promptToDelete}
        />
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
