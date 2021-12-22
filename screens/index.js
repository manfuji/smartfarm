
const fs = require('fs');
const TrainingApi = require("@azure/cognitiveservices-customvision-training");
const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");

const predictionKey = "3171926ac7e04c99a49627da4d91bcb7";
const predictionResourceId = "/subscriptions/8bca83d0-d20e-4a7f-a9ee-0d1a089aa6ea/resourceGroups/SmartFarm/providers/Microsoft.CognitiveServices/accounts/SmartFarmHtuRobotics";
const predictionEndpoint = "https://smartfarmhturobotics-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/80ae1af6-f507-446f-80b8-e64c4200a4d4/classify/iterations/Iteration1/image";


const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
const predictor = new PredictionApi.PredictionAPIClient(predictor_credentials, predictionEndpoint);
// </snippet_auth>


(async () => {
   
 

    const testFile = fs.readFileSync("./assets/test1.jpg");

    const results = await predictor.classifyImage("80ae1af6-f507-446f-80b8-e64c4200a4d4", "Iteration1", testFile);

    // Show results
    console.log("Results:");
    results.predictions.forEach(predictedResult => {
        console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
    });
   
})()

