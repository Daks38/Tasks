// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();

// const mongo =  mongoose.connect(process.env.URI)
//   .then(() => {
//     console.log("Mongo est fonctionnel...");
//   })
//   .catch((err) => console.log(err));

// module.exports = mongo
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Mongo est fonctionnel...");
  } catch (error) {
    console.error("Erreur MongoDB :", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
