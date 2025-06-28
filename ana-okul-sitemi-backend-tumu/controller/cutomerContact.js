const nodemailer = require("nodemailer");
const {
  customerContactValidation,
} = require("../utils/validations/customerContactValidation");
const asyncHandler = require("express-async-handler");
const customerContact = asyncHandler(async (req, res) => {
  const { error } = customerContactValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.CONTACT_EMAIL,
    to: process.env.CONTACT_EMAIL,
    subject: `İletişim formu mesajı - ${req.body.email}`,
    text: `Yeni bir iletişim formu mesajı alındı.\n\nGönderen: ${req.body.email}\n\nMesaj:\n${req.body.description}`,
    replyTo: req.body.email,
  };

  await transporter.sendMail(mailOptions);
  res.status(200).json({ message: "Mesaj gönderildi" });
});
module.exports = { customerContact };
