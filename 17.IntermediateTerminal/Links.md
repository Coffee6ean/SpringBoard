# Links - 

Since we have files and folders located all over our file system, it becomes 
difficult to identify where many of these are located. Fortunately, we can 
create a link (also known as an alias) to a file or folder using the ***ln*** 
command. The structure looks like this:
```bash
ln path_to_link name_of_link
```

### This is what a small sample case looks like
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls
Links.md
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ mkdir project1
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ mkdir project2
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls
Links.md  project1  project2
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ touch settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ echo "setting-1: blah blah" >> settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cat settings.txt 
setting-1: blah blah
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cd project1
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ls
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ln ../settings.txt settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ ls
settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cat settings.txt 
setting-1: blah blah
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project1$ cd ..
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls
Links.md  project1  project2  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cd project2
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project2$ ln ../settings.txt settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project2$ ls
settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project2$ cat settings.txt 
setting-1: blah blah
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal/project2$ cd ..
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ ls
Links.md  project1  project2  settings.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ echo "another setting: blah blah" >> settings.txt 
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cat settings.txt 
setting-1: blah blah
another setting: blah blah
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cat project1/settings.txt 
setting-1: blah blah
another setting: blah blah
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ cat project2/settings.txt 
setting-1: blah blah
another setting: blah blah
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ 
```
Now any update/modification made to the original *settings.txt* file will also be reflected
in the other files since they are linked - we established a referance point.

To consult what the ***ln*** command does you can look it up in the manual, like so:
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard$ man ln
```
