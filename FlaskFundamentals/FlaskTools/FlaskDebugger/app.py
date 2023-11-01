# Flask Debugging - 
# Strategies:
# - as always  *(appears in terminal) **print()***
# - Flask Debug Toolbar
# - Get an error? You can debug on the error page!

# Debugging Errors:
# Click the black “Terminal” symbol in a traceback. You’ll need to enter
# “PIN code” (printed out to terminal at start).
# That will give you a Python interpreter right there. You can examine 
# variables, try out code, etc.

# Python Debugger:
# Python includes a built-in debugger, 'pdb'. To add a breakpoint to 
# your code:
def my_function():
    ...

    import pdb
    pdb.set_trace()

    ...

# When you hit that set_trace(), Python will stop so you can debug this.