const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const env = require("dotenv");

mongoose
  .connect(env.config().parsed.MONGODBURL || "mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((d) => {
    console.log("Db Connected successfully");
  })
  .catch((err) => mongoose.disconnect());
// mongoose.set('useCreateIndex', true);
module.exports = { mongoose };
