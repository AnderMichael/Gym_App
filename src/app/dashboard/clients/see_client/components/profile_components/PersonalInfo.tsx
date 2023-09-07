import React from "react";
import LabelProfile from "./LabelProfile";
import { Client } from "../../../types/Client";
import TextProfile from "./TextProfile";
import TitleProfile from "./TitleProfile";

interface PersonalInfoProps {
  clientData: Client;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ clientData }: PersonalInfoProps) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <TitleProfile title="Datos Personales"/>
      <div className="flex justify-center mt-2">
        <div className="mb-2 flex-col flex flex-1 mr-3">
          <LabelProfile title="Nombres" />
          <TextProfile clientData={clientData.clientFirstName}/>
        </div>
        <div className="mb-2 flex-col flex flex-1 mx-3">
          <LabelProfile title="Apellidos" />
          <TextProfile clientData={clientData.clientLastName}/>
        </div>
        <div className="mb-2 flex-col flex flex-1 ml-3">
          <LabelProfile title="Fecha de Nacimiento" />
          <TextProfile clientData={clientData.borndate}/>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="mb-2 flex-col flex flex-[2] mr-3">
          <LabelProfile title="Dirección" />
          <TextProfile clientData={clientData.direction}/>
        </div>
        <div className="mb-2 flex-col flex flex-1 mx-3">
          <LabelProfile title="Correo Electrónico" />
          <TextProfile clientData={clientData.email}/>
        </div>
        <div className="mb-2 flex-col flex flex-1 ml-3">
          <LabelProfile title="Número de Contacto" />
          <TextProfile clientData={clientData.cellphone}/>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;