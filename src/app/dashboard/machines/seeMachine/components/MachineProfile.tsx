"use client";

import MaintenanceInfo from "./profile_components/MembershipInfo";
import MachineInfo from "./profile_components/MachineInfo";

interface MachineFeaturesProps {
  machineData: any;
}

const MachineProfile = ({ machineData }: MachineFeaturesProps) => {
  return (
    <div className="container mx-auto w-[75%] bg-[#FFFFFF] p-10 rounded-md">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <MachineInfo machineData={machineData} />
        <MaintenanceInfo machineData={machineData} />
      </div>
    </div>
  );
};

export default MachineProfile;
