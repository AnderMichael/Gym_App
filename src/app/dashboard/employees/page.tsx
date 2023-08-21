"use client";
import React, { useState } from "react";
import useAxios from "axios-hooks";
import { EyeIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import DeleteModal from "./components/DeleteModal";

const EmployeePage = () => {
  const [{ data: employeesData, loading, error }, refetch] = useAxios(
    "http://localhost:3000/employee"
  );
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const router = useRouter();

  const handleAddEmployee = () => {
    router.push("/dashboard/employees/add_employee");
  };

  const handleView = (employee: any) => {
    console.log("Viewing:", employee);
    router.push(`/dashboard/employees/see_employee/${employee.id}`);
  };

  const promptToDelete = (employee: any) => {
    setEmployeeToDelete(employee);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <>
      <div className="container mx-auto p-4 w-[70%]">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-extrabold text-4xl ">Empleados</h1>
          <button onClick={handleAddEmployee}>
            <PlusCircleIcon className="h-20 w-20 text-blue-500 hover:text-blue-700" />
          </button>
        </div>
        <div className="flex items-center justify-between mb-4"></div>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-white font-bold bg-[#15133B] border px-4 py-2">
                Nombre Completo
              </th>
              <th className="text-white font-bold bg-[#15133B] border px-4 py-2">
                Cargo
              </th>
              <th className="text-white font-bold bg-[#15133B] border px-4 py-2">
                Número de Contacto
              </th>
              <th
                className="text-white font-bold bg-[#15133B] border px-4 py-2"
                colSpan={2}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {employeesData.map((employee: any) => (
              <tr
                key={employee.id}
                className={employee.id % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="text-black font-light bg-[#B0ADEA] border px-4 py-2">
                  {employee.employeename}
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  {employee.cargo}
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  {employee.numero}
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  <button onClick={() => handleView(employee)}>
                    <EyeIcon className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                  </button>
                </td>
                <td className="text-black bg-[#B0ADEA] border px-4 py-2">
                  <button onClick={() => promptToDelete(employee)}>
                    <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal
        isOpen={!!employeeToDelete}
        onClose={() => setEmployeeToDelete(null)}
        employee={employeeToDelete}
      />
    </>
  );
};

export default EmployeePage;
