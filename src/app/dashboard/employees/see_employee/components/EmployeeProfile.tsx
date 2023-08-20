"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import useAxios from "axios-hooks";

interface EmployeeProfileProps {
  employeeId: string;
}

const EmployeeProfile = ({ employeeId }: EmployeeProfileProps) => {
  const router = useRouter();

  const [{ data: employeeData, loading, error }] = useAxios(
    `http://localhost:3000/employee/${employeeId}`
  );

  const closeView = () => {
    router.push("/dashboard/employees");
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <div className="flex bg-[#DC6000] p-10 rounded-md w-[470px]">
      <div className="flex flex-1 flex-col justify-around">
        <div className="my-2 flex flex-col">
          <label className="text-white font-bold">Nombre Completo</label>
          <div className="flex bg-white text-black text-center rounded-lg items-center justify-center h-[35px] mt-2">
            {employeeData.employeename}
          </div>
        </div>

        <div className="my-2 flex flex-col">
          <label className="text-white font-bold">Cargo</label>
          <div className="flex bg-white text-black text-center rounded-lg items-center justify-center h-[35px] mt-2">
            {employeeData.cargo}
          </div>
        </div>

        <div className="my-2 flex flex-col">
          <label className="text-white font-bold">Número de Contacto</label>
          <div className="flex bg-white text-black text-center rounded-lg items-center justify-center h-[35px] mt-2">
            {employeeData.numero}
          </div>
        </div>
        <div className="my-2 flex flex-col">
          <Button title="Close" onClick={closeView} color="#15133B" />
        </div>
      </div>
    </div>
  );
};
export default EmployeeProfile;
