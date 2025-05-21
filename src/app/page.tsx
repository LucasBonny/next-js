import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Sujeito Programador!',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito Programador!',
    description: 'Aprendendo Next JS do zero com Sujeito Programador!',
    images: ['https://sujeitoprogramador.com/steve.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}