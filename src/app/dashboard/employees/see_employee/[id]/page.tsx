"use client";
import React from "react";
import EmployeeProfile from "../components/EmployeeProfile";


interface TokenProps {
    params: {
        id: string;
    },
    searchParams: string;
}


const SeeEmployeePage = ({ params, searchParams }: TokenProps) => {

    console.log(params.id)
    return (
        <div className="flex inset-0 absolute">
            <div className="flex flex-1 bg-black justify-center items-center">
                <h1 className="text-white absolute top-10 left-10">
                    Check Employee
                </h1>
                <EmployeeProfile />
            </div>
        </div>
    );
};

export default SeeEmployeePage;