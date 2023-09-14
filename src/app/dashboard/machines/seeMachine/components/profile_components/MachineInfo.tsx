import React from "react";
import LabelProfile from "./LabelProfile";
import Machine from "../../../types/Machine";
import TextProfile from "./TextProfile";
import TitleProfile from "./TitleProfile";
import setCorrectDate from "@/helpers/dateCorrector";

interface MachineInfoInfoProps {
  machineData: Machine;
}

const MachineInfo: React.FC<MachineInfoInfoProps> = ({
  machineData,
}: MachineInfoInfoProps) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <TitleProfile title="Información de la máquina" />
      <div className="flex justify-center mt-2">
        <div className="mb-2 flex-col flex flex-1 mr-3">
          <LabelProfile title="Nombre" />
          <TextProfile machineData={machineData.machineName} />
        </div>
        <div className="mb-2 flex-col flex flex-1 mx-3">
          <LabelProfile title="Fecha de Adquisición" />
          <TextProfile
            machineData={setCorrectDate(machineData.acquisitionDate)}
          />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="mb-2 flex-col flex flex-1 mr-3">
          <LabelProfile title="Marca" />
          <TextProfile machineData={machineData.machineBrand} />
        </div>
        <div className="mb-2 flex-col flex flex-1 mx-3">
          <LabelProfile title="Código" />
          <TextProfile machineData={`${machineData.id}`} />
        </div>
      </div>
    </div>
  );
};

export default MachineInfo;
