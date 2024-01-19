# Introduction to REST -

**Imagine you’re a developer**
- Your task: create route for an API that will update a user
    - ***POST /users/[id]/update***?
    - ***POST /users/[id]/change***?
    - ***PATCH /users/[id]***?
- With this much flexibility, it’s very helpful to standardize

## REST:
- Architectural style defining constraints for creating web services
    - Includes things like: client-server model, statelessness and cacheability
- APIs that adhere to these constraints are called *RESTful APIs*

### RESTful APIs
- Usually have base url
    - eg *http://api.site.com/* or *http://site.com/api/*
- Have a **resource** after the base url
    - eg *http://api.com/books* or *http://site.com/api/books*
- Use standard HTTP verbs (GET, POST, PUT/PATCH, DELETE)
- Structure routes in a standardized way *(“RESTful routing”)*

### Resource
- An object with a type, associated data, relationships to other resources
- A set of methods that operate on it
- Analogous to instance/methods in OO
    - HTTP verbs describe methods on resource
    - ***DELETE /cats/fluffy*** is same idea as ***fluffy.delete()***

Not every route in a RESTful API will neccessary be around resources. For example, you may have routes to initially authenticate with the API that aren’t using a resource in the URL.

### RESTful routes
RESTful routes for a resource called *snacks*:

| HTTP Verb   | Route        | Meaning        |
| ------------|:------------:|---------------:|
| GET         | /snacks      | Get all snacks |
| GET         | /snacks/[id] | Get snack      |
| POST        | /snacks      | Create snack   |
| PUT / PATCH | /snacks/[id] | Update snack   |
| DELETE      | /snacks/[id] | Delete snack   |

But what about X, Y or Z?
No! Make sure you follow these naming conventions!

### RESTful Route Responses
Not entirely standardized — but these are common:

|  Method + URL Path         |  Description                                          |
| ---------------------------|:-----------------------------------------------------:|
| GET /snacks                | Returns 200 OK, with JSON describing snacks           |
| GET /snacks/[id]           | Returns 200 OK, with JSON describing single snack     |
| POST /snacks               | Returns 201 CREATED, with JSON describing new snack   |
| PUT or PATCH /snacks/[id]  | Returns 200 OK, with JSON describing updated snack    |
| DELETE                     | Returns 200 OK, with JSON describing updated snack    |

| HTTP Verb   | Route        | Meaning | Status | Response JSON                        |
| ------------|:------------:|--------:|-------:|-------------------------------------:|
| GET         | /snacks      | Get all | 200    | {"snacks": [{id, name, cals}, ...] } |
| GET         | /snacks/[id] | Get     | 200    | {"snack": {id, name, cals}}          |
| POST        | /snacks      | Create  | 201    | {"snack": {id, name, cals}}          |
| PUT / PATCH | /snacks/[id] | Update  | 200    | {"snack": {id, name, cals}}          |
| DELETE      | /snacks/[id] | Delete  | 200    | {"deleted": snack-id}                |

Examples of RESTful routing:
- Stripe: https://stripe.com/docs/api?lang=curl#charges
- Github: https://developer.github.com/v3/repos/
- Yelp: https://www.yelp.com/developers/documentation/v3/event
- Spotify: https://developer.spotify.com/documentation/web-api/reference/playlists/


**Nested Routes**
| HTTP Verb   | Route                                  | Response                         |
|-------------|:--------------------------------------:|---------------------------------:|
| GET         | /businesses                            | Get info about all businesses    |
| GET         | /businesses/[biz-id]                   | Get info about business          |
| POST        | /businesses                            | Create busines                   |
| PUT / PATCH | /businesses/[biz-id]                   | Update business                  |
| DELETE      | /businesses/[biz-id]                   | Delete business                  |
| GET         | /businesses/[biz-id]/reviews           | Display all reviews for business |
| GET         | /businesses/[biz-id]/reviews/[rev-id]  | Display review for business      |
| POST        | /businesses/[biz-id]/reviews           | Create review for business       |
| PUT / PATCH | /businesses/[biz-id]/reviews/[rev-id]  | Update review for business       |
| DELETE      | /businesses/[biz-id]/reviews/[rev-id]  | Delete review for business       |
