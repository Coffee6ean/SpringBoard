# Development Mode
# Better to run Flask in “development mode”:
# - Much better error messages
# - Automatically re-loads server when code changes on disk
# 
# Both of these are very helpful when developing–and very bad for working 
# on a live, production server.
from flask import Flask
app = Flask(__name__)

# Run Development Mode:
"(venv) $ FLASK_ENV=development flask run"

# Setting Environmental Variables:
# Can set 'FLASK_DEV'  once per terminal session:
"(venv) $ export FLASK_ENV=development"