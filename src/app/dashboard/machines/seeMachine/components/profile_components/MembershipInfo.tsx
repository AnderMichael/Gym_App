// MembershipInfo.tsx
import React from "react";
import Machine from "../../../types/Machine";
import LabelProfile from "./LabelProfile";
import TextProfile from "./TextProfile";
import TitleProfile from "./TitleProfile";

interface MaintenanceInfoProps {
  machineData: Machine;
}

const MaintenanceInfo: React.FC<MaintenanceInfoProps> = ({ machineData }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <TitleProfile title="Membresía" />
      <div className="flex justify-center mt-2">
        <div className="mb-2 flex flex-1 mr-3 items-center justify-evenly">
          <LabelProfile title="¿Recibe Mantenimiento?" />
          <input
            id="link-checkbox"
            type="checkbox"
            checked={machineData.needMaintenance}
            className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="mb-2 flex-col flex flex-1 mr-3">
          <LabelProfile title="Fecha del próximo mantenimiento" />
          <TextProfile machineData={machineData.maintenanceDate} />
        </div>
      </div>
    </div>
  );
};

export default MaintenanceInfo;
