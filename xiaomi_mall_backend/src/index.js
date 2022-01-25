const express = require("express");
const app = express();
const expressJwt = require("express-jwt");
const secret = "secret12345"; // 签名秘钥
const goods = require("./routes/goods");
const users = require("./routes/users");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   expressJwt({
//     secret,
//   }).unless({
//     path: ["/users/login", "/users/signup"],
//   })
// );

app.use("/users", users);
app.use("/goods", goods);

const PORT = 9000;
app.listen(PORT, () => {
  console.log("app is running http://localhost:3000");
});
