# Redirects -

### Client-side Redirects
- With React Router we can mimic the behavior of server-side redirects.
- Useful after certain user actions (e.g. submitting a form)
- Can be used in lieu of having a catch-all 404 component.

### How to Redirect
- In React Router, there are two ways to redirect:
    - Using the ***<Redirect>*** component
        - Useful for “you shouldn’t have gotten here, go here instead”
    - Calling ***.push*** method on the ***history*** object
        - Useful for “you finished this, now go here”

### The *Redirect* Component: An Example
```jsx
function Routes() {
  return (
    <Switch>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/blog/:slug"><Post /></Route>
      <Route exact path="/blog"><BlogHome /></Route>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>
  );
}
```

<aside>
💡 **Why Bother Redirecting?**

At this point, you may be wondering why it’s worth redirecting inside of a ***Switch***
 statement. After all, what’s the difference between closing your switch with these two lines:

```jsx
<Route exact path="/"><Home /></Route>
<Redirect to="/" />
```

and this one line?

```jsx
<Route exact path="/"><Home /></Route>
```

It turns out there’s an important distinction. When you use ***Redirect***, a client-side redirect will actually occur, meaning that the URL will change to the value of the ***to*** prop on the redirect. So in the first example, if you went to *localhost:3000/blargh*, the redirect would clean up the URL to just *localhost:3000/*.

In the second example, the lack of an ***exact*** prop means you’d still see the ***Home*** component, but the URL wouldn’t get cleaned up. Instead, you’d still see *localhost:3000/blargh* in the URL bar.

</aside>

### The *history* Object
- ***history*** object is a wrapper over the browser’s ***history*** API
- You have access to the history object using the ***useHistory*** hook
- The ***history*** object has ***.push(url)***, which adds URL to the session history.
    - So, unlike ***<Redirect>***, hitting back button will return here
- After pushing this new URL, React Router will update the view accordingly.

### The *history* Object: An Example
_demo/switch-and-redirects/src/Contact.js_
```jsx
function Contact() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  function handleChange(evt) {
    setEmail(evt.target.value);
  }

  function storeEmail() {
    console.log("jk, no email storage");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    storeEmail(email);
    // imperatively redirect to homepage
    history.push("/");
  }
```

_demo/switch-and-redirects/src/Contact.js_
```jsx
function Contact() {
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
