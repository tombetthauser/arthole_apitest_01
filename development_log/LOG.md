# A Basic Tinder Clone for Artists

## Using Postgres, Sequelize, Express and Pug

### Setting up the Project

  1. created a new empty github repo and cloned it

  2. made this `development_log` directory and `LOG.md` file

  3. ran `$ npm init --y`

  4. ran `$ npm install sequelize@^5.21.6 sequelize-cli@^5.5.1 pg@^8.5.1`

  5. ran `$ npx sequelize-cli init`

  6. updated `config/config.json` development object with:

      ```json

        "development": {
          "username": "arthole-01_app",
          "password": "password",
          "database": "arthole-01_development",
          "host": "127.0.0.1",
          "dialect": "postgres",
          "seederStorage": "sequelize",
          "logging": false,
          "operatorsAliases": false
        },

      ```

  7. updated other parts of `config/config.json` similarly

  8. entered the psql shell with `$ psql`

  9. ran `CREATE USER "arthole-01_app" WITH PASSWORD 'password' CREATEDB;`

  10. exited psql shell with `\q` and ran `$ npx sequelize-cli db:create`

  11. checked that the database was created with postbird application
