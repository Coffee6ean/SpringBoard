# Testing React Router -

### Testing Components with React Router
Components rendered by router are harder to test than regular components:

- Components may depend on router hooks we’ll have to mock:
    - eg, ***useParams*** hook
- Components require knowledge of the parent router during the test

### Testing React Router
Consider our ***Nav*** component:
_demo/redirects/src/Nav.js_
```jsx
function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/blargh">Broken Link</Link></li>
    </ul>
  );
}
// end
```

### Router Context Errors
Problems arise when we `render()` the component:

```jsx
it('renders without crashing', function() {
  render(<Nav />);
});
```

You will get something like:

```
To avoid *Error: Uncaught [Error: useHref() may be used only in the context of
a <Router> component.]*, use a mock router, `MemoryRouter`, which is designed
for tests:
```

### MemoryRouter

```txt
To avoid *Error: Uncaught [Error: useHref() may be used only in the context of
a <Router> component.]*, use a mock router, `MemoryRouter`, which is designed
for tests:
```

```jsx
import { MemoryRouter } from 'react-router-dom';
```

_demo/redirects/src/Nav.test.js_
```jsx
// full render
it('mounts without crashing', function () {
  const { getByText } = render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  const blogLink = getByText(/Blog/i);
  expect(blogLink).toBeInTheDocument();
});
```

🎉

### Testing individual routes
To test your specific routes, use the ***initialEntries*** prop [|br|](https://curric.rithmschool.com/springboard/lectures/react-router/#id15) on ***MemoryRouter*** to “navigate” to a route

_demo/redirects/src/RoutesList.test.js_
```jsx
it('renders the about page', function () {
  const { debug, getByText } = render(
    <MemoryRouter initialEntries={["/about"]}>
      <RoutesList />
    </MemoryRouter>
  );

  const h1Text = getByText(/This is the about page./i);
  expect(h1Text).toBeInTheDocument();
});

it('renders the blog page', function () {
  const { debug, container } = render(
    <MemoryRouter initialEntries={["/blog"]}>
      <RoutesList />
    </MemoryRouter>
  );

  const links = container.querySelectorAll("li a")
  expect(links).toHaveLength(3)
});
```

If you want to explicitly mock useParams, here is what that might look like. This can be helpful when unit testing an individual component instead of the entire ***<Routes>*** component with ***initialEntries***.

```jsx
// Make sure that this is OUTSIDE of your test or describe block

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ name: "burrito"}),
}))
```
