"use client";

import React from "react";
import EmployeeForm from "./components/EmployeeForm";

const addEmployee = () => {
  return (
    <div className="flex inset-0 absolute">
      <div className="flex flex-1 bg-black justify-center items-center">
        <h1 className="absolute top-10 left-10 text-[px]">New Employee</h1>
        <EmployeeForm />
      </div>
    </div>
  );
};

export default addEmployee;
