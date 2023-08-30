"use client";
import React, { useState } from "react";
import useAxios from "axios-hooks";
import { toast } from "react-toastify";
import EmployeeForm from "../add_employee/components/EmployeeForm";

const AddModal = ({ isOpen, onClose }: any) => {

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={onClose}
          />
          <div className="z-10">
          </div>
        </div>
      )}
    </>
  );
};

export default AddModal;
