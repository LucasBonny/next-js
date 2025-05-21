# Guia para usar o Next.JS

## Objetivo
O objetivo desse estudo é abordar todos tópicos necessários para se utilizar o Next.JS em um projeto frontend.

## Tópicos
Serão abordado alguns tópicos abaixo que serão essenciais para o bom uso dessa ferramenta
 - [x] Criação de projetos
 - [x] Roteamento e navegação entre páginas
 - [x] Metadata (SEO)
 - [ ] Server e Client components
 - [ ] Rotas dinâmicas
 - [ ] Actions
 - [ ] Revalidate, Cache
 - [ ] Cache fetch
 - [ ] Middleware
 - [ ] Route Handlers

 ## Tópico 1 - Criação de projetos

 O next.js é uma ferramenta para o desenvolvimento de projetos de interface de usuários utilizando componentes, modularização com a biblioteca React.

 ### Instruções

 1. abra um terminal no dispositivo.
 2. vá ao diretório onde o projeto irá ficar.
 3. execute `npx create-next-app@latest`
 4. responda as perguntas abaixo com:
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
 5. abra o diretório do projeto: `cd project`.
 6. execute o projeto: `npm run dev`. 

 ## Tópico 2 - Roteamento e navegação entre páginas
 Por padrão, ao utilizar rotas com a biblioteca react, seria necessário a utilização de uma biblioteca externa para fazer o gerenciamento de rotas, mas com o Next.JS não é necessário, pois, há por padrão uma maneira simples de se lidar com as elas.

 ### Pastas e arquivos

 Na raiz do projeto terá a pasta `src/app` e nela terá o arquivo `page.tsx` onde ficará a componente da página principal do projeto.

 No mesmo diretório há um arquivo chamado `layout.tsx` é o arquivo de configuração do layout da aplicação.

 A [criação de uma nova rota](https://nextjs.org/docs/app/getting-started/layouts-and-pages) vem através de uma nova pasta ela irá ser a nova rota dentro do projeto e dentro dela terá um arquivo `page.tsx`.

 O arquivo `layout.tsx` gerencia toda a página renderizando apenas o componente ao trocar de rota, possibilitando a alteração base do arquivo, como inserindo outros componentes na página.

 #### Criando um componente Header para o layout.tsx
 1. volte até o diretório `src` e crie uma pasta chamada `components`
 2. crie uma pasta com o nome do componente
 3. crie um arquivo chamado `index.tsx`
 4. monte o componente
 5. exporta o componente sem 'default'
 6. importe dentro do `layout.tsx`

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

