# To-do app

Backend and frontend are in diferent folders and need to be started separately

## Backend

runing in node 12.18.3

to initialize the database with seed data
```bash
npm run refresh
```

### enviroment variables

Conection to dabase is set to read enviroment variables, .env file es required on root of backend folder
```bash
host=lallah.db.elephantsql.com
user=dshtmupy
password=MWJmrr5yELYK32XASwIcWWfYbjHryv7-
database=dshtmupy
PORT=5000
env=development
```

### endpoints
Documentation in Postman [colection](https://www.getpostman.com/collections/ec0e0155430979769960)

## Frontend
you can add a new task and mark a task as done