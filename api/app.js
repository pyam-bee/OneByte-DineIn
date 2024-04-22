const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/staff", async (req, res) => {
    const { text, password } = req.body;

    // Basic request validation
    if (!text || !password) {
        return res.status(400).json({ message: "Text and password are required" });
    }

    try {
        const existingStaff = await collection.findOne({ text });

        if (existingStaff) {
            res.status(200).json({ message: "exist" });
        } else {
            res.status(404).json({ message: "notexist" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/", async (req, res) => {
    const { text, email } = req.body;

    // Basic request validation
    if (!text || !email) {
        return res.status(400).json({ message: "Text and email are required" });
    }

    try {
        const existingGuest = await collection.findOne({ text });

        if (existingGuest) {
            res.status(200).json({ message: "exist" });
        } else {
            await collection.insertOne({ text, email });
            res.status(201).json({ message: "created" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

const PORT = process.env.PORT || 8000;

const mongoURI = "mongodb+srv://rohanpradhannnn:8zscxNKJouJwf8hY@cluster0.e3punho.mongodb.net/";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });
