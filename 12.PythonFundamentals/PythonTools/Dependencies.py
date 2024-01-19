# Using Virtual Environments -
# - Virtual environments are large & full of stuff you didn’t write yourself
# - You **don’t want this to get into git / Github**
# - So, add `venv/` to your project’s ***.gitignore***
#     - Use ***git status*** to make sure it’s being ignored

# Recreating a Virtual Environment:
"""
$ git clone http://path-to-project
$ cd that-project
$ python3 -m venv venv
"""

# Then, as usual when working with a venv:
"""
$ source venv/bin/activate
(venv) $ pip3 install -r requirements.txt
... pip output here ...
"""