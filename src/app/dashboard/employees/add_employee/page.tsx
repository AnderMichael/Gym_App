"use client";

import React from "react";
import EmployeeForm from "./components/EmployeeForm";

const addEmployee = () => {
  return (
    <>
      <div className="flex inset-0 absolute">
        <div className="flex flex-1 bg-[#F2F2F2] justify-center items-center">
          <h1 className="absolute top-10 left-20 text-[px] text-[#302E46] my-5 text-left  text-4xl font-black font-jost">
            Nuevo Empleado
          </h1>
          <EmployeeForm />
        </div>
      </div>
    </>
  );
};

export default addEmployee;
