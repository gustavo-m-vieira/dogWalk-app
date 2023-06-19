# DogWalk Frontend

Este projeto contem o frontend da aplicação dog walk, construído como uma Single-Page Application (SPA) usando VueJs. A aplicação conta com testes unitários (ver [seção de testes](#Executando-os-testes-unitários)) e [linting](#Executando-o-linter).

## Requisitos

Para a instalação local, é necessário que o gerenciador de pacotes [npm](https://www.npmjs.com/) esteja instalado. Para a instalação com docker, é necessário um ambiente Docker configurado, com acesso via CLI.

## Configuração

Para utilizar esta aplicação, é necessário que o componente de backend esteja rodando. Para que a aplicação possa saber o endereço do backend, configure-o no arquivo `src/env.js`. É necessário mudar o valor de `apiUrl`. Caso contrário, localhost será o valor default.

## Rodando o projeto no Docker

Para rodar o projeto via docker, utilize o comando de build:
```sh
docker build -t dw-front .
```

E para executar:
```sh
docker run -p 80:80 dw-front
```

## Rodando o projeto localmente

Primeiro, instale as dependências:
```sh
npm install
```

Parar rodar o projeto e modo de desenvolvimento, utilize:

```sh
npm run dev
```

Para rodar o projeto simulando um deploy de produção, utilize
```sh
npm run build && npm run preview
```

## Executando os testes unitários

Este projeto conta com testes unitários usando Jest. Para executá-los, utilize:
```sh
npx jest
```

## Executando o linter

O linter configurado no projeto é o ESLint. Para executá-lo, utilize:
```sh
npx eslint .
```