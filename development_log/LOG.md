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

### Building and Seeding the Database Tables

  1. built out visual schema at `https://drawsql.app/app-academy-22/diagrams/arthole`

  2. brainstormed order of dependency for migrations and seeds
    - First `Users` `Hashtags` `Schools` `Materials` since they have no foreign keys
    - Then `Artworks`
    - Then `Degrees` and `ArtworkMaterials` `ArtworkHashtags`
    - Then `UserDegrees` `UserArtworkSwipes` `Messages` `Links` and `UserPreferences`

  3. typed out and ran model and migration starters

      ```bash

        $ npx sequelize-cli model:generate --name User --attributes email:string,firstName:string,middleName:string,lastName:string,birthDate:date,city:string,state:string,country:string,statement:text,accountType:string,isAccountPrivate:boolean,passwordHash:string

        $ npx sequelize-cli model:generate --name \
            User --attributes \
              email:string,\
              firstName:string,\
              middleName:string,\
              lastName:string,\
              birthDate:date,\
              city:string,\
              state:string,\
              country:string,\
              statement:text,\
              accountType:string,\
              isAccountPrivate:boolean,\
              passwordHash:string

        $ npx sequelize-cli model:generate --name Artwork --attributes artistId:integer,imageUrl:string,title:string,height:float,width:float,depth:float,measurementUnit:string,seconds:integer,year:integer

        $ npx sequelize-cli model:generate --name \
            School --attributes \
              schoolName:string,\
              department:string,\
              city:string,\
              state:string,\
              country:string,\
              usNewsRank:integer

        $ npx sequelize-cli model:generate --name \
            Material --attributes \
              name:string

        $ npx sequelize-cli model:generate --name \
            Hashtag --attributes \
              tagName:string




        $ npx sequelize-cli model:generate --name \
            ArtworkHashtag --attributes \
              hashtagId:integer,\
              artworkId:integer

        $ npx sequelize-cli model:generate --name \
            Degree --attributes \
              title:string,\
              concentration:string,\
              year:string,\
              schoolId:integer

        $ npx sequelize-cli model:generate --name \
            ArtworkMaterial --attributes \
              materialId:integer,\
              artworkId:integer




        $ npx sequelize-cli model:generate --name \
            ArtworkMaterial --attributes \
              materialId:integer,\
              artworkId:integer

        $ npx sequelize-cli model:generate --name \
            UserArtworkSwipe --attributes \
              isPositive:boolean,\
              artworkId:integer,\
              userId:integer

        $ npx sequelize-cli model:generate --name \
            Message --attributes \
              text:text,\
              senderId:integer,\
              recipientId:integer

        $ npx sequelize-cli model:generate --name \
            Link --attributes \
              orderPlacement:integer,\
              linkText:string,\
              linkUrl:string,\
              userId:string

        $ npx sequelize-cli model:generate --name \
            UserPreference --attributes \
              preferenceKey:string,\
              preferenceValue:string

      ```
  
  4. create seeds in the right order
    - `npx sequelize-cli seed:generate --name demo-users`
    - `npx sequelize-cli seed:generate --name demo-artworks`

  5. run seeds and check in postbird, test undo and check in postbird also
    - `npx sequelize-cli db:seed:all`
    - `npx sequelize-cli db:seed:undo:all`

  6. reset all ids in all tables for foreign keys in seeds by dropping and recreating everything
    - `npx sequelize-cli db:drop`
    - `npx sequelize-cli db:create`
    - `npx sequelize-cli db:migrate`
    - `npx sequelize-cli db:seed:all`
