# Grep Recursive - 

```bash
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/AuthenticationDemo$ grep -i 'bcrypt' models.py 
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()
        hashed = bcrypt.generate_password_hash(pwd)
        if u and bcrypt.check_password_hash(u.password, pwd):
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/AuthenticationDemo$ 
```

Examples on recursive grep search:
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/AuthenticationDemo$ grep -ir 'bcrypt' . 
grep: ./__pycache__/models.cpython-310.pyc: binary file matches
./models.py:from flask_bcrypt import Bcrypt
./models.py:bcrypt = Bcrypt()
./models.py:        hashed = bcrypt.generate_password_hash(pwd)
./models.py:        if u and bcrypt.check_password_hash(u.password, pwd):
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/AuthenticationDemo$ 
```

```bash
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/AuthenticationDemo$ grep -iwr 'model' .
grep: ./__pycache__/models.cpython-310.pyc: binary file matches
./models.py:class Tweet(db.Model):
./models.py:class User(db.Model):
./models.py:    """User Model."""
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/AuthenticationDemo$ 
```
