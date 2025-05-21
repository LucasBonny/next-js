# Guia para usar o Next.JS

## Objetivo
O objetivo desse estudo é abordar todos tópicos necessários para se utilizar o Next.JS em um projeto frontend.

## Tópicos
Serão abordado alguns tópicos abaixo que serão essenciais para o bom uso dessa ferramenta
 - [x] Criação de projetos
 - [x] Roteamento e navegação entre páginas
 - [x] Metadata (SEO)
 - [x] Server e Client Components
 - [ ] Actions
 - [ ] Rotas dinâmicas
 - [ ] Actions
 - [ ] Revalidate, Cache
 - [ ] Cache fetch
 - [ ] Middleware
 - [ ] Route Handlers

 ## Tópico 1 - Criação de projetos

 O next.js é uma ferramenta para o desenvolvimento de projetos de interface de usuários utilizando componentes, modularização com a biblioteca React.

 ### Instruções

 1. Abra um terminal no dispositivo.
 2. Vá ao diretório onde o projeto irá ficar.
 3. Execute `npx create-next-app@latest`
 4. Responda as perguntas abaixo com:
 ```bash
✔ What is your project named? project
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? No
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like your code inside a `src/` directory? Yes
✔ Would you like to use App Router? Yes
✔ Would you like to use Turbopack for `next dev`? No
✔ Would you like to customize the import alias (`@/*` by default)? Yes
✔ What import alias would you like configured? @/*
 ```
 5. Abra o diretório do projeto: `cd project`.
 6. Execute o projeto: `npm run dev`. 

 ## Tópico 2 - Roteamento e navegação entre páginas
 Por padrão, ao utilizar rotas com a biblioteca react, seria necessário a utilização de uma biblioteca externa para fazer o gerenciamento de rotas, mas com o Next.JS não é necessário, pois, há por padrão uma maneira simples de se lidar com as elas.

 ### Pastas e arquivos

 Na raiz do projeto terá a pasta `src/app` e nela terá o arquivo `page.tsx` onde ficará a componente da página principal do projeto.

 No mesmo diretório há um arquivo chamado `layout.tsx` é o arquivo de configuração do layout da aplicação.

 A [criação de uma nova rota](https://nextjs.org/docs/app/getting-started/layouts-and-pages) vem através de uma nova pasta ela irá ser a nova rota dentro do projeto e dentro dela terá um arquivo `page.tsx`.

 O arquivo `layout.tsx` gerencia toda a página renderizando apenas o componente ao trocar de rota, possibilitando a alteração base do arquivo, como inserindo outros componentes na página.

 #### Criando um componente Header para o layout.tsx
 1. Volte até o diretório `src` e crie uma pasta chamada `components`
 2. Crie uma pasta com o nome do componente
 3. Crie um arquivo chamado `index.tsx`
 4. Monte o componente
 5. Exporta o componente sem 'default'
 6. Importe dentro do `layout.tsx`

 ### Navegação

 Para fazer a troca de rota dentro do Next.JS utilizamos a tag `<Link href='/'>Mensagem<Link>`.

 ### Página de erro 404

 Por padrão ao abrir uma rota inexistente aparece o erro 404 do próprio next mas podemos personalizar a nossa página de erro.
 Para isso precisa-se criar um arquivo na pasta `app` o arquivo `not-found.tsx` e devemos colocar nossa página de erro nele.
 ## Tópico 3 - Metadata (SEO)
O objetivo dos metadatas servem para melhorar a indexação do nosso site nos buscadores, como: Google, Bing, Brave, entre outros...
E utilizando o Next, nos dá liberdade de utilizar esses metadata de forma dinânica/estática para páginas únicas, ou de forma global.

[Metadata SEO - Next.JS](https://nextjs.org/docs/app/guides/production-checklist#metadata-and-seo)

### Como utilizar
Para utilizar basta criar uma variável na página do tipo metadata e configurar os dados necessários.

```js
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Sujeito Programador!',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito Programador!',
    description: 'Aprendendo Next JS do zero com Sujeito Programador!'
  }
}
```
com isso já estará disponível as informações dentro da página.
Agora se quiser fazer de forma global, basta colocar dentro do arquivo `layout.tsx`. Ao fazer isso, as páginas que não tiverem metadatas, usarão as metadatas globais.

## Tópico 4 - Server e Client Components
Antes de começarmos, devemos está ciente que por padrão, todos os nossos componentes criado dentro do Next são __Server Components__. E com isso há menos javascript rodando por parte do cliente trazendo mais performance ao acessar a página, mas as vezes é necessário a interação do usuário, logo, devemos utilizar o __Client Components__. Para se criar um componente com renderização por parte do cliente, basta utilizar no início da página: 
```js
'use client'
```
### Qual a diferença entre eles?
A princípio, irei mostrar na prática como fazer uma requisição HTTP.

#### Usando um Server Component
1. Devemos transformar o componente em assíncrono
```js
export default async function Posts() {...}
```
2. Fazer uma requisição dentro do corpo do componente com await
```js
const response = await fetch('https://dummyjson.com/posts')
const data: ResponseProps = await response.json()
```
 e com isso quando a página carregar para o usuário já terá renderizado os dados na tela.

#### Usando um Client Component
O processo utilizado com async await só é permitido ser utilizado em __Server Component__, logo o processo acima não se aplica aqui. Para conseguirmos fazer a requisição em um __Client Component__ devemos seguir os seguintes passos:

1. Devemos declarar no componente `'use client'` e com isso temos acesso aos recursos padrões do react com useState, UseEffect.
2. Iremos criar `const [posts, setPosts] = useState([])`
3. E usaremos o useEffect para fazer a requisição:
```js
useEffect(() => {
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data => setPosts(data.posts))
}, []);
```
e com isso quando a página carregará os dados somente após o _client_ ter feito a requisição na api.

Utilizar o __Server Component__ pode ser performático mas não temos acesso ao useState e assim podemos optar por outros meios para utilizá-lo em uma página __Server Component__.
### Como usar recursos do react dentro de um Server Component
Para fazermos isso podemos criar um componente para fazer essa função e declarar ele para renderizar do lado client.

1. Criamos um botão em `src/components`
2. Definimos como _client_
3. Definimos um useState para armazenar um nome
4. Criamos uma função para alterar o nome
5. na tag button definimos o parametro onClick com a função.
6. Importamos o componente dentro de uma página __Server Component__.

Agora temos um recurso com _client_ dentro de uma página __Server Component__.