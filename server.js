const express = require("express");
const errorMiddleware = require("./middleware");
const routes = require("./routes/api/countryList");
const db = require("./databaseHandler");
var cors = require("cors");
var path = require("path");

const app = express(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server Started"));

app.use(cors());

db.connectToDatabase();

app.use(express.static(path.join(__dirname, "frontend/build")));
app.use("/api", routes);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// app.get("/", (req, res) => {
//   res.json({
//     message: "Root of Server"
//   });
// });

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);
