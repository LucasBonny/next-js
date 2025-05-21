// Cada post tem seus dados e a resposta da requisição é um array de posts.

import { Button } from "@/components/button";

interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}

// devemos converter a função para assincrona
export default async function Posts() {
    // Primeiro fazemos a requisição
    const response = await fetch('https://dummyjson.com/posts')
    // após isso devemos converter a resposta em json
    const data: ResponseProps = await response.json();
    // Ambas com await espera o resultado para poder prosseguir pelo código
    return(
        <div className="max-w-5xl items-center m-auto">
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>
            <Button />
            {data.posts.map(post => (
                <div key={post.id} className="bg-gray-200 p-4 m-2 rounded-md">
                    <h2 className="font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}