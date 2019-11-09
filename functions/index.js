/* firestore  export NODE_ENV=development */
const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./utils/fbAuth");

const { getAllPosts, newPost } = require("./handlers/posts");
const { signup, login } = require("./handlers/users");

// Posts route
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, newPost);

// users

app.post("/login", login);
app.post("/signup", signup);

exports.api = functions.https.onRequest(app);
