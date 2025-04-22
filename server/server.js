const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

const fs = require("fs");
const path = require("path");

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, subject, message, emailAddress, phone, name, lastname, address, city }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.sanly.tm",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "info@durnukly.com.tm",
        pass: "Durnukly2024!",
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
    });

    const mail_configs = {
      from: "info@durnukly.com.tm",
      to: email,
      name: name,
      lastname: lastname,
      address: address,
      city: city,
      phone: phone,
      subject: subject,
      emailAddress: emailAddress,
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333; border: 1px solid #e0e0e0; border-radius: 10px;">
    <h2 style="text-align: center; color: #ff6600; margin-bottom: 20px;">Новое сообщение</h2>
    <div style="padding: 10px; background-color: #fff; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <p><strong>Имя отправителя:</strong> ${name}</p>
      <hr>
      <p><strong>Телефон отправителя:</strong> ${phone}</p>
      <hr>
       <p><strong>E-mail адрес отправителя:</strong> ${emailAddress}</p>
      <hr>
      <p><strong>Письмо отправителя:</strong></p>
      <div style="padding: 15px; border-left: 4px solid #ff6600; background-color: #f0f0f0; border-radius: 5px;">
        ${message}
      </div>
     
     <div style="padding-top: 25px; margin: 0 auto;">    
          <a target="_blank" href="mailto:${emailAddress}" style="padding-top: 10px; margin: 0 auto; padding: 10px 20px; font-size: 16px; background-color: #ff6600; color: white; border: none; border-radius: 5px; cursor: pointer;">
              Ответить
          </a>
     </div>

    </div>

     
    <p style="padding-top: 20px; font-size: 0.9em; color: #777;">Это сообщение было отправлено с веб-сайта <a href="https://ho.com.tm/" style="color: #ff6600; text-decoration: none;">ho.com.tm</a></p>
  </div>
    `,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
        return reject({ message: `An error has occurred: ${error.message}`, error });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.get("/api/mail", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => {
      console.error("Error in sendEmail:", error);
      res.status(500).send(error.message);
    });
});

// Маршрут для получения списка кондиционеров
app.get("/api/air-conditioners", (req, res) => {
  // Указываем правильный путь к файлу airConditioners.json
  const filePath = path.join(__dirname, "data", "airConditioners.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка при чтении файла:", err);
      return res.status(500).json({ message: "Ошибка чтения файла" });
    }

    try {
      const airConditioners = JSON.parse(data);
      res.json(airConditioners);
    } catch (error) {
      console.error("Ошибка при парсинге JSON:", error);
      res.status(500).json({ message: "Ошибка обработки данных" });
    }
  });
});



app.listen(5000, () => console.log("Сервер запущен на порту 5000"));
