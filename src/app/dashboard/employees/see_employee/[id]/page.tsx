"use client";
import React from "react";
import EmployeeProfile from "../components/EmployeeProfile";

interface TokenProps {
  params: {
    id: string;
  };
  searchParams: string;
}

const SeeEmployeePage = ({ params, searchParams }: TokenProps) => {
  return (
    <div className="flex inset-0 absolute">
      <div className="flex flex-1 bg-black justify-center items-center">
        <h1 className="text-white absolute top-10 left-20 text-[px] font-extrabold text-4xl">
          Ver Empleado
        </h1>
        <EmployeeProfile employeeId={params.id} />
      </div>
    </div>
  );
};

export default SeeEmployeePage;
