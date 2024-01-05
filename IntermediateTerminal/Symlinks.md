# Symbolic Links -

To create a symbolic link, we use the ***-s*** flag when creating a link.

The major difference in a **symbolic link** is that this command will not
create a new copy of a reference file, it does not duplicate it.
So if the original file is a 10 GB file, we are not going to end with another
10 GB file stored somewhere else.

Instead, a ***symlink*** creates a 'pointer' or a 'symbolic link' to that file.
So when you're using tht symlinked file, it will lokk and feel and act like the original - 
but if you delete the original file, then or symlinks are going to disappear.

### This is what a small sample case looks like
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ touch colors.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ echo "red, orange, yellow" >> colors.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cat colors.txt 
red, orange, yellow
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cd project1
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ls
settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ln -s ../colors.txt colors.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ls
colors.txt  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cat colors.txt 
red, orange, yellow
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cd ..
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ echo ", green, blue" >> colors.txt 
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cat colors.txt 
red, orange, yellow
, green, blue
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cat project1/colors.txt 
red, orange, yellow
, green, blue
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ rm colors.txt 
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cd project1
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ls
colors.txt  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cat colors.txt 
cat: colors.txt: No such file or directory
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cd ..
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ 
```

List all files (hidden or not) with details:
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cd project1
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ls -la
total 12
drwxr-xr-x 2 coffee_6ean coffee_6ean 4096 Jan  4 16:17 .
drwxr-xr-x 4 coffee_6ean coffee_6ean 4096 Jan  4 16:19 ..
lrwxrwxrwx 1 coffee_6ean coffee_6ean   13 Jan  4 16:17 colors.txt -> ../colors.txt
-rw-r--r-- 3 coffee_6ean coffee_6ean   48 Jan  4 15:33 settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ls
colors.txt  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ rm colors.txt 
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cd ..
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ 
```

Symlink set up for a directory:
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ln project1 project3
ln: project1: hard link not allowed for directory
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ln -s project1 project3
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls
HardLinks.md  Links.md  Symlinks.md  project1  project2  project3  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls project3
settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls project1
settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cd project1
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ touch happy.py
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ touch apple.js
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cd ..
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls
HardLinks.md  Links.md  Symlinks.md  project1  project2  project3  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls project1
apple.js  happy.py  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls project3
apple.js  happy.py  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ 
```
