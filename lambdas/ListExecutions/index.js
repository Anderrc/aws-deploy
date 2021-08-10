"use strict";
// AWS SDK
const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline();
exports.handler = async function (event, context, callback) {
    const params = {
        pipelineName: event.pipeline
    };
    return codepipeline.listPipelineExecutions(params).promise();
};
