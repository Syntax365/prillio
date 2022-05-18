const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("*", (req, res) => {
  res.send("Panda is a sexy devil");
});

app.listen(port, () => {
  console.log("Listening to port 8080");
});
