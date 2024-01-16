# NPM (Node Package Manager) - 

- Massive registry of add-on libraries
- Command line tool,***npm*** , comes with Node
- Easy dependency management for a project
- Register with npm to publish open-source or proprietary packages

### Starting a Project with NPM
```bash
$ cd my-project

$ npm init
```
- Creates ***package.json*** with metadata & dependencies
- In a hurry? Want the defaults? `npm init --yes`

### Example *package.json*
```js
{
  "name": "node-files",
  "version": "1.0.0",
  "description": "Exercise to create file listing functions.",
  "main": "",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Whiskey the Dog",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.18.0"
  }
}
```
Store your ***package.json*** in Git

## Installing Packages:
In the root project directory:
```bash
$ npm install axios
```
- Adds latest version of axios to ***dependencies*** object in ***package.json***
- Installs the package in a local ***node_modules*** folder

### node_modules
A directory containing all dependencies in the root directory of your project.
**Always add node_modules to .gitignore**.
(It’s just a collection of dependencies that can be reinstalled)

### Reinstalling Packages
When you clone an existing project from GitHub or somehow lose your ***node_modules***, here’s how you get those dependencies:
```bash
$ npm install
```
- `npm install` without arguments uses ***dependencies*** object in ***package.json***
- Similar to `pip install -r requirements.txt` in Python

### package-lock.json
- ***package.json*** contains metadata & dependency *requirements*
- For `npm install axios`, this lists dependency as `"axios": "^0.18.0"`
    - Meaning “use axios version 0.18.0 or greater” (because of ***^*** symbol)
- ***package-lock.json*** contains *exact* versions actually installed
- ***npm install*** looks at ***package-lock.json*** first, before ***package.json***

### NPM Summary
- Install dependencies to project’s with `npm install <package_name>`
    - This downloads & adds to ***node_modules*** directory
- Dependencies are notated in ***package.json*** and ***package-lock.json***
- ***package-lock.json*** locks in the exact versions as installed
- Always commit ***package.json***; never commit ***node_modules***.
- Use `npm install` on a fresh repository to get a new ***node_modules***
