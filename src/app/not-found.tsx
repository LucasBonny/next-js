import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Página Não encontrada <span className="text-red-600">Erro 404</span></h1>
            <p>Essa página que tentou acessar não existe!</p>

            <Link className="text-cyan-500" href={'/'}>Voltar para a home</Link>
        </div>
    )
}