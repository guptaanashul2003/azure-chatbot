const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const faqData = require('./faqData.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/ask', (req, res) => {
    const question = req.body.question.toLowerCase();
    const answer = faqData[question] || "Sorry, I don't have an answer for that.";
    res.json({ answer });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
