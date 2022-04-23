const express = require("express");
const request = require("request-promise");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/" , ( req, res) => {
    res.send("Welcome to Amazon Scraper API");
});

app.listen( PORT, () => console.log(`Server is running on PORT : ${PORT}`) );