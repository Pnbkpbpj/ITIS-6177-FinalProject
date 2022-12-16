const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { computerVision } = require('./index')

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
 *     summary: Analyze an image to get description, objects in the image and tags realted to the image
 *     description: The Api analyzes the input image and gives the description of image,objects detected in the image
 *       - application/json
 *     responses:
 *       200:
 *         description: Result of image analysis for the input image
 *       400:
 *         description: Invalid Input, must be valid URL to the image
 *       500:
 *         description: For any server errors, please try again
 *     parameters:
 *     - in: "body"
 *       name: "image"
 *       description: "Input Image URL"
 *       required: true
 *       schema:
 *         properties:
 *           text:
 *             type: string
 *             example: "https://miro.medium.com/max/1192/1*JCqgJ2JDDyQeBA2IGKxlJQ.png"
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