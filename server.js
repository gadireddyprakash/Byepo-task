const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/super", require("./routes/super"));
app.use("/admin", require("./routes/admin"));
app.use("/flags", require("./routes/flags"));
app.use("/feature", require("./routes/feature"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    console.log("Mongo connected");

    app.listen(process.env.PORT, () => {

      console.log(
        `Server running on ${process.env.PORT}`
      );
    });

  })
  .catch((err) => {

    console.log(err);
  });