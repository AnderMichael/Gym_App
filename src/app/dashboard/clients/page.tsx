"use client";
import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import { EyeIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import DeleteModal from "./components/DeleteModal";
import { toast } from "react-toastify";
import {Button, colors} from '@mui/material';
import { makeStyles } from '@mui//material/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1F1C53',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const styles = {
  orangeButton: {
    backgroundColor: '#DC6000',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkorange',
    },
  },
}

const ClientsPage = () => {
  const router = useRouter();

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
    } else {
      if (queryParams.has("error")) {
        queryParams.delete("error");
        window.history.replaceState(
          {},
          document.title,
          `${window.location.pathname}${queryParams}`
        );
        toast.error("Cliente no añadido", { autoClose: 3000 });
      }
    }
    window.onload = () => {
      let notification = sessionStorage.getItem("notification");
      if (notification != null) {
        if (notification === "added") {
          toast.success("Cliente agregado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: {fontFamily: "inherit"},
          });
        } else if (notification === "deleted") {
          toast.success("Cliente eliminado exitosamente", {
            autoClose: 3000,
            position: "bottom-right",
            theme: "colored",
            style: {fontFamily: "inherit"},
          });
        }
        sessionStorage.removeItem("notification");
      }
    }
    }, []);

  const [{ data: clientData, loading, error }, refetch] = useAxios(
    "http://localhost:3000/clients"
  );
  const [clientToDelete, setClientToDelete] = useState(null);

  const handleAddClient = () => {
    router.push("/dashboard/clients/add_client");
  };

  const handleView = (client: any) => {
    console.log("Viewing:", client);
    router.push(`/dashboard/clients/see_client/${client.id}`);
  };

  const promptToDelete = (client: any) => {
    setClientToDelete(client);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  interface Client {
    id: number;
    clientFirstName: string;
    clientLastName: string;
    createdDate: string;
    planType: string;
  }

  const sortByClientName = (clients: Client[]): Client[] => {
    return clients
      .slice()
      .sort((a, b) => a.clientFirstName.localeCompare(b.clientFirstName));
  };

  const sortedClientsData = sortByClientName(clientData);

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#F2F2F2] p-4" >
        <div className="flex justify-between items-center">
          <h1 className="text-[#000000] font-extrabold text-4xl ">Clientes</h1>
          
          <Button onClick={handleAddClient} variant="contained" style={styles.orangeButton}>Añadir cliente</Button>
        </div>
        
        <TableContainer component={Card}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombres</StyledTableCell>
                  <StyledTableCell align="right">Apellidos</StyledTableCell>
                  <StyledTableCell align="right">Fecha de registro</StyledTableCell>
                  <StyledTableCell align="right">Plan</StyledTableCell>
                  <StyledTableCell align="right">Acion(temporal)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedClientsData.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.clientFirstName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.clientLastName}</StyledTableCell>
                    <StyledTableCell align="right">{row.createdDate}</StyledTableCell>
                    <StyledTableCell align="right">{row.planType}</StyledTableCell>
                    
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
      </TableContainer>
      </div>
      <DeleteModal
        isOpen={!!clientToDelete}
        onClose={() => setClientToDelete(null)}
        client={clientToDelete}
      />
    </>
  );
};

export default ClientsPage;