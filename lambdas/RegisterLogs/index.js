const AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = async (event, context, callback) => {
    /*
        HANDLE DATA WHICH ARE SENT FROM CLINT APP.
        HERE I JUST ADD STATIC DATA 
    */
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    const s3Bucket = 'microfront-2/logs'; // replace with your bucket name
    const objectName = `log-${day}-${month}-${year}.json`; // File name which you want to put in s3 bucket
    const objectData = JSON.stringify(event); // file data you want to put
    const objectType = 'application/json'; // type of file
    try {
        // setup params for putObject
        const params = {
            Bucket: s3Bucket,
            Key: objectName,
            Body: objectData,
            ContentType: objectType,
        };
        const result = await s3.putObject(params).promise();
        console.log(`File uploaded successfully at https:/` + s3Bucket + `.s3.amazonaws.com/` + objectName);
        return result;
    } catch (error) {
        console.log('error');
    }

};