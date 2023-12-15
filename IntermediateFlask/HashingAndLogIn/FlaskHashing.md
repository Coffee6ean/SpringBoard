# Flask Password Hashing -

### **Flask-Bcrypt**

A nicer API for Bcrypt:

```python
>>> from flask_bcrypt import Bcrypt

>>> bcrypt = Bcrypt()

>>> hash = bcrypt.generate_password_hash("secret")
>>> hash
b'$2b$12$s.tjeALK2I7rfI2gV27me.mkZu5IQd1Y1EBAXsbTvNExIEQcID/te'

>>> bcrypt.check_password_hash(hash, "secret")
True
```

## Class Methods:
It’s good to move logic out of views.
Let’s make convenient class methods for registering & validating

### Registering
_demo/goodpassword/models.py_
```py
class User(db.Model): # ...
    @classmethod
    def register(cls, username, pwd):
        """Register user w/hashed password & return user."""

        hashed = bcrypt.generate_password_hash(pwd)
        # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")

        # return instance of user w/username and hashed pwd
        return cls(username=username, password=hashed_utf8)
```

### Authenticating
_demo/goodpassword/models.py_
```py
class User(db.Model): # ...
    @classmethod
    def authenticate(cls, username, pwd):
        """Validate that user exists & password is correct.

        Return user if valid; else return False.
        """

        u = User.query.filter_by(username=username).first()

        if u and bcrypt.check_password_hash(u.password, pwd):
            # return user instance
            return u
        else:
            return False
```

### Using Class Methods
```py
>>> roger = User.register("roger", "cupcakes")
>>> db.session.add(roger)
>>> db.session.commit()
​
>>> User.authenticate("roger", "cupcakes")
<User 3>
```

## Checking Our Database:
**`SELECT** * **FROM** users;`

| username | password                                                     |
| ---------|:------------------------------------------------------------:|
| rita     | $2b$12$KD6YjzB6jyDUYxS3E/QDMeaLosFsnG/G6UVv6Ls3rWolypPXmU4LO |
| roger    | $2b$12$/GIp9nJDuoEinr4b1lbUKOXKfTANlABT47jJhFDX.jIhHft9taePi |

Encrypted! 🎉
