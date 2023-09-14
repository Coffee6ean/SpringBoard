// --- Part 1 --- //
/*
 * 1. make a directory called first
 * 2. change directory to the first folder
 * 3. create a file called person.txt
 * 4. change the name of person.txt to another.txt
 * 5. make a copy of the another.txt file and call it copy.txt
 * 6. remove the copy.txt file
 * 7. make a copy of the first folder and call it second
 * 8. delete the second folder
 */

coffee_6ean@DESKTOP-U6K7BVH:~$ ls
CSS  HTML  Images  Java  JavaScript
coffee_6ean@DESKTOP-U6K7BVH:~$ mkdir First
coffee_6ean@DESKTOP-U6K7BVH:~$ ls
CSS  First  HTML  Images  Java  JavaScript
coffee_6ean@DESKTOP-U6K7BVH:~$ cd First/
coffee_6ean@DESKTOP-U6K7BVH:~/First$ touch person.txt
coffee_6ean@DESKTOP-U6K7BVH:~/First$ ls
person.txt
coffee_6ean@DESKTOP-U6K7BVH:~/First$ mv ./person.txt ./another.txt
coffee_6ean@DESKTOP-U6K7BVH:~/First$ ls
another.txt
coffee_6ean@DESKTOP-U6K7BVH:~/First$ echo "Hello World" > another.txt
coffee_6ean@DESKTOP-U6K7BVH:~/First$ cat another.txt
Hello World
coffee_6ean@DESKTOP-U6K7BVH:~/First$ cp ./another.txt ./copy.txt
coffee_6ean@DESKTOP-U6K7BVH:~/First$ cat copy.txt
Hello World
coffee_6ean@DESKTOP-U6K7BVH:~/First$ cp -r . ../Second
coffee_6ean@DESKTOP-U6K7BVH:~/First$ ls
another.txt  copy.txt
coffee_6ean@DESKTOP-U6K7BVH:~/First$ cd ..
coffee_6ean@DESKTOP-U6K7BVH:~$ ls
CSS  First  HTML  Images  Java  JavaScript  Second
coffee_6ean@DESKTOP-U6K7BVH:~$ rm -rf Second/
coffee_6ean@DESKTOP-U6K7BVH:~$ ls
CSS  First  HTML  Images  Java  JavaScript
coffee_6ean@DESKTOP-U6K7BVH:~$

// --- Part 2 --- //
/*
 * 1. What does the man command do? Type in man rm. How do you scroll and get out?
 * 2. Look at the man page for ls. What does the -l flag do? What does the -a flag do?
 * 3. How do you jump between words in the terminal?
 * 4. How do you get to the end of a line in terminal?
 * 5. How do you move your cursor to the beginning in terminal?
 * 6. How do you delete a word (without pressing backspace multiple times) in terminal?
 * 7. What is the difference between a terminal and shell?
 * 8. What is an absolute path?
 * 9. What is an relative path?
 * 10. What is a flag? Give three examples of flags you have used.
 * 11. What do the r and f flags do with the rm command?
 */
1. The ['man BASH_CMMND'] command will prompt the specific shell manual for that command.
    You navigate using the keyboard arrows, and you exit by typing 'q' (for 'Quit')
2. -l     use a long listing format
    -a, --all     do not ignore entries starting with .
3. Option/Alt + right/left
4. Command/Ctrl + E
5. Command/Ctrl + A 
6. Command/Ctrl + W
7. A shell is simply a macro processor that executes the commands, and the terminal would be
    the GUI that proivides the user with the CLI to interact with the computer
8. The complete address (from root) of a file/folder
9. The address of a file/folder relative to the users current location (like home '~')
10. Command add-ons that can enhance/change shell commands
    ls -a, ls -l, rm -rf
11.  -f, --force     ignore nonexistent files and arguments, never prompt
    -r, -R, --recursive     remove directories and their contents recursively