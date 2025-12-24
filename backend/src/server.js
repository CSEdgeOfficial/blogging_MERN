require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/mern_blog_dev";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  })
  .catch((err) => {
    console.error("DB connection error", err);
    process.exit(1);
  });
