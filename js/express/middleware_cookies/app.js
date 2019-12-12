const express = require("express");
const app = express();
// log middleware
function logMiddleware(req, res, next) {
  console.log("Log middleware do all your logs here");
  next();
}
// print timestamp
function printTimestamp(req, res, next) {
  const nextMiddleware = false;
  if (nextMiddleware) {
    console.log(new Date());
    next();
  } else {
    next(new Error("please change nextMiddleware to true"));
  }
}
// respondToClient
function respondToClient(req, res, next) {
  res.send({ message: "your message" });
}
// validation middleware
function isValidInput(req, res, next) {
  // get all the inputs from req
  const { username, password } = req.body;
  const validUsername =
    username && typeof username === "string" && username.length > 8;
  const validPassword =
    password && typeof password === "string" && password.length > 12;
  if (validUsername && validPassword) {
    next();
  } else {
    next(new Error("invalid username and password"));
  }
  // validate them
}
app.get("/", logMiddleware, printTimestamp, respondToClient);
app.post("/sign_in", isValidInput, (req, res) => {
  const { username } = req.body;
  // setting cookies
  // res.local.signInUser = username
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});