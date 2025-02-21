const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 5050 || process.env.PORT;
const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  cors({
    origin: "https://thunderous-bublanina-d574f5.netlify.app",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://rainbow-empanada-dcbdab.netlify.app/"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// });
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
