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
      <div className="flex flex-1 bg-[#F2F2F2] justify-center items-center">
        <h1 className="absolute top-10 left-20 text-[px] text-[#302E46] my-5 text-left  text-4xl font-black font-jost">
          Ver Empleado
        </h1>
        <EmployeeProfile employeeId={params.id} />
      </div>
    </div>
  );
};

export default SeeEmployeePage;
