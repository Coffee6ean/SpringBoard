# Find -

One of the most useful terminal commands is the ***fincd*** command. When you
know how to use it well, you can easily find files on your computer.

To find a specific file in your current directory, you can simply type ***find*** and
the name of the file. (If you try to find a folder you will find all of the contents
inside as well).

```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard$ find SQL
SQL
SQL/DDL&SchemaDesign
SQL/DDL&SchemaDesign/SQL Relationships Visualized.xlsx
SQL/DDL&SchemaDesign/StructuringRelationalData.txt
SQL/DDL&SchemaDesign/CreatingDatabases.txt
SQL/DDL&SchemaDesign/Indexing.txt
SQL/DDL&SchemaDesign/BestPractices.txt
SQL/DDL&SchemaDesign/sql-ddl-demo
SQL/DDL&SchemaDesign/sql-ddl-demo/sql-ddl-demo
SQL/DDL&SchemaDesign/sql-ddl-demo/sql-ddl-demo/reddit.sql
SQL/DDL&SchemaDesign/sql-ddl-demo/sql-ddl-demo/ddl.sql
SQL/RelationshipsIntro
SQL/RelationshipsIntro/SQL Relationships Visualized.xlsx
SQL/RelationshipsIntro/Relationships.txt
SQL/RelationshipsIntro/sql-joins-demo
SQL/RelationshipsIntro/sql-joins-demo/sql-joins-demo
SQL/RelationshipsIntro/sql-joins-demo/sql-joins-demo/movies.sql
SQL/RelationshipsIntro/Joins.txt
SQL/Querying
SQL/Querying/Operators.txt
SQL/Querying/DML.txt
SQL/Querying/ModifyingData.txt
SQL/DatabasesIntro
SQL/DatabasesIntro/Databases.txt
SQL/DatabasesIntro/PostgreSQL.txt
SQL/DatabasesIntro/DML.txt
SQL/DatabasesIntro/SQL.txt
SQL/sql-query-demo
SQL/sql-query-demo/library.sql
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard$ 
```
You should see a list of all SQL files & and folders

To find something with a bit more complexity, use the following pattern:
1. find
2. a filepath (this will set up a recursive behaviour)
3. an expression (this is where you have the most flexibility)

### Flags and Wildcards
Let's ***cd*** into a folder called ***views*** and try this pattern to find anything with
the na,e ***first.txt*** inside of the ***views*** folder:
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ find ./views/ -name "first.txt"
./views/first.txt
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard/IntermediateTerminal$ 
```

This is nice if we know exactly the name of the file we are looking for, but
many times we need to use wildcard characters. Here are some:
- *: any number of characters
- ***?***: one character
- ***[]***: any of the characters inside the brackets

Here are the examples in use:
- find inside of ***views*** folder (assume we are inside the views folder)
    anything that ends with ***.html => find . -name "\*.html"***
- find inside of the ***views*** folder (assume we are inside the views folder)
    anything that ends with a three letter file extension like ***.txt*** or
    ***.css => find . -name "\*.???"***
- find inside of the ***views*** folder (assume we are  inside the views folder)
    anything that starts with the letter ***f t*** or ***s => find . -name "[fts]\*"***

Example:
```bash
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard$ find . -name '*.css'
./LocalStorageDOM/DarkModeDemo/style.css
./JavaScriptEvents/MultipleEvents/style.css
./DeveloperFundamentals/files-to-commit/web-fundamentals-refresher-demo/VideoCode/app.css
./DeveloperFundamentals/files-to-commit/web-fundamentals-refresher-demo/style-properties.css
./DeveloperFundamentals/files-to-commit/web-fundamentals-refresher-demo/main.css
./DeveloperFundamentals/Git/style.css
./WebFundamentals/Debugging&Errors/style.css
./WebFundamentals/Refresher&MustKnows/style.css
./SpringBoardExercises/jasmine-testing-exercises-starter/jasmine-testing-exercises-starter/tip-pool/style.css
./SpringBoardExercises/jasmine-testing-exercises-starter/jasmine-testing-exercises-starter/calculator/calculator.css
./SpringBoardExercises/jasmine-testing-exercises-starter/__MACOSX/jasmine-testing-exercises-starter/tip-pool/._style.css
./SpringBoardExercises/jasmine-testing-exercises-starter/__MACOSX/jasmine-testing-exercises-starter/calculator/._calculator.css
./SpringBoardExercises/flask-greet-calc/flask-greet-calc/calc/static/style.css
./SpringBoardExercises/flask-survey/flask-survey/static/style.css
./SpringBoardExercises/connect-four-oo-exercise-starter/connect-four-oo/connect4.css
./SpringBoardExercises/hack-or-snooze-ajax-api-starter-code/hack-or-snooze-ajax-api/css/site.css
./SpringBoardExercises/hack-or-snooze-ajax-api-starter-code/hack-or-snooze-ajax-api/css/nav.css
./SpringBoardExercises/hack-or-snooze-ajax-api-starter-code/hack-or-snooze-ajax-api/css/stories.css
./SpringBoardExercises/hack-or-snooze-ajax-api-starter-code/hack-or-snooze-ajax-api/css/user.css
./SpringBoardExercises/autocomplete_starter_code/__MACOSX/starter_code/._style.css
./SpringBoardExercises/autocomplete_starter_code/starter_code/style.css
./SpringBoardExercises/HTML_TEST_01/style.css
./SpringBoardExercises/hack-or-snooze-ajax-api-solution/hack-or-snooze-ajax-api-solution/css/site.css
./SpringBoardExercises/hack-or-snooze-ajax-api-solution/hack-or-snooze-ajax-api-solution/css/nav.css
./SpringBoardExercises/hack-or-snooze-ajax-api-solution/hack-or-snooze-ajax-api-solution/css/stories.css
./SpringBoardExercises/hack-or-snooze-ajax-api-solution/hack-or-snooze-ajax-api-solution/css/user.css
./SpringBoardExercises/TODOExercise/style.css
./SpringBoardExercises/memory-game-starter-code/memory-game/style.css
./IntroToDOM/CreatingClasses/style.css
./IntroToDOM/RemoveClasses/style.css
./IntroToDOM/ParentChildrenSiblings/style.css
./IntroToDOM/ManipulatingClasses/style.css
./jQuery/style.css
./HatchwaysProjects/Jeopardy/style.css
./HatchwaysProjects/MemeGenerator/style.css
coffee_6ean@DESKTOP-U6K7BVH:~/SpringBoard$ 
```
