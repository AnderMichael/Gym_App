import { AuthProvider } from "@/contexts/AuthContext";
import Employees from "./pages/employees/page";
import Login from "./pages/login/page";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </>
  );
}
