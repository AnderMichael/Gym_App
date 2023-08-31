"use client";
import useAxios from "axios-hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
interface ClientFormProps {
    clientData: any;
}


const ClientFormEdit = ({ clientData }: ClientFormProps) => {
    const router = useRouter();

    const cancellation = () => {
        router.back();
    };

    return (
        <div className="container mx-auto w-[75%] bg-[#FFFFFF] p-10 rounded-md">
            <form className="flex flex-col space-y-4 md:space-y-6">
                <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
                    Datos Personales
                </h1>
                <div className="flex justify-center mt-2">
                    <div className="mb-2 flex-col flex flex-1 mr-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Nombres
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.clientFirstName}
                        </p>
                    </div>
                    <div className="mb-2 flex-col flex flex-1 mx-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Apellidos
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.clientLastName}
                        </p>
                    </div>
                    <div className="mb-2 flex-col flex flex-1 ml-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Fecha de nacimiento
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.borndate}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <div className="mb-2 flex-col flex flex-[2] mr-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Dirección
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.direction}
                        </p>
                    </div>
                    <div className="mb-2 flex-col flex flex-1 mx-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Correo Electrónico
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.email}
                        </p>
                    </div>
                    <div className="mb-2 flex-col flex flex-1 ml-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Número de Contacto
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.cellphone}
                        </p>
                    </div>
                </div>

                <h1 className="text-[#302E46] font-bold font-jost text-4xl ">
                    Membresía
                </h1>

                <div className="flex justify-center mt-2">
                    <div className="mb-2 flex-col flex flex-1 mr-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Fecha de registro
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.createdDate.substring(0, 10)}
                        </p>
                    </div>

                    <div className="mb-2 flex-col flex flex-1 mr-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Método de Pago
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.payplan}
                        </p>
                    </div>

                    <div className="mb-2 flex-col flex flex-1 mr-3">
                        <label className="text-[#302E46] font-semibold text-xl font-jost">
                            Plan
                        </label>
                        <p className="bg-[#F2F2F2] text-gray-800 rounded-lg text-center h-10 p-2">
                            {clientData.planType}
                        </p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex flex-1 mx-1">
                        <button
                            className="flex-1 bg-[#1AC317] p-2 text-white rounded-xl hover:bg-[#246623] "
                            onClick={cancellation}
                        >
                            <h1 className="font-semibold">Volver</h1>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ClientFormEdit;