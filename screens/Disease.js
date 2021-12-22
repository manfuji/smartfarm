import React from "react";
import { View, Text, ImageBackground, SafeAreaView, ScrollView } from "react-native";
let shuffles = require("shuffle-array");
import bg from "../assets/bg.jpg";
import tw from "tailwind-rn";

export default function Disease() {
  const HumidityArr = [23, 24, 21, 25, 26];
  const SoilMoitureArr = [89, 90, 100, 120, 123];
  const TemperatureArr = [23, 24, 21, 25, 26];

  shuffles(HumidityArr);
  shuffles(SoilMoitureArr);
  shuffles(TemperatureArr);

  setTimeout(function () {
    // location.reload();
  }, 10000);

  let retnum1 = HumidityArr[1];
  let retnum2 = SoilMoitureArr[1];
  let retnum3 = TemperatureArr[1];
  let textstyle = "flex font-semibold text-xl font-bold text-gray-700 text-center tracking-widest uppercase";
  let textstyle2 = "flex font-semibold text-2xl font-bold text-gray-700 text-center";


  return (
    <ImageBackground source={bg} resizeMode="cover" style={tw("flex-1")}>
        <SafeAreaView style={tw("flex-1")}>
        <ScrollView>
      <View style={tw("flex-1 m-10 bg-white h-64 py-6 rounded mt-14 pt-10 opacity-90")}>
        <View style={tw("flex text-white text-center ")}>
          <Text style={tw("font-bold text-3xl uppercase pb-4 text-center text-gray-700")}>
            Compartment One
          </Text>
          <Text style={tw(textstyle)}>Soil Moisture: </Text><Text style={tw(textstyle2)}>{retnum1}</Text>
          <Text style={tw(textstyle)}>Humidity: </Text><Text style={tw(textstyle2)}>{retnum2}</Text>
          <Text style={tw(textstyle)}>Temperature:</Text><Text style={tw(textstyle2)}> {retnum3}</Text>
        </View>
      </View>

      <View style={tw("flex-1 m-10 bg-white h-64 py-10 rounded mt-8 pt-10 opacity-90")}>
        <View style={tw("flex text-white text-center ")}>
          <Text style={tw("font-bold text-3xl uppercase pb-4 text-center text-gray-700")}>
            Compartment Two
          </Text>
          <Text style={tw(textstyle)}>Soil Moisture: </Text><Text style={tw(textstyle2)}>{retnum1}</Text>
          <Text style={tw(textstyle)}>Humidity: </Text><Text style={tw(textstyle2)}>{retnum2}</Text>
          <Text style={tw(textstyle)}>Temperature:</Text><Text style={tw(textstyle2)}> {retnum3}</Text>
        </View>
      </View>
      <View style={tw("flex-1 m-10 bg-white h-64 py-10 rounded mt-8 pt-10 opacity-90")}>
        <View style={tw("flex text-white text-center ")}>
          <Text style={tw("font-bold text-3xl uppercase pb-4 text-center text-gray-700")}>
            Compartment Three
          </Text>
          <Text style={tw(textstyle)}>Soil Moisture: </Text><Text style={tw(textstyle2)}>{retnum1}</Text>
          <Text style={tw(textstyle)}>Humidity: </Text><Text style={tw(textstyle2)}>{retnum2}</Text>
          <Text style={tw(textstyle)}>Temperature:</Text><Text style={tw(textstyle2)}> {retnum3}</Text>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
