"use client";

import React from 'react'
import { EyeIcon, TrashIcon } from '@heroicons/react/solid';

const EmployeePage = () => {
    const employeesData = [
        {
            fullName: 'Juan Pérez',
            position: 'Desarrollador',
            contactNumber: '123-456-7890'
        },
        {
            fullName: 'María Rodríguez',
            position: 'Diseñadora',
            contactNumber: '098-765-4321'
        },
        // ... puedes agregar más datos de ejemplo aquí
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Employees</h1>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nombre Completo</th>
                        <th className="px-4 py-2">Cargo</th>
                        <th className="px-4 py-2">Número de Contacto</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.map((employee, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="border px-4 py-2">{employee.fullName}</td>
                            <td className="border px-4 py-2">{employee.position}</td>
                            <td className="border px-4 py-2">{employee.contactNumber}</td>
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

export default EmployeePage