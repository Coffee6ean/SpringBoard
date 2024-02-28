# Fetching Data on Initial Render

### A Typical Use Case for *useEffect*

- It’s very common that when a component renders, you’ll want to fetch some data from an external data source or API
- We want to do this after the component first renders so that we can show the user something (e.g. a loading screen) while we fetch that data
- To fetch correctly, we’ll run an effect that only happens once and when the API call is finished, we’ll set our state and render the component again

_demo/github-profile-viewer/src/ProfileViewer.js_
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

/** GitHub Profile Component --- shows info from GH API */

function ProfileViewer() {
  const [profile, setProfile] = useState(null);

  // this is called *after* component first added to DOM
  useEffect(function fetchUserWhenMounted() {
    async function fetchUser() {
      const userResult = await axios.get(
        "https://api.github.com/users/elie");
      setProfile(userResult.data);
    }
    fetchUser();
  }, []);

  return (
    <div>{profile ? <h2>{profile.name}</h2> : <i>(loading)</i>}</div>
  );
};
```

Some important notes here:

- useEffect cannot be an async function, we must define an async function inside and invoke it
- make sure that we change state after getting back a response
- don’t forget to handle errors correctly!

## Updating After Subsequent Renders:

### Fetching Data Later
Goal: fetch data not after the first render, but after a later state change

### Example: Text Search
_demo/github-profile-viewer/src/ProfileViewerWithSearch.js_
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

/** GitHub Profile Component --- shows info from GH API */

function ProfileViewerWithSearch() {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("elie");

  function search(username) {
    setUsername(username);
  };

  // this is called after component is first added to DOM
  // and every time username changes
  useEffect(function fetchUserOnUsernameChange() {
    async function fetchUser() {
      const userResult = await axios.get(`${BASE_URL}/${username}`);
      setProfile(userResult.data);
    }
    fetchUser();
  }, [username]);

  return (
    <div>
      <ProfileSearchForm search={search} />
      {profile ? <h2>{profile.name}</h2> : <i>(loading)</i>}
    </div>
  );
};

export default ProfileViewerWithSearch;
```
