process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testUser;

/* Set-Up */
beforeEach(async() => {
    const result = await db.query(`INSERT INTO users (name, type) VALUES \
        ('Jacob', 'admin') RETURNING id, name, type;`);
    testUser = result.rows[0];
});

afterEach(async() => {
    await db.query(`DELETE FROM users`);
});

afterAll(async() => {
    await db.end();
});

/* Tests */
describe('GET /users', () => {
    test('Get a list with one user', async() => {
        const res = await request(app).get('/users');
        //console.log(res.statusCode, res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({users: [testUser]});
    });
});

describe('GET /users/:id', () => {
    test('Get single user', async() => {
        const res = await request(app).get(`/users/${testUser.id}`);
        //console.log(res.statusCode, res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({user: testUser});
    });

    test('Responds with 404 for invalid id', async() => {
        const res = await request(app).get(`/users/${testUser.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({user: testUser});
    });
});

describe('POST /users', () => {
    test('Create a single user', async() => {
        const res = await request(app).post('/users').send({name: 'Alice', type: 'staff'});
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            user: {id: expect.any(Number), name: 'Alice', type: 'staff'}
        });
    });
});

describe('PATCH /users/:id', () => {
    test('Update a single user', async() => {
        const res = await request(app).patch(`/users/${testUser.id}`).send({name: 'Jacob', type: 'user'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            user: {id: testUser.id, name: 'Jacob', type: 'user'}
        });
    });
    
    test('Responds with 404 for invalid update', async() => {
        const res = await request(app).patch(`/users/0`).send({name: 'Jacob', type: 'user'});
        expect(res.statusCode).toBe(404);
    });
});

describe('DELETE /users/:id', () => {
    test('DELETE a single user', async() => {
        const res = await request(app).delete(`/users/${testUser.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({msg: 'DELETED'});
    });
});
