import request from 'supertest';
import app from '../be/server.js'; 
import { expect } from 'chai';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import productsModel from '../be/models/productsModel.js';


//Accessory/additional function in order to get correct testImage.png path
//__dirname is not directly available when using ES6 modules, hence import.meta.url used
function getFilePath(relativePath) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return resolve(__dirname, relativePath);
}
//testImage.png path
const testImage = getFilePath('assets/testImage.png');
    
//ADD PRODUCT
describe('productsRouter.js - POST /api/products/add', () => {
    it('should return 200 and add product to db, success:true, message: Product added', async () => {
        
        const response = await request(app)
        .post('/api/products/add')
        .field('name', 'Test Product')
        .field('description', 'Test Description')
        .field('price', '99')
        .field('category', 'Test Category')
        .attach('image', testImage)
        
        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true;
        expect(response.body.message).to.equal('Product added')
    });
});

//REMOVE PRODUCT (removes product added to db in Tests)
describe('productsRouter.js - POST /api/products/remove', () => {
    it('should return 200 and remove product from db, success:true, message: Product removed', async () => {

        const lastProduct = await productsModel.findOne().sort({ _id: -1 }).exec()
        const productId = lastProduct._id

        const response = await request(app)
        .post('/api/products/remove')
        .send({ id: productId })

        expect(response.status).to.equal(200)
        expect(response.body.success).to.be.true;
        expect(response.body.message).to.equal('Product removed');
    });
});


//LIST PRODUCT
describe('productsRouter.js - POST /api/products/product_list', () => {
    it('should return 200, success: true', async () => {
            const response = await request(app)
                .get('/api/products/product_list')
        
            expect(response.status).to.equal(200)
            expect(response.body.success).to.be.true
        });
})

    
    
