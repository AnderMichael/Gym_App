"use client";
import React from "react";
import useAxios from "axios-hooks";

const DeleteModal = ({ isOpen, onClose, employee }:any) => {
  const [, execute] = useAxios(
    { url: `http://localhost:3000/employee/${employee?.id}`, method: "DELETE" },
    { manual: true }
  );

  const handleDelete = async () => {
    try {
      await execute();
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-[#1E1E1E] p-5 rounded-md z-10 text-white">
        <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
        <p>¿Estás seguro de borrar al siguiente usuario?</p>
        <p>Nombre: {employee?.employeename}</p>
        <p>Cargo: {employee?.cargo}</p>
        <p>Celular: {employee?.numero}</p>

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
  );
};

export default DeleteModal;
