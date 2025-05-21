# Guia para usar o Next.JS

## Objetivo
O objetivo desse estudo é abordar todos tópicos necessários para se utilizar o Next.JS em um projeto frontend.

## Tópicos
Serão abordado alguns tópicos abaixo que serão essenciais para o bom uso dessa ferramenta
 - [x] Criação de projetos
 - [ ] Roteamento e navegação entre páginas
 - [ ] Metadata (SEO)
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

 A criação de uma nova rota vem através de uma nova pasta ela irá ser a nova rota dentro do projeto e dentro dela terá um arquivo `page.tsx`.

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