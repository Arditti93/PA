require("dotenv").config();
const express = require("express");
const cors = require("cors")

const port = process.env.PORT || 5001;

const User = require("./model");

const app = express();

app.use(cors())
app.use(express.json());

const syncTables = () => {
  User.sync({ alter: true, force: false });
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "api is working" });
});

app.post("/newContact", (req, res) => {
    console.log("REQUEST BODY")
    console.log(req.body)
})

app.listen(port, () => {
  syncTables();
  console.log(`App listening on port ${port}`);
});