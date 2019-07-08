const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const addUserRoutes = require("./routes/user-route");
const addMailRoutes = require("./routes/mail-route");

const App = express();

App.use(bodyParser.json());

App.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true // enable set cookie
  })
);
App.use(
  session({
    secret: "puki muki",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

const PORT = process.env.PORT || 3001;
App.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
addUserRoutes(App);
addMailRoutes(App);
