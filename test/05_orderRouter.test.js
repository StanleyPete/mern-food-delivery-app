import request from 'supertest';
import app from '../be/server.js'; 
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// URL Conversion to dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Fetching user orders for frontend
describe('orderRouter.js - POST /api/order/user_orders', () => {
    it('should return 200 and fetch user orders, success:true', async () => {
        
        //tokenTest used from userRouter.test.js
        const tokenTest = fs.readFileSync(path.join(__dirname, 'tokenTest.txt'), 'utf8')

        const response = await request(app)
        .post('/api/order/user_orders')
        .set('token', `${tokenTest}`)
         
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true
    });
});

//Order listing for admin panel
describe('orderRouter.js - POST /api/order/list_orders', () => {
    it('should return 200 and fetch all user orders in admin panel, success:true', async () => {
        
  

        const response = await request(app)
        .get('/api/order/list_orders')

        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true
    });
});