import nodemailer from "nodemailer";

import dotenv from "dotenv";

import { verificationTemplate } from "./emailTemplate.js";

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
  email = "deepikapotnuru4@gmail.com",

  userName = "deepika",

  token = "143"
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
