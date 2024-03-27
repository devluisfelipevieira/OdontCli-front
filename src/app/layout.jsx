import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OdontCli",
  description: "Gerenciador de Clinica Odontológica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
