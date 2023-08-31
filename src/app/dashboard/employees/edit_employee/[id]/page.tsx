"use client";
import useAxios from "axios-hooks";
import EmployeeFormEdit from "../components/EmployeeFormEdit";

interface TokenProps {
  params: {
    id: string;
  };
  searchParams: string;
}

const EditEmployee = ({ params, searchParams }: TokenProps) => {
  // Primero, declara todos los hooks
  const [{ data: employeeData, loading, error }] = useAxios(
    `http://localhost:3000/employee/${params.id}`
  );

  // Luego, maneja las condiciones
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col inset-0 justify-center items-center absolute">
      <h1 className="absolute top-10 left-20 text-[px] text-[#302E46] my-5 text-left  text-4xl font-black font-jost">
        Editar Empleado
      </h1>
      <EmployeeFormEdit employeeData={employeeData} />
    </div>
  );
};

export default EditEmployee;
