# About Python, Redux -

**Python Is …**
- high-level: you think at a relatively high-level
- dynamic: running script can create its own functions/classes
- dynamically-typed: same variable can be used for int/string/etc
- strongly-typed: “a” + 3 doesn’t eval to “a3”
- compiled

### Python Is Compiled
```py
def add(x, y, double=False):
    # do the addingresult = x + y
    return result * 2 if double else result
```

gets “compiled” into “bytecode”:
```py
4           0 LOAD_FAST                0 (x)
            2 LOAD_FAST                1 (y)
            4 BINARY_ADD
            6 STORE_FAST               3 (result)

6           8 LOAD_FAST                2 (double)
           10 POP_JUMP_IF_FALSE       20
           12 LOAD_FAST                3 (result)
           14 LOAD_CONST               1 (2)
           16 BINARY_MULTIPLY
           18 RETURN_VALUE
      >>   20 LOAD_FAST                3 (result)
           22 RETURN_VALUE
```

You don’t do this compilation separately.
It happens when you first run/import Python file.
Previously-compiled version is stored in ***__pycache__/add.pyc***
You don’t need those file in Git — they get created when needed

### Python Can Have Type Hints
```py
def add(x: int, y: int) -> int:
    """Add x and y and return results."""
    return num1 + num2
```
- Editors can use this to help find errors
- Can produce prettier help/API documentation