const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here
const BlogModel = require("./model");

app.get("/get", async (req, res) => {
  try {
    const result = await BlogModel.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await BlogModel.findById(id);
    if (!result) {
      res.status(404).send({ message: "Blog post not found" });
    } else {
      res.send(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching blog post" });
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
