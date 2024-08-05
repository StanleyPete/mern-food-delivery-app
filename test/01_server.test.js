import request from 'supertest';
import app from '../be/server.js'; 
import { expect } from 'chai';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';


describe('Server running', () => {

    describe('server.js - GET /', () => {
        it('should return 200 with message: Working', async () => {
            const response = await request(app)
            .get('/')
            .expect(200)
            expect(response.text).to.equal('Working')
        });
    });
    
}) 

