import localFont from "next/font/local";
import "./globals.css";
import { Menu } from "@/components/Menu";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="px-24 bg-white"
        >
        <Menu/>
        {children}
      </body>
    </html>
  );
}
