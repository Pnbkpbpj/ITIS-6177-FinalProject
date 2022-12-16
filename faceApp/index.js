'use strict';

const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const key = process.env.KEY;
const endpoint = process.env.ENDPOINT
//const key = '1c75d17c6ede48c2a237c3d373c0b080';
//const endpoint = 'https://pnbk-si-final-project.cognitiveservices.azure.com/';

const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

exports.computerVision = function (imgLink) {
    return new Promise((resolve, reject) => {
        computerVisionClient.analyzeImage(imgLink, { visualFeatures: ['Description', 'Objects',] })
            .then(results => {
                resolve(results);
            }).catch(err => reject(err))
    })
}



