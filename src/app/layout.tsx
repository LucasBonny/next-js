import { Header } from "@/components/header";
import "./globals.css";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Sujeito Programador!',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito Programador!',
    description: 'Aprendendo Next JS do zero com Sujeito Programador!'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
