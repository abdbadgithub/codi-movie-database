const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ok");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/hello/:id", (req, res) => {
  res.send("hello " + req.params.id);
});
app.get("/search", (req, res) => {
  if (!req.query["s"]) {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  } else {
    res.send({ status: 200, message: "ok", data: req.query["s"] });
  }
});
app.get("/time", (req, res) => {
  let ts = new Date(Date.now());

  // timestamp in milliseconds
  let hours = ts.getHours();
  let minutes = ts.getMinutes();
  res.send({ status: 200, message: hours + ":" + minutes });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
