# Client-Side Routing with React Router -

## Server-Side Routing:

- “Server-side routing” is the traditional pattern
    - Clicking a ***<a>*** link causes browser to request page & replace entire DOM
- Server decides what HTML to return based on URL requested

## Client-Side Routing:

### Faking Client Side Routing
_demo/nonrouted/src/App.js_
```jsx
function App() {
  const [page, setPage] = useState("home");

  function goToPage(newPage) {
    setPage(newPage);
  }

  function showPage() {
    if (page === "home") return <Home />;
    if (page === "eat") return <Eat />;
    if (page === "drink") return <Drink />;
  }

  return (
    <main>
      <nav>
        <a onClick={() => goToPage("drink")}>Drink</a>
        <a onClick={() => goToPage("eat")}>Eat</a>
        <a onClick={() => goToPage("home")}>Home</a>
      </nav>
      {showPage()}
    </main>
  );
}
```

That’s *okay*

- It does let us show different “pages”
    - All in the front-end, without loading new pages from server
- But we don’t get
    - A different URL as we move around “pages”
    - The ability to use the back/forward browser buttons ⬅️ ➡️ 😭
    - Any way to bookmark a “page” on the site 📖 📑 😱

### Real Client-Side Routing
**React can give us real Client-Side Routing**

### Client-Side Routing: What?
- Client-side routing handles mapping between URL bar and page user sees via *browser* rather than via *server*.
- Sites that exclusively use this are *single-page applications*.
- JavaScript manipulates the URL bar with the History Web API
