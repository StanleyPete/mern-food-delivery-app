process.env.JWT_SECRET = 'test_secret_key'
import request from 'supertest';
import app from '../be/server.js'; 
import { expect } from 'chai';




//USER SIGNUP
describe('userRouter.js - POST /api/user/signup', () => {
    it('should return 200 and create new user in db, success:true', async () => {
        
        const response = await request(app)
        .post('/api/user/signup')
        .send({ 
            name: "testName",
            email: "testname@test.pl",
            password: "testpassword"
         })
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true
    });
});

//USER SIGNUP - user already exists scenario
describe('userRouter.js - POST /api/user/signup - user already exists scenario', () => {
    it('should return 200, success:false, message:User already exists', async () => {
        
        const response = await request(app)
        .post('/api/user/signup')
        .send({ 
            name: "testName",
            email: "testname@test.pl",
            password: "testpassword"
         })
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.false
        expect(response.body.message).to.equal('User already exsists') 
    });
});

//USER SIGNUP - invalid password scenario
describe('userRouter.js - POST /api/user/signup - invalid password scenario', () => {
    it('should return 200, success:false, message:Password must include 8 characters', async () => {
        
        const response = await request(app)
        .post('/api/user/signup')
        .send({ 
            name: "testName",
            email: "testname2@test.pl",
            password: "test"
         })
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.false
        expect(response.body.message).to.equal('Password must include 8 characters') 
    });
});

//USER SIGNUP - invalid email address
describe('userRouter.js - POST /api/user/signup - invalid email address scenario', () => {
    it('should return 200, success:false, message:Please enter valid e-mail address', async () => {
        
        const response = await request(app)
        .post('/api/user/signup')
        .send({ 
            name: "testName",
            email: "testname2test.pl",
            password: "testpassword"
         })
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.false
        expect(response.body.message).to.equal('Please enter valid e-mail address') 
    });
});

//USER LOG IN
describe('userRouter.js - POST /api/user/login', () => {
    it('should return 200, success:true', async () => {
        
        const response = await request(app)
        .post('/api/user/login')
        .send({ 
            email: "test@test.pl",
            password: "123456789"
         })
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true
    });
});

//USER LOG IN - user does not exists scenario
describe('userRouter.js - POST /api/user/login - user does not exists scenario', () => {
    it('should return 200, success:false, message:User does not exist', async () => {
        
        const response = await request(app)
        .post('/api/user/login')
        .send({ 
            email: "notexists@notexists.pl",
            password: "123456789"
         })
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.false
        expect(response.body.message).to.equal('User does not exist')
    });
});

//USER LOG IN - incorrect password
describe('userRouter.js - POST /api/user/login - incorrect password scenario', () => {
    it('should return 200, success:false, message:Incorrect password', async () => {
        
        const response = await request(app)
        .post('/api/user/login')
        .send({ 
            email: "test@test.pl",
            password: "123456"
         })
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.false
        expect(response.body.message).to.equal('Incorrect password')
    });
});
