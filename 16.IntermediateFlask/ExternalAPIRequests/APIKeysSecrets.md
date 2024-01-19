# API Keys/Secrets - 

Many APIs require “keys” and “secrets” (similar to a “username” and “password”)

**Why Do They Need API Keys?**
- The API provides access to confidential data or sensitive methods
    - Only you should be able to send tweets from your Twitter account
- The API costs money to use
    - They need to know who to charge
- They want to limit abuse
    - Google Maps is free, but they want to keep you to from abusing it

**Where Do You Get API Keys?**
Typically: you register on their site. The process is different for every site.

Example: [YouTube API Key](https://console.developers.google.com/apis/credentials/)

**How Do You Use API Keys?**
It varies by different APIs
For example, if this API needed a secret key sent with requests, they might expect as a URL parameter:

```python
requests.get("http://some-api.com/search",
    params={"key": "dhf489tuhdfhdskfsdfsd34tg",
            "isbn": "4675436632"})
```

Or, they might need complex encoding — varies by API. Read the API docs

## Keeping Your Secrets:
What’s the potential problem?
_app.py_
```python
from flask import Flask

API_SECRET_KEY = "jdfghfkgdg9345dkjfgdfg"

app = Flask(__name__)
...
```

You’ll want to store this file in Git — and probably GitHub.You don’t want the world to learn your API key
Strategy: store the key info in a small, separate file

Import *that* file into your ***app.py*** and don’t check that file into Git

### Example
_secrets.py_
```python
API_SECRET_KEY = "jdfghfkgdg9345dkjfgdfg"
```

_app.py_
```python
from flask import Flask
from secrets import API_SECRET_KEY

app = Flask(__name__)
...
```

_.gitignore_
```
secrets.py
```

Make sure it never gets into your Git
```bash
$ git status
# Should NOT show up here at all

$ git add .

$ git status
# Should NOT show up here at all

$ git commit ...
```