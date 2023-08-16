"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export const Employees = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter(); // NOTE: Para redirigir paginas

  useEffect(() => {
    if (!auth.isLogged) {
      router.push("/");
    }
  }, []);
  
  return (
    <div className="flex flex-1 justify-center items-center inset-0 absolute">
      <h1>Employees Page</h1>
    </div>
  );
};

export default Employees;
