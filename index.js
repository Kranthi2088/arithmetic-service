const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/add/:n/:m', (req, res) => {
    const n = Number(req.params.n);
    const m = Number(req.params.m);
    const sum = n + m;
    console.log(`Adding ${n} and ${m} to get ${sum}`);

    if (!isNaN(n) && !isNaN(m)) {
        res.json(sum);
    } else {
        res.status(400).send('Invalid input: Please ensure both parameters are numbers.');
    }
});

app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port + "/add/");
});
