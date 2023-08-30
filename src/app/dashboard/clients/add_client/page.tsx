"use client";

import React from "react";
import ClientForm from "../components/ClientForm";

const addClient = () => {
  return (
    <>
      <div className="flex inset-0 absolute">
        <div className="flex flex-1 bg-black justify-center items-center">
          <h1 className="absolute top-10 left-20 text-[px] text-white font-extrabold text-4xl">
            Nuevo Cliente
          </h1>
          <ClientForm />
        </div>
      </div>
    </>
  );
};

export default addClient;