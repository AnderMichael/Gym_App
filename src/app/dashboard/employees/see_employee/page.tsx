"use client";
import React from "react";
import EmployeeProfile from "./components/EmployeeProfile";
const seeEmployee = () => {
  return (
    <div className="flex inset-0 absolute">
      <div className="flex flex-1 bg-black justify-center items-center">
        <h1 className="text-white absolute top-10 left-10 text-[px]">
          Check Employee
        </h1>
        <EmployeeProfile />
      </div>
    </div>
  );
};

export default seeEmployee;