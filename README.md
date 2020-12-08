# To-do app

Backend and frontend are in diferent folders and need to be started separately

## Backend
runing in node 12.20.0 nvm can ve used to set node version

### Starting the proyect

in dev mode with nodemon in the port define by PORT env variable
```bash
npm run dev
```

### Running tests
tests were writen in jest

to run all tests
```bash
npm run test
```

to run all tests in watch mode
```bash
npm run test:watch
```

### Database
to reinitialize the database with seed data
```bash
npm run refresh
```

### Enviroment variables

Conection to dabase is set to read enviroment variables, .env file es required on root of backend folder
the .env.sample file is left with a connection to a database in elephantSQL


### Endpoints
Documentation for all endpoints in Postman [colection](https://www.getpostman.com/collections/8b9950b8239e8c45e431)

## Frontend
runing in node 12.18.3 nvm can ve used to set node version
you can add a new task and mark a task as done, you can also select a user to view their tasks and a table is displayed with a summary of all users

### Starting the proyect

in dev mode with on port 3000
```bash
npm start
```

### Running tests
tests were writen in jest

to run all tests
```bash
npm run test
```