const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

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
