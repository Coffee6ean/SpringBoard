// First Hash Table function
// Basic Hash function -> slows down the larger (per char) the key is
function hash(key) {
    return Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(), 0
    )
}

// Modular Hash function -> Faster than the basic hash function
function modHash(key, arrayLen) {
    let hash =  Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(), 0
    )

    return hash % arrayLen;
}

// Prime Hash function -> Apply 'Horner's Method' to make order meaningful
function primeHash(key, array_len) {
    // Prime number to use with Horner's method
    const H_PRIME = 37;

    let numKey = Array.from(key).reduce(
        (accum, char) => accum * H_PRIME + char.charCodeAt(), 0
    );

    return numKey % array_len;
}

class HashMap {
    constructor() {
        this._items = [];
    }

    //Class Functions
    set(k, v) {
        //const hashedK = hash(k);
        //const hashedK = modHash(k, 10);
        const hashedK = primeHash(k, 10);
        this._items[hashedK] = v;
    }

    get(k) {
        //const hashedK = hash(k);
        //const hashedK = modHash(k, 10);
        const hashedK = primeHash(k, 10);
        return this._items[hashedK];
    }
}
