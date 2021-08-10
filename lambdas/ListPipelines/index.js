"use strict";
// AWS SDK
const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline();
exports.handler = async function (event, context, callback) {
    return codepipeline.listPipelines().promise();
}