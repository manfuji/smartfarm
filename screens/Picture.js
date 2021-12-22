import React, { useState, useEffect } from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";
import tw from "tailwind-rn";
// import * as cvstfjs from "@microsoft/customvision-tfjs";
// import imodel from "../models/model.json";

// const fs = require('fs');
const TrainingApi = require("@azure/cognitiveservices-customvision-training");
const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");

const predictionKey = "3171926ac7e04c99a49627da4d91bcb7";
const predictionResourceId = "/subscriptions/8bca83d0-d20e-4a7f-a9ee-0d1a089aa6ea/resourceGroups/SmartFarm/providers/Microsoft.CognitiveServices/accounts/SmartFarmHtuRobotics";
const predictionEndpoint = "https://smartfarmhturobotics-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/80ae1af6-f507-446f-80b8-e64c4200a4d4/classify/iterations/Iteration1/image";


const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
const predictor = new PredictionApi.PredictionAPIClient(predictor_credentials, predictionEndpoint);
// </snippet_auth>

export const CameraModule = (props) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        props.setModalVisible();
      }}
    >
      <Camera
        style={{ flex: 1 }}
        ratio="16:9"
        flashMode={Camera.Constants.FlashMode.on}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              icon="close"
              style={{ marginLeft: 12 }}
              mode="outlined"
              color="white"
              onPress={() => {
                props.setModalVisible();
              }}
            >
              Close
            </Button>
            <TouchableOpacity
              onPress={async () => {
                if (cameraRef) {
                  let photo = await cameraRef.takePictureAsync();
                  props.setImage(photo);
                  props.setModalVisible();
                }
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: "white",
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 16,
                  marginTop: 16,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "white",
                    height: 40,
                    width: 40,
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
            <Button
              icon="axis-z-rotate-clockwise"
              style={{ marginRight: 12 }}
              mode="outlined"
              color="white"
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              {type === Camera.Constants.Type.back ? "Front" : "Back "}
            </Button>
          </View>
        </View>
      </Camera>
    </Modal>
  );
};

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const model = new cvstfjs.ObjectDetectionModel();
  // await model.loadModelAsync(imodel);
  // const Imageresult = await model.executeAsync(image);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          borderRadius: 100,
          marginBottom: 8,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
      </View>
      <View style={tw("flex")}>
        <Button
          style={{ width: "30%", marginTop: 16 }}
          icon="camera"
          mode="contained"
          onPress={() => {
            setShowCamera(true);
          }}
        >
          Camera
        </Button>
        <Button
          style={{ width: "30%", marginTop: 16 }}
          icon="file"
          onPress={(async () => {
   
 

            // const testFile = fs.readFileSync(image);
        
            const results = await predictor.classifyImage("80ae1af6-f507-446f-80b8-e64c4200a4d4", "Iteration1", image);
        
            // Show results
            console.log("Results:");
            results.predictions.forEach(predictedResult => {
                console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
            });
           
        })()}
        >
          Upload
        </Button>
      </View>
      {camera && (
        <CameraModule
          showModal={camera}
          setModalVisible={() => setShowCamera(false)}
          setImage={(result) => setImage(result.uri)}
        />
      )}
    </View>
  );
}
