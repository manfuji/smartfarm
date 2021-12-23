import React from "react";
import { View, Text, ImageBackground, SafeAreaView, ScrollView } from "react-native";
let shuffles = require("shuffle-array");
import bg from "../assets/bg.jpg";
import tw from "tailwind-rn";

export default function Humidity() {
  // const HumidityArr = [33, 34, 31, 35, 36,33, 35, 36.6, 35.3, 36.9];
    const HumidityArr = [33, 34, 31, 35, 36,33, 35, 36.6, 35.3, 36.9];
    const HumidityArr2 = [33, 34, 31, 35, 36,33, 35, 36.6, 35.3, 36.9];
    const HumidityArr3 = [33, 34, 31, 35, 36,33, 35, 36.6, 35.3, 36.9];

    // const TemperatureArr = [33.4, 34.9, 31.1, 35.4, 36.0,33, 35.2, 36.6, 35.3, 36.9];
  

  shuffles(HumidityArr2);
  shuffles(HumidityArr);
  shuffles(HumidityArr3);

  setTimeout(function () {
    // location.reload();
  }, 10000);

  // let retnum1 = HumidityArr[1];
  let retnum1 = HumidityArr[1];
  let retnum2 = HumidityArr2[1];
  let retnum3 = HumidityArr3[1];

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
          <Text style={tw(textstyle)}>Humidity: </Text><Text style={tw(textstyle2)}>{retnum1}</Text>
          <Text style={tw(textstyle)}>Action: </Text>{retnum1>36.4?<Text style={tw(textstyle2)}>Plant need moisture</Text>:<Text style={tw(textstyle2)}>Plants Humidity is good</Text>}

        </View>
      </View>

      <View style={tw("flex-1 m-10 bg-white h-64 py-10 rounded mt-8 pt-10 opacity-90")}>
        <View style={tw("flex text-white text-center ")}>
          <Text style={tw("font-bold text-2xl uppercase pb-4 text-center text-gray-700")}>
            Compartment Two
          </Text>
          <Text style={tw(textstyle)}>Humidity: </Text><Text style={tw(textstyle2)}>{retnum2}</Text>
          <Text style={tw(textstyle)}>Action: </Text>{retnum1>36.4?<Text style={tw(textstyle2)}>Plant need moisture</Text>:<Text style={tw(textstyle2)}>Plants Humidity is good</Text>}
        
        </View>
      </View>
      <View style={tw("flex-1 m-10 bg-white h-64 py-10 rounded mt-8 pt-10 opacity-90")}>
        <View style={tw("flex text-white text-center ")}>
          <Text style={tw("font-bold text-2xl uppercase pb-4 text-center text-gray-700")}>
            Compartment Three
          </Text>
          <Text style={tw(textstyle)}>Humidity: </Text><Text style={tw(textstyle2)}>{retnum3}</Text>
          <Text style={tw(textstyle)}>Action: </Text>{retnum1>36.4?<Text style={tw(textstyle2)}>Plant need moisture</Text>:<Text style={tw(textstyle2)}>Plants Humidity is good</Text>}
        
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
