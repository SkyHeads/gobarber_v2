<h1 align="center">
	<img alt="GoStack" src="assets/logo.svg" width="200px" />
</h1>

<h1 align="center">
    <img alt="GoBarber" src="assets/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656c6961736763662f696d6167652f75706c6f61642f76313538373530393539362f476f4261726265722f6d6f636b75705f6f63676769742e706e67.png" />
</h1>

## :page_with_curl: Sobre
Este repositório contém um API REST em Node.js como back-end, uma aplicação em ReactJS como front-end e um app mobile em React Native, todos utilizando TypeScript.

Essa é a aplicação GoBarber, que é uma plataforma de agendamento de serviços para proprietários de barbearias ou salões de beleza. Nessa aplicação o usuário consegue ter acesso a todos os prostadores de serviços cadastrados através de um aplicativo mobile, com isso usuário consegue escolher um prestador para marcar seu agendamento.

Já o prestador de serviço, através de um interface Web, consegue ter acesso a todos os seus horários, podendo ver todos os que estão ocupados quanto os que estão disponíveis.

**Node.js**: é uma API REST que faz todo o CRUD da aplicação, persistência de dados, tratativa de exceções e que serve dados tanto ao front-end quanto ao mobile.

**ReactJS**: é uma página Web no qual o prestador de serviço tem acesso a todo o seu calendário de agendamentos.

**React Native**: é um aplicativo em que o usuário tem acesso a todos os prestadores de serviço cadastrados no App, com isso ele pode fazer um agendamento que o prestador de preferência.

## :gear: Iniciando back-end
```bash
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Rodar as migrations:
  $ yarn typeorm migration:run

  # Rodar a aplicação:
  $ yarn dev:server
```

## :computer: Iniciando front-end
```bash
  # Entrar no diretório do front-end:
  $ cd frontend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn start
```

## :iphone: Iniciando mobile
```bash
  # Entrar no diretório do mobile:
  $ cd mobile

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn ios ou yarn android 
```

<h4 align="center">
   Done with 💜 by <a href="https://www.linkedin.com/in/bruno-fernandes-517026187/" target="_blank">Bruno Fernandes</a>
</h4>
