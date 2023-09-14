"use client";

import MembershipInfo from "./profile_components/MembershipInfo";
import PersonalInfo from "./profile_components/PersonalInfo";

interface ClientProfileProps {
  clientData: any;
}

const ClientProfile = ({ clientData }: ClientProfileProps) => {
  return (
    <div className="container mx-auto w-[75%] bg-[#FFFFFF] p-10 rounded-md shadow-md shadow-[#C0C0C0]">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <PersonalInfo clientData={clientData} />
        <MembershipInfo clientData={clientData} />
      </div>
    </div>
  );
};

export default ClientProfile;
