const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "sacredpxl@gmail.com", // generated ethereal user
    pass: "kwwmvofbgfqctpic", // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, name, message } = req.body;
  console.log(email, name, message);

  const text = `Dear ${name},

Thank you for reaching out to Sacred Pixel, your trusted partner for innovative marketing solutions. We appreciate your interest in our services and look forward to assisting you with your marketing needs.

At Sacred Pixel, we specialize in providing bespoke marketing solutions tailored to meet the unique requirements of businesses like yours. Whether it's digital marketing, SEO optimization, graphic designing, video editing, or email marketing, our team of experts is dedicated to delivering top-notch services that drive results and enhance your digital presence.

Best regards,

Sacred Pixel`;

  const userMail = {
    from: process.env.SMTP_MAIL, // Change this to your name or your company's name
    to: email,
    subject:
      "Thank You for Contacting Sacred Pixel - Your Trusted Marketing Partner",
    text: text,
  };
  transporter.sendMail(userMail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
