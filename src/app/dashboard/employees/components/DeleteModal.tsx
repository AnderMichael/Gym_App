"use client";
import React, {useState}from "react";
import useAxios from "axios-hooks";


const DeleteModal = ({ isOpen, onClose, employee }: any) => {
  const [, execute] = useAxios(
    { url: `http://localhost:3000/employee/${employee?.id}`, method: "DELETE" },
    { manual: true }
  );

  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      await execute();
      onClose();
      setIsDeleted(true);
      window.location.reload();
      
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
    { isDeleted ? 
      
      <div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <span class="sr-only">Error icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">Item has been deleted.</div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div> :

    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-[#1E1E1E] p-5 rounded-md z-10 text-white">
        
        <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
        <p className="font-semibold font-poppins">
          ¿Estás seguro de borrar al siguiente usuario?
        </p>
        <br />
        <p>
          <span className="font-bold font-poppins">Nombre:</span>{" "}
          <span className="italic">{employee?.employeename}</span>
        </p>
        <p>
          <span className="font-bold font-poppins">Cargo:</span>{" "}
          <span className="italic">{employee?.cargo}</span>
        </p>
        <p>
          <span className="font-bold font-poppins">Numero de Contacto:</span>{" "}
          <span className="italic">{employee?.numero}</span>
        </p>

        <div className="flex justify-end space-x-4 mt-5">
          <button
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md"
            onClick={handleDelete}
          >
            Sí, obviamente
          </button>

          <button
            className="flex-1 px-4 py-2 bg-gray-300 text-black rounded-md"
            onClick={onClose}
          >
            No, me arrepentí
          </button>
        </div>
      </div>
    </div>
  
}</>);
};

export default DeleteModal;
