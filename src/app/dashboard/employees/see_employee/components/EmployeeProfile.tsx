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
    <div className="flex bg-white p-10 rounded-xl w-[470px] shadow-xl shadow-[#C0C0C0]">
      <div className="flex flex-1 flex-col justify-around">
        <div className="flex flex-col">
        <h1 className="text-[#302E46] my-5 text-left  text-3xl font-black font-jost">Datos Personales</h1>
          <label className="text-[#302E46] font-semibold text-xl font-jost p-3">Nombre Completo</label>
          <div className="flex bg-[#d2d1d7] text-black text-center rounded-lg items-center justify-center h-[35px] ">
            {employeeData.employeename}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#302E46] font-semibold text-xl font-jost p-3">Cargo</label>
          <div className="flex bg-[#d2d1d7] text-black text-center rounded-lg items-center justify-center h-[35px]">
            {employeeData.cargo}
          </div>
        </div>

        <div className="my-2 flex flex-col">
          <label className="text-[#302E46] font-semibold text-xl font-jost p-3">
            Número de Contacto
          </label>
          <div className="flex bg-[#d2d1d7] text-black text-center rounded-lg items-center justify-center h-[35px] ">
            {employeeData.numero}
          </div>
        </div>
          <button className=" mt-8 mb-4 h-auto bg-[#EA9553] hover:bg-[#DC6000] p-2 rounded-xl" onClick={closeView}>
          <h1 className="font-bold font-jost text-lg text-white">
            Cerrar
          </h1>
        </button>
    
      </div>
    </div>
  );
};
export default EmployeeProfile;
