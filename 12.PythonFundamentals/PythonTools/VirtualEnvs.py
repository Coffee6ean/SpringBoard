# Virtual Environments -
# Normally, 'pip' makes the installed library available everywhere
# 
# This is convenient, but a little messy:
# 
# - you might not need it for every project
# - you might want to more explicitly keep track of which libraries a 
#   project needs
# - you might want a new version of a library for one project, but not 
#   another
# 
# Python can help us by using a “virtual environment”

# Creating a Virtual Environment:
# (Using 'venv' module, make a folder, 'venv', with all the needed stuff)
"""
$ cd my-project-directory
$ python3 -m venv venv
"""

# Using the Virtual Environment:
"""
$ source venv/bin/activate
(venv) $   <-- notice shell prompt!
"""

# What does it mean to be “using” a virtual environment?
# - It makes certain ***python*** is the version of Python used to create the venv
# - You have access to the standard library of Python
# - You **don’t** have access to globally installed pip stuff
# - You get to explicitly install what you want — and it will be only for here!

# Installing into Virtual Environment:
# - Use 'pip install' , as usual
#     - But now it’s downloaded & installed into that 'venv' folder
#     - It won’t be available/confuse global Python or other venvs — tidy!
"""
from faker import Faker
fake = Faker()

for x in range(10):
    print(fake.name())

fake.address()
"""

# Tracking Required Libraries:
# To see a list of installed libraries in a venv:
"""
$ pip3 freeze
... list of installed things...
"""
# It’s helpful to save this info in a file (typically named 
# “requirements.txt”):
"""
$ pip3 freeze > requirements.txt
"""

# Leaving Virtual Environments:
# Use the 'deactivate' shell command to leave the virtual environment