'use strict';

const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const { ComputerVisionClient } = require('@azure/cognitiveservices-computervision');
const { ApiKeyCredentials } = require('@azure/ms-rest-js');

const key = process.env.KEY;
const endpoint = process.env.ENDPOINT;

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



