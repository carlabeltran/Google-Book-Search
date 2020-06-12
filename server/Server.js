const dotEnv = require("dotenv");
dotEnv.config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./Routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);


//CONNECT TO MONGOOSE/MONGODB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => handleError(error));
//MONGOOSE CONNECTION STORED IN VARIABLE DB
mongoose.connection.on("error", (error) => {
  console.log("Mongoose Connection Error!: ", error);
}).once("open", () => console.log("Mongoose Connection Successful!!"));


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT}/ `);
});