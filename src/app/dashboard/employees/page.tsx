"use client";

import React from 'react';
import useAxios from 'axios-hooks';
import { EyeIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';

const EmployeePage = () => {
    const [{ data: employeesData, loading, error }] = useAxios('http://localhost:3000/employee');
    const router = useRouter()

    const handleAddEmployee = () => {
        router.push('/dashboard/employees/add_employee');
    }

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos.</p>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-white text-2xl font-bold">Employees</h1>
                <button onClick={handleAddEmployee}>
                    <PlusCircleIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
                </button>
            </div>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nombre Completo</th>
                        <th className="px-4 py-2">Cargo</th>
                        <th className="px-4 py-2">Número de Contacto</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.map((employee) => (
                        <tr key={employee.id} className={employee.id % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="border px-4 py-2">{employee.employeename}</td>
                            <td className="border px-4 py-2">{employee.cargo}</td>
                            <td className="border px-4 py-2">{employee.numero}</td>
                            <td className="border px-4 py-2">
                                <button onClick={() => handleView(employee)}>
                                    <EyeIcon className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                                </button>
                            </td>
                            <td className="border px-4 py-2">
                                <button onClick={() => handleDelete(employee)}>
                                    <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-700" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeePage;
