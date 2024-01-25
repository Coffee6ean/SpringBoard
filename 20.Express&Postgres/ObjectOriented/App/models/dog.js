const db = require('../db');
const ExpressError = require('../expressError');

class Dog {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.species = 'Dog';
    }

    /* Class Methods */
    static async getAll() {
        const result = await db.query(`SELECT id, name, age FROM dogs`);
        const dogs = result.rows.map(r => new Dog(r.id, r.name, r.age));
        return result.rows;
    }

    static async getById(id) {
        const result = await db.query(
            `SELECT id, name, age FROM dogs WHERE id=$1`, [id]
        );
        const dog = result.rows[0];
        if(!dog) {
            throw new ExpressError('Dog not found', 404);
        }
        return new Dog(dog.id, dog.name, dog.age);
    }

    static async create(newName, newAge) {
        const result = await db.query(
            `INSERT INTO dogs (name, age) VALUES
            ($1, $2) RETURNING id, name, age`, [newName, newAge]
        );
        const {id, name, age} = result.rows[0];
        return new Dog(id, name, age);
    }

    /* Instance Methods */
    async remove() {
        await db.query(
            `DELETE FROM dogs WHERE id=$1`, [this.id]
        );
        return this.name;
    }

    async save() {
        await db.query(
            `UPDATE dogs SET name=$1, age=$2
            WHERE id=$3`, [this.name, this.age, this.id]);
    }

    speak() {
        console.log(`${this.name}: Woof!!`);
    }
}

module.exports = Dog;
