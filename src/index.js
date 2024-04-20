require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { add } = require("./arithmetica");
app.use(cors());

app.use(cors());

if (!process.env.PORT) {
  throw new Error(
    "Please specify the sport number for the HTTP server with the environment variable PORT."
  );
}

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Arithmetic service – last updated 3/5/2022");
});

app.get("/add/:n/:m", (req, res) => {
  const n = Number(req.params.n);
  const m = Number(req.params.m);
  const sum = n + m;
  console.log(`Adding ${n} and ${m} to get ${sum}`);

  if (!isNaN(n) && !isNaN(m)) {
    res.json(sum);
  } else {
    res
      .status(400)
      .send("Invalid input: Please ensure both parameters are numbers.");
  }
});

app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port + "/add/");
});
