import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AuthProvider } from "../app/context/authContext";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "GYM APP",
  description: "Generated by NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">

      <body className={poppins.className}>
        <div className="toast-container">

          <ToastContainer limit={2} theme="colored" />
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>

      </body>
    </html >

  );
}
