const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// ==========
// SET UP EJS
// ==========

// run `npm i ejs` to install EJS
// we don't need to require EJS manually since Express will require the package behind the scenes by specifying EJS as the view engine
app.set("view engine", "ejs");
// when we create a new Express app and use a view engine, by default Express will assume that our templates exist in a directory called `views` (we'll need to manually make a directory named `views`)
// we can name "views" directory differently with app.set()
// add ejs files for HTML templates in the `views` directory

// ==========================
// SET UP THE VIEWS DIRECTORY
// ==========================

// Express is set up to automatically look for the EJS view templates inside of the `views` directory in our project folder, but it is only going to work if we are running the application from within the same directory where the views folder is. So in order to run the code from anywhere, we need to set the views directory:
app.set("views", path.join(__dirname, "/views"));
// take current directory name where `app.js` is located and join it with `/views`

// ==================
// SERVE STATIC FILES
// ==================

// serve static files: serve CSS and JS files that we want to include in the response to be sent back to the client side
// when we pass an argument of the folder that we want to serve our assets from into `express.static()`, by default it'll serve static files from the directory named `public`, and the `public` directory will be in the root directory of our application (`public` can be named differently)
// create an absolute path for `public` based upon where the `app.js` file is:
app.use(express.static(path.join(__dirname, "/public")));

// ==========
// HOME ROUTE
// ==========

app.get("/", (req, res) => {
  // when responding a GET request with a EJS file, use res.render() :
  res.render("home");
  // we don't need to specify the .ejs extension because Express will look for EJS templates automatically
});

// ===============
// SUBREDDIT ROUTE
// ===============

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  // res.render("template", {EJS-placeholder: value-to-embed})
  if (data) {
    // spread the data so that it allows us to access individual properties
    // `...data` === name, subscribers, description, posts
    // it's equivalent of:
    // {
    //   name: name,
    //   subscribers: subscribers,
    //   description: description,
    //   posts: posts
    // }
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

// ======
// SERVER
// ======

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
