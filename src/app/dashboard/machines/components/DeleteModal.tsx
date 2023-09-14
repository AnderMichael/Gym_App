"use client";
import React, { useState } from "react";
import useAxios from "axios-hooks";
import setCorrectDate from "@/helpers/dateCorrector";
import Button from "@/components/Button";

const DeleteModal = ({ isOpen, onClose, machine }: any) => {
  const [, execute] = useAxios(
    { url: `http://localhost:3000/machine/${machine?.id}`, method: "DELETE" },
    { manual: true }
  );

  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      await execute();
      onClose();
      setIsDeleted(true);
      sessionStorage.setItem("notification", "deleted");
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {isDeleted ? (
        <div
          id="toast-danger"
          className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span className="sr-only">Error icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div className="bg-[#f2f2f2] p-5 rounded-lg z-10 text-[#3D3C51] font-jost">
            <p className="font-bold text-xl m-4 ">
              ¿Está seguro de eliminar la siguiente máquina?
            </p>
            <p className="text-xl m-4">
              <span className="font-bold">Nombre:</span>{" "}
              <span className="">{machine?.machineName}</span>
            </p>
            <p className="text-xl m-4">
              <span className="font-bold">Código:</span>{" "}
              <span className="">{machine?.id}</span>
            </p>
            <p className="text-xl m-4">
              <span className="font-bold">Fecha de Adquisición:</span>{" "}
              <span className="">
                {setCorrectDate(machine?.acquisitionDate)}
              </span>
            </p>

            <div className="flex justify-end space-x-4 mt-5">
              <Button
                title="Sí, obviamente"
                onClick={handleDelete}
                color="bg-[#3A7E3D]"
              />

              <Button
                title="No, me arrepentí"
                onClick={onClose}
                color="bg-[#CE0A0B]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
