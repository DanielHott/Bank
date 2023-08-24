## Bank

#### Hello, my name is Daniel Hott, and this is a full-stack banking application that allows you to perform transactions, track your transactions, create a new account, and login.

### Technologies:

#### Frontend:

React.js with Typescript and styled-components.

#### Backend:

Node.js with Typescript, express, cors, dotenv, sequelize, and bcrypt for hashed passwords.

#### Database:

Postgres:10.17

#### Docker:

Docker-compose to build and deploy the application on any machine.

### Application Screenshots:

#### Login - On the login page, you can log in or create a new account.

![Web 1](https://github.com/DanielHott/imagens/blob/master/ngfull.png)

##### Mobile view

![Web 1](https://github.com/DanielHott/imagens/blob/master/ngmobile.png)


#### Register - On the user registration page, you can create a new account.

![Web 1](https://github.com/DanielHott/imagens/blob/master/registrate-ng.png)

#### Main - On the main page, the user can make transfers or return to the login screen.

![Web 1](https://github.com/DanielHott/imagens/blob/master/transfer-ng.png)

#### Main - Simulating a transfer, providing the destination username and amount.

![Web 1](https://github.com/DanielHott/imagens/blob/master/transfer-doing-ng.png)

#### Transactions - On the user's transactions page, you can list all transactions, including filters to view all transactions, only cash-ins, and only cash-outs.

![Web 1](https://github.com/DanielHott/imagens/blob/master/list-transfer-ng.png)

### To run the application, you must have Docker installed on your machine.

#### Steps to run the application:

1 - Navigate to the `Bank` folder through the terminal.

2 - Make sure there is nothing running on endpoints: `http://localhost:3000/` and `http://localhost:6585/`

3 - Run the command `docker-compose build`

4 - Run the command `docker-compose up`

5 - After the container configuration process, access the frontend application at `http://localhost:3000/` and the backend at `http://localhost:6585/`

#### My Information:

Linkedin: [https://www.linkedin.com/in/danielhott/](https://www.linkedin.com/in/danielhott/)

Github: [https://github.com/DanielHott](https://github.com/DanielHott)
