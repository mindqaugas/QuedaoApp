const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const HttpError = require("../models/ErrorModel");
var nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/.env" });


var transport = nodemailer.createTransport({
  // host: "smtp.mailtrap.io",
  // port: 2525,
  // auth: {
  //   user: "f676fbee7ff238",
  //   pass: "91e177d4c5e8ea"
  // }
  service: 'gmail',
  auth: {
    user: 'daugenasm@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

// exports.userCreateReturn = async (req, res, next) => {
//   // console.log(req.body.user, 'bodis');
//   if (req.body.user != null) {
//     // console.log(req.body.user, "body!!!!")
//     let userid = req.body.user;
//     const userFind = await User.findById(userid);
//     res.json(userFind);
//   } else {
//     // let ran = Math.floor(Math.random() * 11000)
//     const newUser = new User({
//       id: new mongoose.Types.ObjectId(),
//       language: 'en',
//       currency: 'EUR',
//       email: ''
//       //   email:`test${ran}@email.com`
//     });
//     await newUser.save();
//     res.json(newUser);
//   }
// };

exports.userSettingsUpdate = async (req, res, next) => {
  console.log(req.body.data, "put body");
  let userId = req.body.data._id;
  let val = req.body.data;
  if (val.password != undefined) {
    let hashedPassword;
    hashedPassword = await bcrypt.hash(val.password, 12);
    const user = await User.findById(userId);
    if (user) {
      user.notify = val.notify;
      user.sound = val.sound;
      user.light = val.light;
      user.vibrate = val.vibrate;
      user.timeFrame = val.timeFrame;
      user.currency = val.currency;
      user.notificationTime = val.notificationTime;
      user.email = val.email;
      user.password = hashedPassword;
      await user.save();
      res.json(user);
    }
  } else {
    const user = await User.findById(userId);
    if (user) {
      user.notify = val.notify;
      user.sound = val.sound;
      user.light = val.light;
      user.vibrate = val.vibrate;
      user.timeFrame = val.timeFrame;
      user.currency = val.currency;
      user.notificationTime = val.notificationTime;
      user.email = val.email;

      await user.save();
      res.json(user);
    }
  }
};

exports.userRegister = async (req, res, next) => {
  const { name, surName, email, password, language, userType } = req.body.data;
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    const error = new HttpError("Could not create user - Existing email", 409);
    return next(error);
  }
  let hashedPassword;
  sixDigits = Math.floor(100000 + Math.random() * 900000);
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Could not create user - Password", 500);
    return next(error);
  }
  const registerData = new User({
    name: name,
    surName: surName,
    email: email,
    language: language,
    password: hashedPassword,
    secretCode: sixDigits,
    userType: userType,
  });

  try {
    await registerData.save();

    // jwt.sign({id, email}, process.env.JWT_EMAIL_TOKEN_SECRET, {expiresIn: '1d'}, (err, emailToken) => {
    //     const url = `http://localhost:4000/confirmation/${emailToken}`;
    var mailOptions = {
      from: "youremail@gmail.com",
      to: "daugenasm@inbox.lt",
      subject: "Confirmation Email",
      html: `Confirm your six digit code ${registerData.secretCode}`,
    };

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // });
  } catch (err) {
    const error = new HttpError("Could not create user - Save", 500);
    return next(error);
  }
  console.log(registerData.secretCode);
  res.status(201).json({
    confirmed: registerData.confirmed,
    userID: registerData.id,
    email: registerData.email,
    secretCode: registerData.secretCode,

  });
};

exports.userVerifyCode = async (req, res, next) => {
  const { email, secretCode } = req.body.data;
  console.log(req.body.data, "VERIFY CODE");
  try {
    const existingCode = await User.findOne({ email: email });
    if (existingCode.secretCode == secretCode) {
      await User.updateOne({ email: email }, { confirmed: true });
      await User.updateOne({ email: email }, { secretCode: null });
      const updatedUser = await User.findOne({ email: email });

      let token;
      try {
        token = jwt.sign(
          { userId: existingCode._id, email: existingCode.email },
          process.env.JWT_TOKEN_SECRET,
          { expiresIn: "24h" }
        );
      } catch (err) {
        const error = new HttpError("Could not create token - No token", 500);
        return next(error);
      }
      res.status(200).json({
        confirmed: updatedUser.confirmed,
        message: "Confirmed. Now you may log in.",
      });
    } else {
      res.status(200).json({ message: "Secret Code is equal to null" });
    }
  } catch (err) {
    const error = new HttpError("Could not find secret code - secretCode", 500);
    return next(error);
  }
};

exports.userResendCode = async (req, res, next) => {
  const { email } = req.body.data;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      sixDigits = Math.floor(100000 + Math.random() * 900000);
      await User.updateOne({ email: email }, { secretCode: sixDigits });
      var mailOptions = {
        from: "youremail@gmail.com",
        to: "myfriend@yahoo.com",
        subject: "Confirmation Email",
        html: `Confirm your six digit code ${sixDigits}`,
      };

      transport.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.status(200).json({ message: "Now you have to verify your code" });
    } else {
      const error = new HttpError("Could not find user - Wrong Email", 500);
      return next(error);
    }
  } catch {
    const error = new HttpError("Could not send code - No Secretcode", 500);
  }
};

exports.userSendPassword = async (req, res, next) => {
  const { email } = req.body.data;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    let randomString = Math.random().toString(36).substring(2);
    hashedPassword = await bcrypt.hash(randomString, 12);
    await User.updateOne({ email: email }, { password: hashedPassword });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "myfriend@yahoo.com",
      subject: "Confirmation Email",
      html: `This is your new password -  ${randomString}`,
    };

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.status(200).json({ message: "Now you may login." });
  } else {
    const error = new HttpError("Could not find user - Wrong Email", 500);
  }
};

exports.userResetPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    if (existingUser.password === password) {
      let token;
      try {
        token = jwt.sign(
          { userId: existingUser.id, email: existingUser.email },
          process.env.JWT_TOKEN_SECRET,
          { expiresIn: "24h" }
        );
      } catch (err) {
        const error = new HttpError("Could not login", 500);
        return next(error);
      }
      res.json({
        userId: existingUser.id,
        email: existingUser.email,
        token: token,
      });
    }
  } else {
    const error = new HttpError("Password did not match - Match Password", 500);
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body.data;
console.log(req.body, "BODY DATA");
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Could not login try again", 500);
    next(error);
  }
  if (!existingUser) {
    console.log(existingUser);
    const error = new HttpError("Credentials are wrong - User", 401);
    return next(error);
  }
  isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch {
    const error = new HttpError(
      "Passwords is not correct - Password is not valid",
      500
    );

    return next(error);
  }
  if (!isValidPassword) {
    console.log(password);
    console.log(existingUser.password);
    const error = new HttpError("Password is not valid - password false", 401);
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.JWT_TOKEN_SECRET
    );
  } catch (err) {
    const error = new HttpError(
      "Prisijungti nepavyko, mėginkite dar kartą",
      500
    );
    return next(error);
  }
  res.json({
    _id: existingUser.id,
    email: existingUser.email,
    confirmed: existingUser.confirmed,
    token: token,
  });
};
