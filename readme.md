## Bank

#### Olá, me chamo Daniel Hott e esta é uma aplicação fullstack de banco com possibilidade de realizar transações, mapear suas transações, criar uma nova conta e realizar login.

### Tecnologias: 

#### Frontend: 

React.js com Typescript e styled-components.

#### Backend:

Node.js com Typescript, express, cors, dotenv, sequelize e bcrypt para senhas hasheadas.

#### Banco de dados:

Postgres:10.17

#### Docker:

Docker-compose para buildar e subir a aplicação em qualquer máquina.

### Prints da aplicação:

#### Login -  Na página de login, há a possibilidade de fazer o login e criar nova conta.

![Web 1](https://github.com/DanielHott/imagens/blob/master/login-ng.png)

#### Registrate -  Na página de registrar usuário, há a possibilidade de criar uma nova conta.

![Web 1](https://github.com/DanielHott/imagens/blob/master/registrate-ng.png)

#### Main -  Na página principal, o usuário pode realizar transferências, voltar para a tela de login.

![Web 1](https://github.com/DanielHott/imagens/blob/master/transfer-ng.png)

#### Main -  Simulando uma transferência, fornecendo o username destino e o valor.

![Web 1](https://github.com/DanielHott/imagens/blob/master/transfer-doing-ng.png)

#### Transactions -  Na página de transações do usuário, permite que listemos todas as transações realizadas inclusive com filtro para visualizar todas as transações, somente as cash-in e somente as cash-out.

![Web 1](https://github.com/DanielHott/imagens/blob/master/list-transfer-ng.png)

### Para rodar a aplicação, deve ter o docker instalado na máquina.

#### Passos para rodar a aplicação:

1 - Vá pelo terminal até a pasta `Bank`

2 - Certifique que não há nada rodando nos endpoints: `http://localhost:3000/` e `http://localhost:6585/`

2 - Rode o comando `docker-compose build`

3 - Rode o comando `docker-compose up`

4 - Após o processo de configuração do conteiner, confira a aplicação frontend rodando em `http://localhost:3000/` e backend rodando em `http://localhost:6585/`

#### Meus dados:

Linkedin: `https://www.linkedin.com/in/danielhott/`;

Github: `https://github.com/DanielHott`;
