# Maps / HashTables - 

## Maps:

**Abstract Data Type** for mapping *key* → *value*

```js
let petsToAges = {
  "Whiskey": 6,
  "Fluffy": 2,
  "Dr. Slitherscale": 2
}
```

- Javascript: ***Map*** or ***{}***
- Python: ***dict***
- Ruby: ***Hash***
- Java: ***HashMap***
- Go: ***map***

### Typical API
- ***set(key, val)***: Sets ***key*** to ***val***
- ***get(key)***: Retrieve values for ***key***
- ***delete(key)***: Delete entry for ***key***
- ***has(key)***: Is there an entry for ***key***?
- ***keys()***: Iterable of keys
- ***values()***: Iterable of values
- ***entries()***: Iterable of key/value pairs

### Simple Implementation

```js
class SimpleMap {
  constructor() { this._items = []; }

  set(k, v) { this._items.push([k, v]); }

  get(k) {
    let kv = this._items.find(kv => k === kv[0]);
    return kv ? kv[1] : undefined;
  }

  has(k) {
    return this._items.find(kv => k === kv[0]) !== undefined;
  }

  delete(k) {
    let i = this._items.findIndex(kv => k === kv[0]);
    if (i !== -1)  this._items.splice(i, 1);
  }

  keys()    { return this._items.map(kv => kv[0]); }
  values()  { return this._items.map(kv => kv[1]); }
  entries() { return this._items; }
}
```

Runtime for our simple implementation:

| Operation | Runtime |
| --------- | ------- |
| set       | O(1)    |
| get       | O(n)    |
| has       | O(n)    |
| delete    | O(n)    |
| keys      | O(n)    |
| values    | O(n)    |
| entries   | O(n)    |

We can do better with a different implementation! ***Hash Tables***.
