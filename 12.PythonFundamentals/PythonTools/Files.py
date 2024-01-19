# Files -
# You can open an on-disk file with 'open(filepath, mode)'
# - 'filepath': absolute or relative path to file
# - 'mode': string of how to open file (eg, “r” for reading or “w” for 
#    writing)
# 
# This returns an file-type instance.

# Reading/ Line by line:
file = open("/my/file.txt", "r")
for line in file:
    print("line =", line)

file.seek(0)

# Reading/ All at once:
file = open("/my/file.txt", "r")
text = file.read()
file.close()

# Writing
file = open("/my/file.txt", "w")
file.write("This is a new line.")
file.write("So is this.")
file.close()

# Append
file = open("/my/file.txt", "a")
file.write('Hello World')
file.close()