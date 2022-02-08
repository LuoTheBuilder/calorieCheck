const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

mongoose.connect(process.env.Mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect("mongodb://localhost:27017/data");

const calorieSchema = {
  key: String,
  name: String,
  calories: Number,
  date: String,
};
const calorie = mongoose.model("calorie", calorieSchema);

///////////////////////////////////////////////////Create Cover Page//////////////////////////////////////////////////////////

///////////////////////////////////////////////////Requests targeting all articlmeal//////////////////////////////////////////////////////////
app
  .route("/calories")
  .get((req, res) => {
    calorie.find({}, (err, calories) => {
      if (!err) {
        res.send(calories);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const cal = new calorie({
      name: req.body.name,
      calories: req.body.calories,
      date: req.body.date,
    });
    cal.save((err) => {
      if (!err) {
        res.send("success");
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    calorie.deleteMany({}, (err) => {
      if (!err) {
        res.send("success");
      } else {
        res.send(err);
      }
    });
  });

///////////////////////////////////////////////////Requests targeting specific meals//////////////////////////////////////////////////////////

app.route("/calories/:name").delete((req, res) => {
  calorie.deleteOne({ _id: req.params.name }, (err) => {
    if (!err) {
      res.send("Deleted.");
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("The server is active");
});
