# Redirects -

### Client-side Redirects
- With React Router we can mimic the behavior of server-side redirects.
- Useful after certain user actions (e.g. submitting a form)
- Also useful to not allow users to go somewhere (e.g. unauthorized pages)

### How to Redirect
- In React Router, there are two ways to redirect:
    - With the ***useNavigate*** hook
        - Useful for “you’re now done here, go here instead, if you go back - no worries!”
    - Without the ***Navigate*** component
        - Useful for “you shouldn’t have gotten here, go here instead, do not go back”

### The *useNavigate* hook: An Example
Useful for “you’re now done here, go here instead, if you go back - no worries!”

```jsx
function Contact() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleChange(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
  }

  return (
    <div>
      <h1>This is the contact page.</h1>
      <p>Enter email to get in touch</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
```

### The *Navigate* Component: An Example
Useful for “you shouldn’t have gotten here, go here instead, do not go back”

_demo/redirects/src/AdminPage.js_
```jsx
function AdminPage() {

  const { username } = useParams();

  if (username !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Welcome back admin!</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
```

<aside>
💡 **History API**

- All client-side routing libraries use the browser’s history API
- History API allows us to manipulate browser history via JS
- Common API methods on :
    
    ***window.history***
    
    - ***.back***: go back one page in history
    - ***.forward***: go forward one page in history
    - ***.go***: go to an arbitrary page in history
    - ***.pushState***: add new entry in history & update URL *without* reloading page.
    - ***.replaceState*** - without adding new entry in history, update URL *without* reloading page.

The function signatures for ***back***, ***forward***, and ***go*** are all relatively straightforward. The first two functions don’t take any parameters; the third accepts one parameter, indicating how far back or forward in the session history you’d like to travel.

On the other hand, If you read about the history API on MDN, you’ll see that the signature for ***pushState*** and ***replaceState*** are a little… weird. Both accept three parameters: a ***state*** object, a ***title*** and a ***url***. Let’s describe these in reverse order:

- ***url*** is simply the new URL you want to put into the URL bar.
- ***title*** parameter is, strangely, ignored by every browser. You can supply a string here if you want, but it does not matter.
- ***state*** parameter is an object that you can potentially access later if the user navigates back to this point in the session history by clicking back or forward. Practically speaking, this isn’t something you need to worry about for now.

While these function signatures can definitely be confusing, most times you can ignore the first and second parameters: the most important is the third.

For more on the history API in general, check out [MDN on History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

</aside>

## Including a 404:
```jsx
function Routes404() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:slug" element={<Post/>} />
      <Route path="/blog" element={<BlogHome/>} />
      <Route path="/"  element={<Home/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

<aside>
💡 **404s with a *Navigate* component**
Instead of a component we could also use a ***<Navigate>*** component!

```jsx
function RoutesList() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users/:username" element={<AdminPage />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
```

</aside>
