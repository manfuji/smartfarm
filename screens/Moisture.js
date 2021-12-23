import React from "react";
import { View, Text, ImageBackground, SafeAreaView, ScrollView } from "react-native";
let shuffles = require("shuffle-array");
import bg from "../assets/bg.jpg";
import tw from "tailwind-rn";

export default function Moisture() {
    // const HumidityArr = [33, 34, 31, 35, 36,33, 35, 36.6, 35.3, 36.9];
    const SoilMoitureArr1 = [350, 250, 300, 250,450,355,450,200,370,220];
    const SoilMoitureArr = [350, 250, 300, 250,450,355,450,200,370,220];
    const SoilMoitureArr2 = [350, 250, 300, 250,450,355,450,200,370,220];

    // const TemperatureArr = [33.4, 34.9, 31.1, 35.4, 36.0,33, 35.2, 36.6, 35.3, 36.9];
  
    shuffles(SoilMoitureArr);
    shuffles(SoilMoitureArr1);
    shuffles(SoilMoitureArr2);

    // shuffles(TemperatureArr);
  
    setTimeout(function () {
      // location.reload();
    }, 10000);
  
    // let retnum1 = HumidityArr[1];
    let retnum1 = SoilMoitureArr[1];
    let retnum2 = SoilMoitureArr1[1];
    let retnum3 = SoilMoitureArr2[1];

    // let retnum3 = TemperatureArr[1];
    let textstyle = "flex font-semibold text-xl font-bold text-gray-700 text-center tracking-widest uppercase";
    let textstyle2 = "flex font-semibold text-2xl font-bold text-gray-700 text-center";
  
  
    return (
      <ImageBackground source={bg} resizeMode="cover" style={tw("flex-1")}>
          <SafeAreaView style={tw("flex-1")}>
          <ScrollView>
        <View style={tw("flex-1 m-10 bg-white h-64 py-6 rounded mt-14 pt-10 opacity-90")}>
          <View style={tw("flex text-white text-center ")}>
            <Text style={tw("font-bold text-2xl uppercase pb-4 text-center text-gray-700")}>
              Compartment One
            </Text>
            <Text style={tw(textstyle)}>Soil Moisture: </Text><Text style={tw(textstyle2)}>{retnum1}</Text>
            <Text style={tw(textstyle)}>Action: </Text>{retnum1<600?<Text style={tw(textstyle2)}>Plant Moisture is in Good shape </Text>:<Text style={tw(textstyle2)}>Plant needs water</Text>}
            {/* <Text style={tw(textstyle)}>Temperature:</Text><Text style={tw(textstyle2)}> {retnum3}</Text> */}
          </View>
        </View>
  
        <View style={tw("flex-1 m-10 bg-white h-64 py-10 rounded mt-8 pt-10 opacity-90")}>
          <View style={tw("flex text-white text-center ")}>
            <Text style={tw("font-bold text-2xl uppercase pb-4 text-center text-gray-700")}>
              Compartment Two
            </Text>
            <Text style={tw(textstyle)}>Soil Moisture: </Text><Text style={tw(textstyle2)}>{retnum2}</Text>
            <Text style={tw(textstyle)}>Action: </Text>{retnum1<600?<Text style={tw(textstyle2)}>Plant Moisture is in Good shape </Text>:<Text style={tw(textstyle2)}>Plant needs water</Text>}
             {/* <Text style={tw(textstyle)}>Temperature:</Text><Text style={tw(textstyle2)}> {retnum3}</Text> */}
          </View>
        </View>
        <View style={tw("flex-1 m-10 bg-white h-64 py-10 rounded mt-8 pt-10 opacity-90")}>
          <View style={tw("flex text-white text-center ")}>
            <Text style={tw("font-bold text-2xl uppercase pb-4 text-center text-gray-700")}>
              Compartment Three
            </Text>
            <Text style={tw(textstyle)}>Soil Moisture: </Text><Text style={tw(textstyle2)}>{retnum3}</Text>
            <Text style={tw(textstyle)}>Action: </Text>{retnum1<600?<Text style={tw(textstyle2)}>Plant Moisture is in Good shape </Text>:<Text style={tw(textstyle2)}>Plant needs water</Text>}
            {/* <Text style={tw(textstyle)}>Temperature:</Text><Text style={tw(textstyle2)}> {retnum3}</Text> */}
          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
  