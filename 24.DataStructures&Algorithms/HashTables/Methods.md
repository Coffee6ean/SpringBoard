# Common Hash Methods

### Runtime of Hash

- Amount of work to hash key isn’t related to # items in map
- In our implementation: it is related to length of input string
    - So we can call it ***O(k)***, where ***k*** is #-chars-in-string
- Real-world versions often use part of string *(eg first 100 chars)*
    - These then could be ***O(1)***, as length-of-key doesn’t affect worst case
- We’ll assume hash is ***O(1)*** in discussion of runtime for hash tables

### Fast Hashes vs Crypto Hashes
Hash functions for hash tables, prioritize:

- speed (must be fast!)
- wide distribution (spread out values so there are fewer collisions)

For cryptologic hashes, like SHA or Bcrypt, prioritize:

- dfficulty of reversing output

For crypto uses, always use a proven crypto hash, not your own!

### Hash Table

```txt
apple → 7
berry → 4
cherry → 1
```

![3.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabe6ca54-aee2-4bd0-a297-07c18b1fd354%2F3.jpeg?table=block&id=ef2d635c-2424-4c89-a68c-f4f65f9fc73d&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

*Oh no!* Two keys hash same?

```txt
apple → 7
berry → 4
cherry → 1
durian → 4
```

*Solution:* Each *bin* is array of `[key, val]`s

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc69c992c-20fa-42c0-9ccc-e6b11a9a493d%2F4.jpeg?table=block&id=5a30874f-55a7-4abe-b990-b04d092768ed&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

### HashTable *set(key, val)*

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8657fbb5-23a0-4d11-8c21-25c313317fba%2F4.jpeg?table=block&id=96c3c050-c1e3-4c78-9bf7-3b8a9490ee92&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

- Hash key
- If bin is empty: set to `[key, val]`
- Else: add `[key, val]` to end

### HashTable *get(key)*

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4e9d9a5c-c72b-4af6-9059-ccc5c7dc6dbe%2F4.jpeg?table=block&id=367b08c8-b167-4cd5-8ceb-105a9af919d8&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

- Hash key
- If bin is empty: return ***undefined***
- Search array, returning value if found
- If not in array, return ***undefined***
- ***has()***: same idea, returns true/false

### HashTable *keys()*

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdb9c789f-a9cc-456f-acc7-8a7f53bbbda9%2F4.jpeg?table=block&id=21759459-dc0d-47de-9edb-d34fda210b86&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

- Loop over bins
- For each bin, loop over pairs
- ***values()*** and ***entries()*** are same idea

### HashTable *delete(key)*

![4.jpeg](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe5b6e51c-a6f3-4589-93e9-25fcd5c7c6a9%2F4.jpeg?table=block&id=fffdc0ad-0d4e-41ce-bc5b-6fbb4831cc82&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

- Hash key
- If bin is empty: return
- Search array for index of item
- Splice array to remove item
