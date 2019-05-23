1. create empty .env file in the root

2.for server side testing only change how just runs, default is browswer mode. Change it in package.json to:
"jest" : {
  "testEnvironment": "node
}

// cross-env is something that jess uses for jest to work with operating system and the env server. this is what test should look like

"test": "cross-env DB_ENV=testing jest --watch --verbose"

dbConfig fill allows the .env to get ignored and only upload the "development'

3. to create a test data base make sure the knexfile.js has the appropriate info and 

npx knex migrate:latest --env=testing

//this will tell the knex program to create a test data base.
