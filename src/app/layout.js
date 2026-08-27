import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { perfil, contato } from "@/data/perfil";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${perfil.nome} — ${perfil.titulo}`,
  description: perfil.resumo,
  authors: [{ name: perfil.nome, url: contato.github }],
  openGraph: {
    title: `${perfil.nome} — ${perfil.titulo}`,
    description: perfil.resumo,
    type: "profile",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
