"use client";
import React, { ReactNode, useEffect } from 'react';
import { useAuth } from '../context/authContext'; // Ajusta la ruta según la ubicación de tu archivo authContext.tsx
import { useRouter } from "next/navigation";

interface LayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
    const { isLogged } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLogged) {
            router.push('/auth/login'); // Ajusta la ruta si tu página de login está en un lugar diferente
        }
    }, [isLogged, router]);

    return (
        <div>
            {isLogged ? children : null}
        </div>
    );
}

export default DashboardLayout;