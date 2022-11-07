const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    return res.json(data);
  });
  

app.all("*", (req, res) => {
    res.status(404).json({ message: "This route doesn't exist" });
  });

app.listen(process.env.PORT || 3200, () => {
    console.log("Server started");
});

