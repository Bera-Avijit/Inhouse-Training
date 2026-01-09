require("dotenv").config();

const express = require("express");
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

const app = express();

app.use(express.json());

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

// app.get("/register", (req, res) => {
//   res.status(200).send("Registration Page");
// });

// const PORT = 5000;

/*
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  console.log(`http://localhost:${PORT}`);
});
*/

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
    console.log(`http://localhost:${process.env.PORT}`);
  });
});
