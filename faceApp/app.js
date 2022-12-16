const express = require('express');
const bodyParser = require('body-parser');

const { computerVision } = require('./index')

const app = express();
app.use(bodyParser.json());

const port = 8000;


app.post('/image-analysis', (req, res) => {
    if (req.body.image) {
        computerVision(req.body.image)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(err => res.status(500).send(err))

    }
    else {
        res.status(400).send("Invalid request")
    }
})

app.listen(port, () => {
    console.log("Server running at " + port);
})