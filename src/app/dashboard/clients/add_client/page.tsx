"use client";

import React from "react";
import ClientForm from "../components/ClientForm";
import {Button} from '@mui/material';
import { useRouter } from "next/navigation";


const styles = {
    orangeButton: {
      backgroundColor: '#DC6000',
      color: 'white',
      '&:hover': {
        backgroundColor: 'darkorange',
      },
    },
  }

const addClient = () => {
    const router = useRouter();

    const handleBackToClients = () => {
        router.push("/dashboard/clients");
      };
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#F2F2F2] p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-[#302E46] font-extrabold text-4xl ">
            Nuevo Cliente
          </h1>
          <Button onClick={handleBackToClients} variant="contained" style={styles.orangeButton}>Volver a los clientes</Button>         
        </div>
        <ClientForm />
      </div>
    </>
  );
};

export default addClient;