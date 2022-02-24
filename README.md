# Use EJS to Template the Express Application

Instead of writing static HTML code and hardcoding dynamic values, it's a better practice to interpolate content in the template so the values will update automatically. In this project, EJS (Embedded JavaScript Templating) is used as the view engine to embed information and template an Express application.

## 🎉 Demo 

![app demo](Assets/subreddit.gif)

 &ast; *Subreddit content is generated from **data.json** included in the project.*

## ✨ Project Summary

To configure an Express application to use EJS:

1️⃣ Run `npm i ejs` to install EJS.

2️⃣ Specify EJS as the view engine by writing `app.set("view engine", "ejs")`. 

3️⃣ Set up a `views` directory to store EJS templates. 

4️⃣ Define the absolute path for `views` directory and make it globally accessible:
```sh

const path = require('path')
app.set('views', path.join(__dirname, '/views'))

```
5️⃣ Render HTML content with an EJS file using `res.render()`. This will allow Express to look for EJS templates inside `views` directory automatically.

6️⃣ Interpolate values with `<%= %>` in the EJS file. To embed JavaScript without rendering the result as an output, surround the JavaScript code with `<% %>` instead.

7️⃣ To serve static files (CSS & JS files), set up a `public` directory and create an absolute path for it to enable the `public` directory to serve files globally:

```sh
app.use(express.static(path.join(__dirname, "/public")))

```
8️⃣ Create a `partials` folder inside of the `views` directory. Partials are duplicated markups. For example, `<head>` that contains Bootstrap link, JS script, JQuery script OR the same navbar that might be needed in multiple files. Include partials in separate EJS files and import them into HTML when necessary using EJS tags `<%- include() %>` helps to streamline our code.


## 💻 Setup

1️⃣ Run the command below to install packages used in the project:
```sh

$ npm install

```
2️⃣ Install nodemon globally so that it'll restart the application when changes are made to the project:
```sh

$ npm install -g nodemon

```


3️⃣ Run `nodemon app` in the terminal to start the server, and connect to `http//localhost:3000` in the web browser.

## 👏 Credits

This project is based on the EJS and Express tutorial of <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">The Web Developer Bootcamp</a> by Colt Steele and the <a href="https://getbootstrap.com/docs/4.6/getting-started/introduction/">Bootstrap Documentation<a/>.
