const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://tharakakumarathunga05:0GEFEygv6To9QK2O@cluster0.2lpma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connection = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("MongoDB Connected");
  } catch (e) {
    console.error(e.message);
    process.exit();
  }
};

module.exports = connection;
