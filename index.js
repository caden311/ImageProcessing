
async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    //const [result] = await client.labelDetection('./assets/timesquare.jpg');

    // Performs text detection on the image file
    // const [result] = await client.textDetection('./assets/timesquare.jpg');

    // Performs face detection on the image file
    const [result] = await client.faceDetection('./assets/me.jpg');


    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
}
quickstart();





