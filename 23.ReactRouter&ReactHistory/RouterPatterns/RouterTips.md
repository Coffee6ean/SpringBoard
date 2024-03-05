# React Router Tips -

### React Router Tips (Overview)
- Favor ***Route*** child components over other options
- Keep routes up high in the component hierarchy
- Use ***Switch***!
- Avoid nested routes
- Use ***history.push*** in response to user actions (e.g. submitting a form)

## Testing React Router:

### Testing Components with React Router
Components rendered by router are harder to test than regular components:
- components may depend on router hooks we’ll have to mock:
    - eg, ***useParams*** hook
- components require the context of a parent router during the test

### Mocking Router Context
Consider our ***Nav*** component:
_demo/switch-and-redirects/src/Nav.js_
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
Problems arise when we `render` the component:

```jsx
it('renders without crashing', function() {
  render(<Nav />);
});
```

![Untitled](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd7735949-6f90-4fd4-9649-ea09525bf3ae%2FUntitled.png?table=block&id=4ffaad06-975f-49e4-ba54-6f2323a2523e&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1920&userId=&cache=v2)

### MemoryRouter
To avoid *You should not use <Link> outside a <Router>* error, use a mock router, ***MemoryRouter***, which is designed for tests:
```jsx
import { MemoryRouter } from 'react-router-dom';
```

_demo/switch-and-redirects/src/Nav.test.js_
```jsx
// full render
it('mounts without crashing', function() {
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
