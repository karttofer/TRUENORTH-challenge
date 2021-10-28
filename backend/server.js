// Dependencies
const fetch = require("cross-fetch");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

// create application/json parser
const jsonParser = bodyParser.json();

// Allow all origins
app.use(
  cors({
    origin: "*",
  })
);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

// Get all the task
app.get("/tasks", async (req, res, next) => {
  const elements = [];
  const createItems = (savedData) =>
    fs.readFile("./mock/data.json", "utf-8", async (err, json) => {
      if (savedData) {
        return res.json(JSON.parse(json));
      }
      // Call if the user want more data
      const response = await fetch(
        `https://lorem-faker.vercel.app/api?quantity=${req.query.quantity}`
      )
        .then((toJson) => toJson.json())
        .then((fRes) => {
          for (let i = 0; i < fRes.length; i++) {
            elements.push({ id: i, title: fRes[i], isClosed: false });
          }
          return res.json(elements);
        });

      fs.writeFile("./mock/data.json", JSON.stringify(elements), () => {});
    });

  if (req.query.savedData === "true") {
    createItems(true);
  } else {
    createItems(false);
  }
});

// Close task
app.post("/close", jsonParser, (req, res) => {
  fs.readFile("./mock/data.json", "utf-8", async (err, json) => {
    const array = JSON.parse(json);

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === req.body.taskId) {
        array[i].isClosed = true;
      }
    }
    fs.writeFile("./mock/data.json", JSON.stringify(array), () => {});
    res.json({ message: "Task was closed" });
  });
});
