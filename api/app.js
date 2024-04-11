const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/staff", async (req, res) => {
    const { text, password } = req.body;
    try {
        const check = await collection.findOne({ text: text });
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

app.post("/", async (req, res) => {
    const { text, email } = req.body;
    const data = { text: text, email: email };
    try {
        const check = await collection.findOne({ text: text });
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (e) {
        res.json("fail");
    }
});

const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb://localhost:27017/Staffs")
    .then(() => {
        console.log("mongodb connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('failed to connect to MongoDB:', err);
    });
