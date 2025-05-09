## 📦 What is NPM?
NPM (Node Package Manager) is a package manager for NodeJS modules. It helps developers manage project dependencies, scripts, and third-party libraries. By installing NodeJS on your system, NPM is automatically installed, and ready to use.

- It is primarily used to manage packages or modules—these are pre-built pieces of code that extend the functionality of your NodeJS application.
- The NPM registry hosts millions of free packages that you can download and use in your project.
- NPM is installed automatically when you install NodeJS, so you don’t need to set it up manually.

## ♻️ What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

- Retain application state which is lost during a full reload.
- Save valuable development time by only updating what's changed.
- Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

**The following steps allow modules to be swapped in and out of an application:**

1. The application asks the HMR runtime to check for updates.
2. The runtime asynchronously downloads the updates and notifies the application.
3. The application then asks the runtime to apply the updates.
4. The runtime synchronously applies the updates.
5. You can set up HMR so that this process happens automatically, or you can choose to require user interaction for updates to occur.

## 🚀 What is npx?
`npx` stands for Node Package eXecute. This command-line utility, bundled with npm version 5.2.0 and above, allows developers to execute Node.js packages directly from the npm registry without globally installing them on your system.

## 🙈 What is .gitignore? What should we add and not add into it?
`.gitignore` is a special file used by Git to specify which files and directories should be ignored by version control. This means Git won’t track changes to those files or include them in commits.

✅ What you should add to .gitignore:
System files (e.g., `.DS_Store` on macOS, `Thumbs.db` on Windows)

- Environment files (e.g., `.env` — contains API keys or secrets)

- Build/output directories (e.g., `dist/`, `build/`, `out/`)

- Dependency folders (e.g., `node_modules/` in Node.js projects)

- Logs (e.g., `*.log`)

- Temporary files (e.g., `*.tmp`, `*.swp`)

- IDE/editor configs (e.g., `.vscode/`, `.idea/`)

## 📄 What is the difference between package.json and package-lock.json?
`package.json` and `package-lock.json` are both files used in Node.js projects to manage dependencies, but they serve different purposes:

📝 package.json
- Defines the project metadata (name, version, description).

- Lists dependencies with version ranges (e.g., "lodash": "^4.17.21").

- Used to install packages and share project requirements.

- Often edited manually.

🔒 package-lock.json
- Automatically generated when installing dependencies.

- Records the exact versions of every installed package (including sub-dependencies).

- Ensures consistent installations across different environments.

- Should not be edited manually.

## 📁 What is the dist folder?
The **dist (short for distribution)** folder contains the final, production-ready build of your project. It includes optimized and minified files—like HTML, CSS, JavaScript, images, etc.—that are ready to be deployed to a web server or hosting platform.

- Generated after running a build command (e.g., npm run build).

- Contains no source code, only compiled or bundled output.

- Can be safely added to .gitignore in many cases (since it’s generated).