# Javascript Types - 

### Map
- Built-in type for mapping
- Keys can be any type
    - Retrieval uses ***===*** to match
- Keeps keys in order of insertion
- Amortized ***O(1)*** for set/get/delete

```js
let fruits = new Map(
  [["apple", "red"],["berry", "blue"]])

fruits.set("cherry", "red")

// some methods return map, so can chain
fruits.set("cherry", "red")
      .set("durian", "yellow")
      .delete("apple")

let berry_color = fruits.get("berry")
```

### Object
- Generic object; can use for mapping
- Prior to ***Map*** (2015), was only way!
- Keys can only be strings or numbers
    - Numbers stringified: ***1*** → ***“1”***
- Keeps keys in order of insertion
- Amortized ***O(1)*** for set/get/delete
- Better to use ***Map*** for mapping

```js
let fruits = {"apple": "red",
              "berry": "blue"}

fruits.cherry = "red"
fruits["durian"] = "yellow"

let berry_color = fruits.berry
let cherry_color = fruits["cherry"]
```

Keys can be a few other less common things, such as Javascript “Symbol” types, though these are uncommon for use in mapping (this is more common when making special methods for OO). The ordering of keys can also at times be a bit complex when you have different types of keys.

### Set
- Built-in type for sets
- Keys can be any type
    - Retrieval uses ***===*** to match
- Keeps keys in order of insertion
- Amortized ***O(1)*** for set/get/delete

```js
let fruits = new Set(["apple", "berry"])

fruits.add("cherry")
fruits.has("apple")  // true
```

## Python Types

### Dictionary
- Built-in type for mapping
- Keys can be any *immutable* type
- Keeps keys in order of insertion *(Python > 3.6)*
- Amortized ***O(1)*** for set/get/delete

```py
fruits = {"apple": "red", "berry": "blue"}

also_can = dict(apple="red", berry="blue")

fruits["cherry"] = "red"

fruits["berry"]      # error if not there
fruits.get("cherry") # or None

# dict comprehension
{x: x * 2 for x in numbers if x > 5}
```

### Set
- Built-in type for sets
- Keys can be any *immutable* type
- Key order not guaranteed
- Amortized ***O(1)*** for set/get/delete
- Has awesome built-in set operations
    - Union, intersection, symmetric difference, subtraction
    - For JS, can get these with awesome ***lodash*** library

```py
moods = {"happy", "sad", "grumpy"}

dwarfs = set(["happy", "doc", "grumpy"])

# union, intersection, and symmetric diff:
moods | dwarfs  # {happy, sad, grumpy, doc}
moods & dwarfs  # {happy, grumpy}
moods ^ dwarfs  # {sad, doc}

# subtraction
moods - dwarfs  # {sad}
dwarfs - moods  # {doc}

# set comprehension
{n for n in some_list if n > 10}
```

### Frozenset
- Same as ***set()***, but immutable
    - Useful to use as a key in a ***dict***
- Same runtime, same API, same set functions

```py
moods = frozenset(["happy", "sad", "grumpy"])

dwarfs = frozenset(["happy", "doc", "grumpy"])

# union, intersection, and symmetric diff:
moods | dwarfs  # {happy, sad, grumpy, doc}
moods & dwarfs  # {happy, grumpy}
moods ^ dwarfs  # {sad, doc}

# subtraction
moods - dwarfs  # {sad}
dwarfs - moods  # {doc}
```

## **Learning More**

- Awesome writeups from Base CS:
    - [Taking Hash Tables Off the Shelf](https://medium.com/basecs/taking-hash-tables-off-the-shelf-139cbf4752f0)
    - [Hashing Out Hash Functions](https://medium.com/basecs/hashing-out-hash-functions-ea5dd8beb4dd)
- [Python’s method for ordered dictionaries](https://morepypy.blogspot.jp/2015/01/faster-more-memory-efficient-and-more.html)
- Perfect hash tables
    - If you know your keys in advance, you can have a hash table without chains *or* open addressing (just simple bins)
    - There are algorithms that can discover a “perfect hash function” for your keys that produce a unique hash for each key
    - Useful for small, fast, simple lookup tables than don’t change
