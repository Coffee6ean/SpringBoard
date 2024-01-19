# Greap with Regex -

We previously saw wildcards with ***find***, so how can we use with the ***grep***?
The key is to use ***regular expressions***.

Regular expressions are used to define patterns in a string of characters,
which are then used to search a text for potential matches. Regular expressions
are common and quite powerful: you can use them to check whether a user has 
submitted a properly formatted email address or phone number, for instance.

We will not go in depth with regular expressions here. There are a number of great
[interactive refrences](http://regexr.com/) online 

For now, let's just take a look at a couple examples of the syntax:
- ***.***: matches any character
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep '.....' requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
idna==3.6
requests==2.31.0
urllib3==2.1.0
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -w  '.....' requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
idna==3.6
requests==2.31.0
urllib3==2.1.0
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ 
```

- ***\****: match zero or more of the preceding characters or expression
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -wc 'c.*' requirements.txt 
2
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -w 'c.*' requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -wi 'c.*' requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ 
```

- ***[]***: any specific characters
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -wc '[ciu].*' requirements.txt 
4
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -wci '[ciu].*' requirements.txt 
4
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -wi '[ciu].*' requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
idna==3.6
urllib3==2.1.0
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ 
```

- ***[^]***: do not match
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -wc '[^c].*' requirements.txt 
5
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep -wi '[^c].*' requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
idna==3.6
requests==2.31.0
urllib3==2.1.0
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ 
```
