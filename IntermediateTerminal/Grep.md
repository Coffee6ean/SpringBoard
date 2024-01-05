# Intro to Grep -

Grep: Global Regular Expression Print
Let's add a little more onto our knowledge of ***grep*** and introduce some flags.
- ***-i*** for case insensitive search
```bash
grep -i 'elie' names.txt => Elie
```

- ***-w*** for full word search
```bash
grep -i 'beth' names.txt

Beth
Elizabeth
```

- ***-A*** display a certain number of lines after
```bash
grep -A 3 "Beth" names.txt

Beth
Tim
Elizabeth
Tom
```

- ***-B*** display a certain number of lines before
```bash
grep -B 3 "Beth" names.txt

Lisa
Mark
Elie
Beth
```

- ***-C*** display a certain number of lines around
```bash
grep -A 3 "Beth" names.txt

Lisa
Mark
Elie
Beth
Tim
Elizabeth
Tom
```

- ***-v*** invert pattern (you can think of this as anything NOT what you are
    searching for)
```bash
grep -v 3 "Jane" names.txt

Lisa
Mark
Elie
Beth
Tim
Elizabeth
Tom
Matt
Liza
Shana
```

- ***-c*** count matches
```bash
grep -c 'Jane' names.txt => 2
```

The grep utility searches any given input files, selecting lines that match one or 
more patterns
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard$ cd IntermediateFlask/
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ ls
ArraysAndLinkedLists  ExternalAPIRequests  FlaskWrapup  HashingAndLogIn  Keys  PythonWrapup  RESTFUL_JSON_API  WTForms  requirements.txt  venv
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ cat requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
idna==3.6
requests==2.31.0
urllib3==2.1.0
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep '2.1' requirements.txt 
urllib3==2.1.0
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ grep '3' requirements.txt 
certifi==2023.11.17
charset-normalizer==3.3.2
idna==3.6
requests==2.31.0
urllib3==2.1.0
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateFlask$ 
```

Examples:
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/FirstFlaskApp$ grep -i 'flask' requirements.txt 
Flask==3.0.0
Flask-DebugToolbar==0.13.1
coffee_6ean@DESKTOP-U6K7BVH:~/Linux/FirstFlaskApp$ 
```
