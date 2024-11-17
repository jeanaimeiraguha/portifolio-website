/* This is simple server generated with js working as chatboot but not ... */




const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files if HTML/CSS are in a public folder

// Chatbot response endpoint
app.post('/chat', (req, res) => {
    const { message } = req.body;
    let reply = "I'm here to help!";

    // Simple bot logic
    if (message.toLowerCase().includes('hello')) {
        reply = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes('services')) {
        reply = "I offer web development, graphic design, and SEO services!";
    } else if (message.toLowerCase().includes('portfolio')) {
        reply = "You can view my portfolio in the Portfolio section.";
    } else if (message.toLowerCase().includes('contact')) {
        reply = "Feel free to reach out via the contact form!";
    }

    res.json({ reply });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
