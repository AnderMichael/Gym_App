// MembershipInfo.tsx
import React from "react";
import { Client } from "../../../types/Client";
import LabelProfile from "./LabelProfile";
import TextProfile from "./TextProfile";
import TitleProfile from "./TitleProfile";

interface MembershipInfoProps {
  clientData: Client;
}

const MembershipInfo: React.FC<MembershipInfoProps> = ({ clientData }) => {
  return (
    <div>
      <TitleProfile title="Membresía"/>
      <div className="flex justify-center mt-2">
        <div className="mb-2 flex-col flex flex-1 mr-3">
          <LabelProfile title="Fecha de creación" />
          <TextProfile clientData={clientData.createdDate.substring(0, 10)} />
        </div>
        <div className="mb-2 flex-col flex flex-1 mr-3">
          <LabelProfile title="Método de Pago" />
          <TextProfile clientData={clientData.payplan} />
        </div>
        <div className="mb-2 flex-col flex flex-1 mr-3">
          <LabelProfile title="Plan" />
          <TextProfile clientData={clientData.planType} />
        </div>
      </div>
    </div>
  );
};

export default MembershipInfo;
