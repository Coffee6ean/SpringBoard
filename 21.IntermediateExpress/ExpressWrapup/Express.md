# Node/Express Wrapup -

## Express:

### Serving Static Files
Can serve static HTML, CSS, images, etc:
```js
// serve files in `/js` directory as `/js/___`

app.use("/js", express.static('js'));
```

### Templating HTML
[Pug](https://pugjs.org/api/getting-started.html) is a popular template system

Unlike Jinja/Nunjucks, you don’t write HTML — you write simpler text:
```js
doctype html
html(lang="en")
  head
    title= pageTitle
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
```

### Common Security Fixes
[Helmet](https://www.npmjs.com/package/helmet)

Provides tools for dealing with CSRF and other concerns

### Authentication/Login
[Passport.js](http://passportjs.org/)

Provides common pattern for authentication

Also provides login via Facebook, Twitter, etc

### Dealing with Cookies
```js
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', function(req, res, next) {
  console.log('Cookies: ', req.cookies)
})
```

Can also sign cookies, to make tamper-free cookies
