#### Install NPM packages

Run command in terminal:

```

npm init -y
npm install

```

#### Database Credentials

Modify .env file accordingly:

```
DB_NAME=<database_name>
DB_USER=<username>
DB_PASSWORD=<password>
DB_HOST=<host>
```

#### Initialization

Initialize app and database:

```
npm run start
```

If database is empty, stop server and populate stock by running command:

```
node src/populateStock.js
```

Then, restart server.

#### Website

Website App link should be [http://localhost:3000/](http://localhost:3000/)
