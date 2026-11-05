const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('I LOVE YOU BANGARAM');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Application running on port 3000');
});
