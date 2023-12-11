# Revewing HTTP Verbs -

## GET and POST:

***GET***
- Remains in history, can be cached/bookmarked
- Data sent in URL, in query string
- Repeatable

***POST***
- Doesn’t remain in history, is not cached/bookmarked
- Data sent in body of the request
- Not repeatable

When to use ***GET*** or ***POST***?
- Searching / Filtering? ***GET***
- Sending an email? ***POST***
- Updating a user? ***POST***

## PUT / PATCH / DELETE:
| API Call  | Description                            |    
| --------- |:--------------------------------------:|     
| PUT       | Update entire resource                 |    
| PATCH     | Update part of resource (patch it up)  |  
| DELETE    | Delete resource                        |

**Requesting With Methods**
| HTTP Verb   | Forms / Links  | AJAX  | Server-side  |
| ------------|:--------------:|------:|-------------:|     
| GET         |      ✓         |  ✓   |   ✓          |
| POST        |      ✓         |  ✓   |   ✓          |
| PUT / PATCH |      ✗         |  ✓   |   ✓          |
| DELETE      |      ✗         |  ✓   |   ✓          |

# Safety & Idempotence -
A **safe** operation is one that does not change the data requested.
An **idempotent** operation can be performed many times (with same data) with the result of all calls being the same as if it was done once.
- Idempotence refers to side-effects not all-effects or responses.
- Example: In arithmetic, calculating absolute value

| HTTP Verb   | Safe?  | Idempotent  |
| ------------|:------:|------------:|
| GET         |  ✓     |  ✓         |   
| POST        |  ✓     |  ✗         |   
| PUT / PATCH |  ✗     |  ✓         |   
| DELETE      |  ✗     |  ✓         |   

**Why do we care about this?**
- Better describe the routes that we create
- Build standards around how we define routes
- Core part of the REST standard