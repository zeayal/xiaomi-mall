const express = require("express");
const router = express.Router();
const User = require("../models/users");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

mongoose.connect("mongodb://localhost:27017/m_mail");

router.post("/signUp", async (req, res) => {
  const { name, password, phone, avatarUrl } = req.body;

  //   校验手机号是否已存在
  const users = await User.find({
    phone,
  });

  if (users?.length) {
    // 手机号已存在
    res.json({
      code: 1,
      msg: "手机号已存在",
      data: null,
    });
  }

  const user = new User({
    userId: uuidv4(),
    name,
    password,
    phone,
    avatarUrl,
  });

  mongoose.connection.on("connnected", function () {
    console.log("MongoDB connected success.");
  });

  mongoose.connection.on("disconnected", function () {
    console.log("MongoDB connected failed");
  });

  try {
    await user.save();

    res.json({
      code: 0,
      msg: "注册成功",
      data: {
        userInfo: user,
      },
    });
  } catch (e) {
    console.log("error", JSON.stringify(e));
    res.json({
      code: 1,
      msg: e?.message,
      data: null,
    });
  }
});

router.post("/login", (req, res) => {
  res.json({
    code: 0,
    msg: "success",
    data: {
      token: 111111,
      userName: "zeayal",
    },
  });
});

module.exports = router;
