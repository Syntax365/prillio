const express = require("express");
const app = express();

const port = 8080;

app.get("*", (req, res) => {
  res.send("Panda is a test devil");
});

app.listen(port, () => {
  console.log("Listening to port 8080");
});
