import request from 'supertest';
import app from '../be/server.js'; 
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// URL Conversion to dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//ADDING PRODUCTS TO BASKET
describe('basketRouter.js - POST /api/basket/add', () => {
    it('should return 200 and add product to basket, success:true, message:Added to basket', async () => {
        
        //tokenTest used from userRouter.test.js
        const tokenTest = fs.readFileSync(path.join(__dirname, 'tokenTest.txt'), 'utf8')
       
        const response = await request(app)
        .post('/api/basket/add')
        .set('token', `${tokenTest}`)
        //product id taken directly from database (apples)
        .send({
            itemId: "66a6031139c56147f413423e"
        })

        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true
        expect(response.body.message).to.equal('Added to basket') 
    });
});

//REMOVING PRODUCTS FROM BASKET
describe('basketRouter.js - POST /api/basket/remove', () => {
    it('should return 200 and remove product from basket, success:true, message:Added to basket', async () => {

        //tokenTest used from userRouter.test.js
        const tokenTest = fs.readFileSync(path.join(__dirname, 'tokenTest.txt'), 'utf8')

        const response = await request(app)
        .post('/api/basket/remove')
        .set('token', `${tokenTest}`)
        //product id added using above add function
        .send({
            itemId: "66a6031139c56147f413423e"
        })

        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true
        expect(response.body.message).to.equal('Removed from basket') 
    });
});

//FETCHING BASKET DATA
describe('basketRouter.js - POST /api/basket/fetch', () => {
    it('should return 200 and fetch basket products, success:true, message:Added to basket', async () => {
        
        //tokenTest used from userRouter.test.js
        const tokenTest = fs.readFileSync(path.join(__dirname, 'tokenTest.txt'), 'utf8')

        const response = await request(app)
        .post('/api/basket/fetch')
        .set('token', `${tokenTest}`)
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true
    });
});
