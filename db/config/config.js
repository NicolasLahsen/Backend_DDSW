require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": "db",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "db",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "db",
    "dialect": "postgres"
  }
};
