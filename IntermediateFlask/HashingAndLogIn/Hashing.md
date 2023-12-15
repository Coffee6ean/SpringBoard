# Hashing -

### Define Hashing
Hashing performs a one-way transformation on a password.

![alt text][pic]

“One-way” means it is virtually impossible to reverse.

### A Basic Hash
“One-way encryption”

_demo/badhash.py_
```py
def awful_hash(phrase):
    """Truly terrible hash:
        simply shifts each letter (a->b, etc).

        >>> awful_hash('yay')
        'zbz'
    """

    return ''.join(next_char(c) for c in phrase)
```
But is that really one-way?

### One-Way Encryption
_demo/badhash.py_
```py
def slightly_better_hash(phrase):
    """Better hash: returns every other letter, shifted, max 4.

        >>> slightly_better_hash('penguin1')
        'qovo'

    Since this is "lossy", multiple inputs return same output:

        >>> slightly_better_hash('penguin1~pretzel7')
        'qovo'

        >>> slightly_better_hash('p?nguinZ')
        'qovo'
    """

    return ''.join(next_char(c) for c in phrase[0:8:2])
```
- Now is one-way (non-reversible)
- Same input always equal same output

Python has this kind of hash built-in:
```py
>>> hash('penguin1')
6678229702981429425
```

(Python’s built in ***hash*** seeds itself randomly on startup, so the same input only returns the same output for any individual Python process. As such, it’s not suitable for storing in a database, even if it were designed to be cryptographically secure.)

### Salt
**Salt**: a random string introduced before hashing.

| password | salt  | hashed result |
| -------- |:-----:|--------------:|
| penguin1 | xab17 | qovoyc8|xab17 |
| penguin1 | meeps | qovonft|meeps |

Salt is usually concatenated to the password, then hashed.

*demo/badhash.py*
```py
def salting_hash(phrase, salt=None):
    """Adds random salt; returns "salt|hash(phrase+salt)

        >>> salting_hash('hey', salt='abc')
        'izbd|abc'

        >>> salting_hash('hey', salt='def')
        'izeg|def'
    """

    if salt is None:
        salt = str(randint(1000, 9999))

    hashed = slightly_better_hash(f"{phrase}|{salt}")
    return f"{hashed}|{salt}"
```

### Cryptographic Hash
- Non-reversible
- Change in input changes output unpredictably

| password | salt  | hashed result     |
| -------- |:-----:|------------------:|
| penguin1 | xab17 | dsfdsfj33gw|xab17 |
| penguin2 | xab17 | ewruoi3kl1z|xab17 |
| penguin2 | meeps | kj34kjkf28z|meeps |

The same password will generate a different hash with a different salt.

<aside>
💡 **Note**: You may have noticed that the salt is clearly visible in the hashed result.

This is totally fine; the application needs the salt value in order to compare passwords properly. Even if an attacker gained access to the database and saw all the salts, they would still have to reverse the hashing algorithms to get the original password, which is extremely difficult and slow.

You can read more about [storing salts](https://security.stackexchange.com/questions/17421/how-to-store-salt).
</aside>

### Popular Algorithms
**Cryptographic Hashes:**
- MD5
- SHA *(family)*

(Fast, non-reversible, output very different)

**Password Hashes**:
- Argon2
- Bcrypt
- Scrypt

(Same but slow and hard to optimize)

### Bcrypt
```py
>>> import bcrypt   # pip install bcrypt

>>> salt = bcrypt.gensalt()
>>> salt
b'$2b$12$uYNRTDE7RrMvwDcF9f1Yyu'

>>> bcrypt.hashpw(b'secret', salt)
b'$2b$12$uYNRTDE7RrMvwDcF9f1Yyuvuu48PzANrWy88Iz3z1tRTfdXi6DlNW'
```

### Work Factor
- Bcrypt algorithm is designed to be slow
    - But computers get faster all the time!
- So, you can specify how many rounds of encryption it should use
    - And, over time, increase this “work factor” of work

```py
>>> salt = bcrypt.gensalt(rounds=14)  # default (in 2018) is 12
```

This is encoded in the result:
```py
b'$2b$12$3cy0jD1AfgcT0ipGL1UhquBZXvAxUwRrdG90Gi951AcxIXm2F2gMK'
```

Prefix: `2b (identifies as Bcrypt algorithm)`
Work Factor: `12 rounds`
Salt: `3cy0jD1AfgcT0ipGL1Uhqu`
Hash: `BZXvAxUwRrdG90Gi951AcxIXm2F2gMK`


[pic]: https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1255ae5-4d17-4e9d-8f7f-93782e55371b%2Fhash-flow.png?table=block&id=e90222d3-c35b-42b6-abd7-5048ca1d3581&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1910&userId=&cache=v2 "Hashing Algorithm"