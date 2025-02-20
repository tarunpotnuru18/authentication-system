import nodemailer from "nodemailer";

import dotenv from "dotenv";

import {
  authenticationTemplate,
  forgotPasswordTemplate,
  loginTemplate,
  passwordResetSuccessfulTemplate,
  verificationTemplate,
} from "./emailTemplate.js";

dotenv.config();

let transporter;

try {
  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",

    port: process.env.GMAIL_PORT,

    secure: false, // true for port 465, false for other ports

    auth: {
      user: process.env.GMAIL_USER,

      pass: process.env.GMAIL_PASS,
    },
  });
} catch (error) {
  console.log(error.message, "error from the creating transporting part");

  throw new Error("error while sending email");
}

// async..await is not allowed in global scope, must use a wrapper

export async function sendVerificationEmail(
  email,

  userName,

  token
) {
  try {
    const info = await transporter.sendMail({
      from: '"Tarun potnuru" ', // sender address

      to: "tarunpotnuru18+nodemailer@gmail.com," + email,

      subject: "Verification Email", // list of receivers

      html: verificationTemplate

        .replace("<user-name>", userName)

        .replace("<actual-token>", token), // html body
    }); // console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err.message, "error while sending verification mail");

    throw new Error("error while sending verification email");
  }
}

export async function sendAuthenticationEmail(
  email,

  userName,

  token
) {
  try {
    const info = await transporter.sendMail({
      from: '"Tarun potnuru" ', // sender address

      to: "tarunpotnuru18+nodemailer@gmail.com," + email,

      subject: "AUthentication Email", // list of receivers

      html: authenticationTemplate

        .replace("<user-name>", userName)

        .replace("<actual-token>", token), // html body
    }); // console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err.message, "error while sending authentication mail");

    throw new Error("error while sending authentication email");
  }
}

export async function sendForgotPasswordEmail(
  email,

  userName,

  link
) {
  try {
    const info = await transporter.sendMail({
      from: '"Tarun potnuru" ', // sender address

      to: "tarunpotnuru18+nodemailer@gmail.com," + email,

      subject: "forgotpassword Email", // list of receivers

      html: forgotPasswordTemplate

        .replace("<user-name>", userName)

        .replaceAll(
          "[actual-link]",
          `http://localhost:5173/reset-password/${link}`
        ), // html body
    }); // console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err.message, "error while sending forgotpassword mail");

    throw new Error("error while sending forgotpassword email");
  }
}

export async function sendResetPasswordEmail(email, userName) {
  try {
    const info = await transporter.sendMail({
      from: '"Tarun potnuru" ', // sender address

      to: "tarunpotnuru18+nodemailer@gmail.com," + email,
      subject: "reset Email", // list of receivers
      html: passwordResetSuccessfulTemplate.replace("<user-name>", userName), // html body
    }); // console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error.message, "error from reset email");
    throw new Error("error while sending reset email");
  }
}

export async function sendloginEmail(email, userName) {
  try {
    const info = await transporter.sendMail({
      from: '"Tarun potnuru" ', // sender address

      to: "tarunpotnuru18+nodemailer@gmail.com," + email,
      subject: "login Email", // list of receivers
      html: loginTemplate.replace("<user-name>", userName), // html body
    }); // console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error.message, "error from reset email");
    throw new Error("error while sending login email");
  }
}
