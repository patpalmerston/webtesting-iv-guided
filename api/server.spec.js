//this is how you test your endpoints
const request = require('supertest');
const server = require('./server.js');
// when testing node the tests need to test asyncronesly. So the test need to run in order of the  action of the server. So we use async and await to make this happen.
describe('server.js', () => {
  //this test helps make sure we're working in the right testing environment.
  it('should set the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })

   describe('endpoints', () => {
     describe('GET /', () => {

       //test for res.status
       it('should return 200 ok using async/await', async () => {
          const res = await request(server).get('/');
          expect(res.status).toBe(200);
       })

       // test for res.type JSON
       it('should return JSON', async () => {
         const res = await request(server).get('/');
         expect(res.type).toBe('application/json');
       })

       // test for res.body 
       it('should return {api: "up"}', async () => {
         const res = await request(server).get('/');
         expect(res.body).toEqual({api: "up"});
       })
     })
   }) 

});
