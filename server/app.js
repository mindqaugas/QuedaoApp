const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });
var cors = require('cors')
const app = express();
const path  = require('path');
const userRoutes = require("./routes/userRoutes");
const toursRoutes = require("./routes/toursRoutes");
const citiesRoutes = require("./routes/citiesRoutes");


app.use(cors());
app.use('/public/tourfotos',express.static(path.join('public', 'tourfotos')));
var jsonParser = bodyParser.json()
// extended false leidzia parse'inti non default features
var urlencodedParser = bodyParser.urlencoded({ extended: true })


mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

app.use("/api/auth/", jsonParser , userRoutes);
app.use("/api/tours/", jsonParser , toursRoutes);
app.use("/api/cities/", jsonParser , citiesRoutes);
// app.use('/api/settings', settingsRoutes);

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })

  .on("error", (e) => console.log(e));
mongoose.Promise = global.Promise;
