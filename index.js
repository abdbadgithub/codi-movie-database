const express = require("express");
const app = express();
const port = 3000;
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];
const sortobject = (object, value) => {
  object.sort((a, b) => a[value] - b[value]);
  return object;
};
app.get("/", (req, res) => {
  res.send("ok");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/hello/:id", (req, res) => {
  res.send("hello " + req.params.id);
});
app.get("/time", (req, res) => {
  let ts = new Date(Date.now());

  // timestamp in milliseconds
  let hours = ts.getHours();
  let minutes = ts.getMinutes();
  res.send({ status: 200, message: hours + ":" + minutes });
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
app.get("/movies/create", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/movies/read/:input", (req, res) => {
  if (req.params.input === "by-date") {
    // res.send(req.params.input);
    res.send({ status: 200, data: sortobject(movies, "year") });
  }
  if (req.params.input === "by-rating") {
    res.send({ status: 200, data: sortobject(movies, "rating") });
  }
  if (req.params.input === "by-title") {
    res.send({ status: 200, data: sortobject(movies, "title") });
  }
  //res.send({ status: 200, data: movies });
});
app.get("/movies/update", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/movies/delete", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
