require('dotenv').config();
module.exports = {
    postgress:{
        host: process.env.host || '',
        user: process.env.user || '',
        password: process.env.password || '',
        database: process.env.database || '',
        
    },
    parameters:{
        name: 'tasks App',
        port: process.env.PORT || 5000,
        env: process.env.ENVIRONMENT || 'development',
        service: process.env.service || 'toDo-app',
    }
}