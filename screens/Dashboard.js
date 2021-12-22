import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import tw from "tailwind-rn";
import bg from "../assets/bg.jpg";
import { signOut } from "firebase/auth";
import { authentication } from "../firebaseConf";
import water from "../assets/icons/waterdrop.png";
let shuffles = require("shuffle-array");
export default function Dashboard() {
  const navigation = useNavigation();

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

  let textstyle = "flex font-semibold text-2xl";
  const headtxt =
    "text-xl font-bold mt-4 rounded-full text-center uppercase ";
  return (
    <ImageBackground source={bg} resizeMode="cover" style={tw("flex-1")}>
      <SafeAreaView style={tw("flex-1")}>
        <ScrollView>
          {/* <View style={tw("")}>
            <TouchableOpacity
              style={tw("bg-red-500 py-2 text-center font-bold justify-center")}
              onPress={() => {
                signOut(authentication);
                navigation.navigate("Login");
              }}
            >
              <Text style={tw("text-white text-center font-bold")}>Logout</Text>
            </TouchableOpacity>
          </View> */}

          <View
            style={tw("bg-gray-900 justify-center py-10 px-10 items-center mx-auto rounded-md opacity-80")}
          >
            {/* <View style={tw("mb-10")}> */}
            {/* main component to be replaced */}
            {/* <TouchableOpacity
                style={tw(
                  "bg-green-500 rounded-full py-2 text-center font-bold justify-center"
                )}
                onPress={() => navigation.navigate("Disease")}
              >
                <Text style={tw("text-white text-center font-bold")}>
                  Check Disease
                </Text>
              </TouchableOpacity> */}
            {/* <Text style={tw(`${textstyle} mt-2`)}>Disease:</Text>
            </View> */}

            {/* <Text
              style={tw(
                "font-bold text-3xl text-white tracking-widest underline uppercase mb-2"
              )}
            >
              Smart Farm
            </Text> */}
            <View style={tw("flex flex-row flex-wrap")}>
              <View
                style={tw(
                  "flex text-white w-48 rounded p-2 font-semibold bg-white text-gray-700"
                )}
              >
                <View style={tw("flex font-semibold")}>
                  <Image
                    source={water}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 30,
                    }}
                  />
                  <Text style={tw(headtxt)}>Humidity </Text>

                  {/* <Text style={tw(textstyle)}>Readings:{retnum1}</Text>
                <Text style={tw(textstyle)}>Action:</Text> */}
                </View>

                {/* <View style={tw("flex text-white font-semibold")}>
                <Text style={tw(headtxt)}>Soil moisture <Image
          source={water}
          style={{ width: 50, height: 50 }}
        /></Text>
                <Text style={tw(textstyle)}>Readings:{retnum2}</Text>
                <Text style={tw(`${textstyle}`)}>
                  Action: plant Need water
                </Text>
              </View> */}
                {/* <View style={tw("flex text-white font-semibold")}>
                <Text style={tw(headtxt)}>Temperature</Text>
                <Text style={tw(textstyle)}>Readings:{retnum3}</Text>
                <Text style={tw(textstyle)}>Action:</Text>
              </View> */}
              </View>

              <View
                style={tw(
                  "flex text-white w-48 ml-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={water}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 30,
                    }}
                  />
                  <Text style={tw(headtxt)}>Soil Moisture </Text>

                  {/* <Text style={tw(textstyle)}>Readings:{retnum1}</Text>
              <Text style={tw(textstyle)}>Action:</Text> */}
                </View>

                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Soil moisture <Image
        source={water}
        style={{ width: 50, height: 50 }}
      /></Text>
              <Text style={tw(textstyle)}>Readings:{retnum2}</Text>
              <Text style={tw(`${textstyle}`)}>
                Action: plant Need water
              </Text>
            </View> */}
                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Temperature</Text>
              <Text style={tw(textstyle)}>Readings:{retnum3}</Text>
              <Text style={tw(textstyle)}>Action:</Text>
            </View> */}
              </View>
              <View
                style={tw(
                  "flex text-white w-48 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={water}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 30,
                    }}
                  />
                  <Text style={tw(headtxt)}>Temperature </Text>

                  {/* <Text style={tw(textstyle)}>Readings:{retnum1}</Text>
              <Text style={tw(textstyle)}>Action:</Text> */}
                </View>

                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Soil moisture <Image
        source={water}
        style={{ width: 50, height: 50 }}
      /></Text>
              <Text style={tw(textstyle)}>Readings:{retnum2}</Text>
              <Text style={tw(`${textstyle}`)}>
                Action: plant Need water
              </Text>
            </View> */}
                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Temperature</Text>
              <Text style={tw(textstyle)}>Readings:{retnum3}</Text>
              <Text style={tw(textstyle)}>Action:</Text>
            </View> */}
              </View>
              <View
                style={tw(
                  "flex text-white w-48 ml-2 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={water}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 30,
                    }}
                  />
                  <Text style={tw(headtxt)}>Check Desease </Text>

                  {/* <Text style={tw(textstyle)}>Readings:{retnum1}</Text>
              <Text style={tw(textstyle)}>Action:</Text> */}
                </View>

                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Soil moisture <Image
        source={water}
        style={{ width: 50, height: 50 }}
      /></Text>
              <Text style={tw(textstyle)}>Readings:{retnum2}</Text>
              <Text style={tw(`${textstyle}`)}>
                Action: plant Need water
              </Text>
            </View> */}
                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Temperature</Text>
              <Text style={tw(textstyle)}>Readings:{retnum3}</Text>
              <Text style={tw(textstyle)}>Action:</Text>
            </View> */}
              </View>
              <View
                style={tw(
                  "flex text-white w-48 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={water}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 30,
                    }}
                  />
                  <Text style={tw(headtxt)}>ChatRoom </Text>

                  {/* <Text style={tw(textstyle)}>Readings:{retnum1}</Text>
              <Text style={tw(textstyle)}>AcHumiditytion:</Text> */}
                </View>

                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Soil moisture <Image
        source={water}
        style={{ width: 50, height: 50 }}
      /></Text>
              <Text style={tw(textstyle)}>Readings:{retnum2}</Text>
              <Text style={tw(`${textstyle}`)}>
                Action: plant Need water
              </Text>
            </View> */}
                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Temperature</Text>
              <Text style={tw(textstyle)}>Readings:{retnum3}</Text>
              <Text style={tw(textstyle)}>Action:</Text>
            </View> */}
              </View>
              <View
                style={tw(
                  "flex text-white w-48 ml-2 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={water}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 30,
                    }}
                  />
                  <Text style={tw(headtxt)}>LogOut </Text>

                  {/* <Text style={tw(textstyle)}>Readings:{retnum1}</Text>
              <Text style={tw(textstyle)}>Action:</Text> */}
                </View>

                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Soil moisture <Image
        source={water}
        style={{ width: 50, height: 50 }}
      /></Text>
              <Text style={tw(textstyle)}>Readings:{retnum2}</Text>
              <Text style={tw(`${textstyle}`)}>
                Action: plant Need water
              </Text>
            </View> */}
                {/* <View style={tw("flex text-white font-semibold")}>
              <Text style={tw(headtxt)}>Temperature</Text>
              <Text style={tw(textstyle)}>Readings:{retnum3}</Text>
              <Text style={tw(textstyle)}>Action:</Text>
            </View> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
