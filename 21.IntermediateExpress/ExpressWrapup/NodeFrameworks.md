## Other Node Web Frameworks -

### Koa2
[Koa2](https://github.com/koajs/koa)

- Written by original author of Node
- A bit more modern & opinionated
- Not as popular as Express — yet!

### Sails
[Sails](https://sailsjs.com/)

- Larger, more opinionated framework
- Similar to Django or Ruby on Rails
- Includes ORM,***Waterline***

## Node:

### Popular Library: Moment
[Moment.js](https://momentjs.com/)

Convenient functions for date manipulation & conversion

Provides “humanized” dates, like “a few minutes ago”, “yesterday”

### Popular Library: Validator.js
[Validator.js](https://github.com/chriso/validator.js)

Popular library of string validators:
- is all uppercase?
- is email?
- is URL?
- and so on

### Popular Library: Lodash
[Lodash](https://lodash.com/)

Useful set of small utility functions for common actions on arrays, objects, functions

Grouping, filtering, transforming, and more!

### npm Scripts
***package.json*** can define scripts to run:
```json
{
  "scripts" :
  {
    "test": "jest",
    "debug": "nodemon --inspect server.js",
  }
}
```

Can then run like `npm test`
