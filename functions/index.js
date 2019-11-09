/* firestore  export NODE_ENV=development */
const functions = require("firebase-functions");

const FBAuth = require("./utils/fbAuth");

const { getAllPosts, newPost } = require("./handlers/posts");
const { signup, login, uploadImage } = require("./handlers/users");

const app = require("express")();

// Posts route
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, newPost);

// users
app.post("/login", login);
app.post("/signup", signup);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.https.onRequest(app);
