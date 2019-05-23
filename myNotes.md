1. create empty .env file in the root

2.for server side testing only change how just runs, default is browswer mode. Change it in package.json to:
"jest" : {
  "testEnvironment": "node
}

// cross-env is something that jess uses for jest to work with operating system and the env server. this is what test should look like

"test": "cross-env DB_ENV=testing jest --watch --verbose"

dbConfig fill allows the .env to get ignored and only upload the "development'

3. to create a test data base make sure the knexfile.js has the appropriate info and (reference testing section of knexfile.js)

npx knex migrate:latest --env=testing

//this will tell the knex program to create a test data base.

//we split the index.js and server.js so they can run on different servers and not crash. we already do this.

.4 yarn add supertest --dev


(server.js file) - check to make sure server pathways work and return the correct or incorrect number 200 or 500

.5 time to test the server and require supertest
    test the server is running (server.js)
    test the get end points (server.js)
    //check the server file for reference

.6 moving on to the models file and work the models.spec file
    a.firs we write the test for insert()
    b.now we write the model function

7. add truncate to a function to top of describe block to keep from running duplicates