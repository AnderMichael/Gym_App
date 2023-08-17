"use client";

import React from "react";
import { EyeIcon, TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";

const EmployeePage = () => {
  const router = useRouter();
  const employeesData = [
    {
      fullName: "Juan Pérez",
      position: "Desarrollador",
      contactNumber: "123-456-7890",
    },
    {
      fullName: "María Rodríguez",
      position: "Diseñadora",
      contactNumber: "098-765-4321",
    },
    // ... puedes agregar más datos de ejemplo aquí
  ];

  const seeEmployee = () => {
    router.push("/employees/see_employee/");
  };

  const addEmployee = () => {
    router.push("/employees/add_employee/");
  };

  const delEmployee = () => {};

  return (
    <div className="container mx-auto p-4 justify-center]">
      <h1 className="text-white text-2xl font-bold mb-4">Employees</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="text-white bg-[#15133B] border px-4 py-2">
              Nombre Completo
            </th>
            <th className="text-white bg-[#15133B] border px-4 py-2">Cargo</th>
            <th className="text-white bg-[#15133B] border px-4 py-2">
              Número de Contacto
            </th>
            <th
              className="text-white bg-[#15133B] border px-4 py-2"
              colSpan={2}
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, index) => (
            <tr key={index}>
              <td className="text-white bg-[#B0ADEA] border px-4 py-2">
                {employee.fullName}
              </td>
              <td className="text-white bg-[#B0ADEA] border px-4 py-2">
                {employee.position}
              </td>
              <td className="text-white  bg-[#B0ADEA] border px-4 py-2">
                {employee.contactNumber}
              </td>
              <td className="bg-[#B0ADEA] border px-4 py-2">
                <button onClick={seeEmployee}>
                  <EyeIcon className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                </button>
              </td>
              <td className="bg-[#B0ADEA] border px-4 py-2">
                <button onClick={delEmployee}>
                  <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-700" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeePage;
