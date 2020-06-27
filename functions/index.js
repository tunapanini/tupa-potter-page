const cors = require("cors");
const express = require("express");
const functions = require("firebase-functions");
const fetch = require("node-fetch");

const app = express();

const config = functions.config();

const apiKey = config.potterapi.key;
const apiUrl = config.potterapi.baseurl;
const allowedOrigins = config.cors.allowedorigins.split(",");

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.get("/sortingHat", async (req, res) => {
  const response = await fetch(`${apiUrl}/sortingHat`);
  res.json(await response.json());
  if (!response.ok) {
    response.status(response.status);
  }
});

app.get("/houses", async (req, res) => {
  const response = await fetch(`${apiUrl}/houses?key=${apiKey}`);
  res.json(await response.json());
  if (!response.ok) {
    response.status(response.status);
  }
});

exports.potterapi = functions.https.onRequest(app);
