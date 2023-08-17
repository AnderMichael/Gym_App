"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import useAxios from 'axios-hooks';

interface EmployeeProfileProps {
    employeeId: string;
}

const EmployeeProfile = ({ employeeId }: EmployeeProfileProps) => {
    const router = useRouter();

    const [{ data: employeeData, loading, error }] = useAxios(`http://localhost:3000/employee/${employeeId}`);

    const closeView = () => {
        router.push('/employees');
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos.</p>;

    return (
        <div className="flex bg-[#DC6000] p-10 rounded-md">
            <div className="flex flex-col justify-around h-[300px]">
                <div className="mb-2 block">
                    <label className="text-white">Nombre Completo</label>
                </div>
                <div className="bg-white text-black text-center w-[200px] h-[35px]">
                    {employeeData.employeename}
                </div>
                <div className="mb-2 block">
                    <label className="text-white">Cargo</label>
                </div>
                <div className="bg-white text-black text-center w-[200px] h-[35px]">
                    {employeeData.cargo}
                </div>
                <div className="mb-2 block">
                    <label className="text-white">Número de Contacto</label>
                </div>
                <div className="bg-white text-black text-center w-[200px] h-[35px]">
                    {employeeData.numero}
                </div>
                <Button title="Close" onClick={closeView} />
            </div>
        </div>
    );
};
export default EmployeeProfile;
