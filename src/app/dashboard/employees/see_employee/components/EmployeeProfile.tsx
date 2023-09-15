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
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/employee/${employeeId}`
  );

  const closeView = () => {
    router.back();
  };

  if (loading)
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <span>Cargando...</span>
      </div>
    );
  if (error) {
    router.push("/dashboard/errorPage");
    return <></>;
  }
  return (
    <div className="flex bg-white p-10 rounded-xl w-[45%] shadow-md shadow-[#C0C0C0]">
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

        <Button color="bg-[#dc6000]" title="Cerrar" onClick={closeView} />
      </div>
    </div>
  );
};
export default EmployeeProfile;
