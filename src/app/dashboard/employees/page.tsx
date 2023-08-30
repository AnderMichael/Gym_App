"use client";
import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import { EyeIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";
import DeleteModal from "./components/DeleteModal";
import { toast } from "react-toastify";

const EmployeePage = () => {
  const router = useRouter();
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

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
    } else if (queryParams.has("edited")) {
      queryParams.delete("edited");
      window.history.replaceState(
        {},
        document.title,
        `${window.location.pathname}${queryParams}`
      );
      sessionStorage.setItem("notification", "edited");
      window.location.reload();
    } else {
      if (queryParams.has("error")) {
        queryParams.delete("error");
        window.history.replaceState(
          {},
          document.title,
          `${window.location.pathname}${queryParams}`
        );
        toast.error("Hubo un error en el proceso", {
          autoClose: 3000,
          position: "bottom-right",
          theme: "colored",
          style: { fontFamily: "inherit" },
        });
      }
    }
    window.onload = () => {
      let notification = sessionStorage.getItem("notification");
      if (notification != null) {
        if (notification === "added") {
          toast.success("Empleado agregado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: { fontFamily: "inherit" },
          });
        } else if (notification === "deleted") {
          toast.success("Empleado eliminado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: { fontFamily: "inherit" },
          });
        } else if (notification === "edited") {
          toast.success("Empleado actulizado exitosamente", {
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

  const [{ data: employeesData, loading, error }, refetch] = useAxios(
    "http://localhost:3000/employee"
  );

  const handleAddEmployee = () => {
    router.push("/dashboard/employees/add_employee");
  };

  const handleView = (employee: any) => {
    router.push(`/dashboard/employees/see_employee/${employee.id}`);
  };

  const handleEdit = (employee: any) => {
    router.push(`/dashboard/employees/edit_employee/${employee.id}`);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  interface Employee {
    id: number;
    employeename: string;
    cargo: string;
    numero: number;
  }

  const promptToDelete = (employee: any) => {
    setEmployeeToDelete(employee);
  };
  const sortByEmployeeName = (employees: Employee[]): Employee[] => {
    return employees
      .slice()
      .sort((a, b) => a.employeename.localeCompare(b.employeename));
  };

  const sortedEmployeesData = sortByEmployeeName(employeesData);

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
            Empleados
          </h1>
          <button
            onClick={handleAddEmployee}
            className="font-bold font-jost text-lg bg-[#3d3b57] hover:bg-[#302E46]  text-white px-6 py-4 rounded-2xl shadow-black shadow-md"
          >
            Agregar Empleado
          </button>
        </div>
        <div className="overflow-x-auto mb-4 rounded-xl shadow-lg shadow-[#C0C0C0]">
          <table className="w-full table-auto">
            <thead className="bg-[#DC6000] text-white font-bold font-jost text-2xl">
              <tr>
                <th className="p-4"> Nombre Completo </th>
                <th className="p-4"> Cargo </th>
                <th className="p-4"> Número de Contacto </th>
                <th colSpan={3} />
              </tr>
            </thead>
            <tbody>
              {sortedEmployeesData.map((employee: any, index: number) => (
                <tr
                  key={employee.id}
                  className={
                    index % 2 === 0
                      ? "bg-[#FBEFE6] text-center font-normal font-jost"
                      : "bg-white text-center font-normal font-jost"
                  }
                >
                  <td className="text-black px-4 py-2">
                    {employee.employeename}
                  </td>
                  <td className="text-black px-4 py-2">{employee.cargo}</td>
                  <td className="text-black px-4 py-2">{employee.numero}</td>
                  <td className="text-black px-4 py-2">
                    <button onClick={() => handleView(employee)}>
                      <EyeIcon className="h-7 w-10 border-spacing-1 text-[#223A6B] hover:text-[#5769a5]" />
                    </button>
                  </td>
                  <td className="text-black   px-4 py-2">
                    <button onClick={() => handleEdit(employee)}>
                      <PencilAltIcon className="h-7 w-7 text-[#1A4E1C] hover:text-[#447646]" />
                    </button>
                  </td>
                  <td className="text-black   px-4 py-2">
                    <button onClick={() => promptToDelete(employee)}>
                      <TrashIcon className="h-7 w-7 text-[#CE0A0B] hover:text-[#e92626] font-thin" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
