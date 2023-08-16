"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const EmployeeProfile = () => {
  // ! Hooks para el form
  const router = useRouter(); // NOTE: Para redirigir paginas

  // ! Función para volver a la pantalla principal
  const closeView = () => {
    router.push('/employees');
  };

  return (
    <div className="flex bg-[#DC6000] p-10 rounded-md">
      <div className="flex flex-col justify-around h-[300px]">
        <div className="mb-2 block">
          <label className="text-white">Nombre Completo</label>
        </div>
        <div className="bg-white text-black text-center w-[200px] h-[35px]">
            Nombrecillo
        </div>
        <div className="mb-2 block">
          <label className="text-white">Cargo</label>
        </div>
        <div className="bg-white text-black text-center w-[200px] h-[35px]">
            Trabajito
        </div>
        <div className="mb-2 block">
          <label className="text-white">Carnet de Identidad</label>
        </div>
        <div className="bg-white text-black text-center w-[200px] h-[35px]">
            CI
        </div>
        <Button title="Close" onClick={closeView} />
      </div>
    </div>
  );
};

export default EmployeeProfile;
