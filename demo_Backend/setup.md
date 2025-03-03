This folder (`demo_backend`) contains:
- Node.js
- Express.js
- MongoDB

# Project Setup Guide

## 1. Initializing npm project
In terminal, run:
```sh
npm init -y
```

## 2. Installing package
Install `slugify` package:
```sh
npm i slugify
```

## 3. Package import type
- **CommonJS (default)** (no `type: module` in `package.json`)
    ```js
    const http = require('http');
    ```
- **ES6 (ECMAScript 6)** (add `type: module` in `package.json`)
    ```js
    import http from 'http';
    ```
- **Module import**
    ```js
    // -> part(3)
    ```

## 4. Initializing express
Install express (already done in `--global`):
```sh
npm i express
```

## 5. Installing template engine EJS
Install EJS:
```sh
npm i ejs
```
- **Displaying a static HTML page**
    ```js
    res.sendFile("directory/fileName.html", { root: __dirname });
    ```
- **Displaying a dynamic HTML page**
    ```js
    res.render("fileName", { values to be displayed using '<%= variable %>' are passed as objects });
    ```
    The file should be placed in a `views` folder with an `.ejs` extension rather than a `.html` extension.

## 6. Creating database
- **By MongoDB Compass (application)**
    - Create a new connection > create database > create collection > add data > insert document `{document_to_be_inserted_in_key_value_pairs}`
- **By VS Code (Playground)**
    - Tap on MongoDB extension > Create MongoDB Playground > give DB name in `use('__');` > give collection name in `db.getCollection('__').insertMany([document_to_be_inserted_in_key_value_pairs])`

## 7. Installing mongoose
Install mongoose:
```sh
npm i mongoose
```

## 8. Setting up Tailwind CSS
- **Installing Tailwind package**
    ```sh
    npm i -D tailwindcss
    npm install tailwindcss @tailwindcss/cli
    ```
- **Initializing Tailwind package**
    ```sh
    npx tailwindcss init
    ```
- **Create `tailwind.config.js`**
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            // "./src/**/*.{html,js}",
            // "*.html",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    };
    ```
- **Create `src/input.css`**
    ```sh
    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
    ```
- `src/output.css` gets created
- **Include the output file in the required HTML pages**
