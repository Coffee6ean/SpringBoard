# React: Modules and Vite

## Vite + React:

React is a front-end library — you don’t need server-side stuff.

You *can* get ***react.js*** and ***react-dom.js*** from a CDN.

You *can* transpile JSX in the browser at runtime.

But there’s a better way!

**Vite is a development server and a build command that bundles your code.**
- Sets up a starter project with essentials.
- Configures your project to use plugins like React automatically.
- Allows you to leverage ES modules for a faster, more efficient development experience.
- Simplifies the build process with pre-configured rollup options.
- Makes testing & deployment processes smoother and integrated with modern tools.

### Creating a New Vite React Project
- To create a new project, type the command `npm create vite@latest <app-name>` where `<app-name>` is the name you want to give to your project. This command tells npm (Node Package Manager) to create a new project using the latest version of Vite.
- You will be prompted to choose a framework. Use the arrow keys to highlight `React` and press Enter.
- Next, you'll choose the variant, which is the programming language. Select `JavaScript`.
- After the project scaffolding has been created, change into your new project directory by typing `cd <app-name>`.
- Run `npm install` to install all the necessary dependencies that your React project needs to run. This may take a few minutes.

### Starter Code
This is a standard structure for a Vite React project. The `src` directory is where you would place all your React components and JavaScript code, while the `public` directory holds static assets like images. The `index.html` file is the entry point for the web application, which includes the built JavaScript and CSS resources. The `vite.config.js` file contains the Vite build tool configuration, and `.eslintrc.cjs` is for ESLint rules to maintain code quality.

```bash
├── .eslintrc.cjs    This is a configuration file for ESLint, a tool that helps you find and fix problems in your JavaScript code.
├── .gitignore       A list of files and folders that Git (version control system) should ignore - things like your node_modules or build directories.
├── index.html       The main HTML file for your app. When you open your app in a browser, this is the first file that gets loaded.
├── package.json     A JSON file that contains information about your project and the packages it depends on. You can add or update packages here.
├── README.md        A text file containing information about your project, how to use it, how to install it, etc. You can edit this to tell others about your project.
├── vite.config.js   The configuration file for Vite, which is a build tool that makes development faster. It tells Vite how to build your project.
│
├── public                  This folder contains files that you can access directly in the browser, like images, fonts, and the "vite.svg" logo.
│   └── vite.svg            The Vite logo image. This can be accessed directly in the browser.
│
└── src                     The "source" folder where you'll write most of your code. Your JavaScript and CSS files live here.
    ├── App.css             A CSS file for styling your main application component. CSS files determine how your website looks.
    ├── App.jsx             A React component file that serves as the main building block of your app. React components are like custom, reusable HTML elements.
    ├── index.css           A CSS file that contains styles that apply to your entire website.
    ├── main.jsx            The main JavaScript file that gets executed first when your app starts. It connects your code to the index.html file.
		└── assets/             A folder for storing images, icons, and other files that your app will use.
					└── react.svg     The React logo image. It's an example of an asset that you might use in your app.
```

### Starting Your App
Start your development server by running `npm run dev`. This command starts a local server, and you can view your new React app by going to `http://localhost:3000` in your web browser.
