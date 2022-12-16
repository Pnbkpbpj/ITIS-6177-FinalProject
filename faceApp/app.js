const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//const { computerVision } = require('./index')

const app = express();
app.use(bodyParser.json());

const port = 8000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Final Project APIs",
            description: "List of APIs created for final project",
            contact: {
                name: "Poojitha Panabaka",
                email: "ppanabak@uncc.edu"
            },
            servers: ["http://0.0.0.0:8000"]
        }
    },
    apis: ["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/v1/image-analysis:
 *   post:
 *     summary: Get sentiment of input text which is in any language
 *     description: Add the text or the conservation of anylanguage for which context sentiment has to be identified
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Result of sentimental analysics along with identified language
 *       400:
 *         description: Invalid Input, must be JSON object with text attribute
 *       500:
 *         description: For any server errors, please try again
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Input Text"
 *       required: true
 *       schema:
 *         properties:
 *           text:
 *             type: string
 *             example: "I had the best day of my life."
 */
app.post('/api/v1/image-analysis', (req, res) => {
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