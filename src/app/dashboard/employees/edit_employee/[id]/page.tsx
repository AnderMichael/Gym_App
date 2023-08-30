"use client"
import useAxios from "axios-hooks";
import EmployeeFormEdit from "../components/EmployeeFormEdit";

interface TokenProps {
  params: {
    id: string;
  };
  searchParams: string;
}

const EditEmployee = ({ params, searchParams }: TokenProps) => {
  const [{ data: employeeData, loading, error }] = useAxios(
    `http://localhost:3000/employee/${params.id}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col inset-0 justify-center items-center absolute">
      <EmployeeFormEdit employeeData={employeeData} />
    </div>
  );
};

export default EditEmployee;
