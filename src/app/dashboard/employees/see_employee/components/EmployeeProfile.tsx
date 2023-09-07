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
    router.back();
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <div className="flex bg-white p-10 rounded-xl w-[45%] shadow-xl shadow-[#C0C0C0]">
      <div className="flex flex-1 flex-col">
        <h1 className="text-[#302E46] my-5 text-left  text-3xl font-black font-jost">
          Datos Personales
        </h1>

        <label className="text-[#302E46] my-1 font-semibold text-xl font-jost">
          Nombre Completo
        </label>
        <div className="flex bg-[#d2d1d7] my-1 text-black text-center rounded-lg items-center justify-center h-[45px] ">
          {employeeData.employeename}
        </div>

        <label className="text-[#302E46] my-1 font-semibold text-xl font-jost">
          Cargo
        </label>
        <div className="flex bg-[#d2d1d7] my-1 text-black text-center rounded-lg items-center justify-center h-[45px] ">
          {employeeData.cargo}
        </div>

        <label className="text-[#302E46] my-1 font-semibold text-xl font-jost">
          Número de Contacto
        </label>
        <div className="flex bg-[#d2d1d7] mt-1 mb-5 text-black text-center rounded-lg items-center justify-center h-[45px] ">
          {employeeData.numero}
        </div>

        <Button
          color="bg-[#EA9553]"
          hover="bg-[#DC6000]"
          title="Cerrar"
          onClick={closeView}
        />
      </div>
    </div>
  );
};
export default EmployeeProfile;
