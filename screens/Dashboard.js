import { useNavigation } from "@react-navigation/native";
import React from "react";
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
import disease from "../assets/icons/virus.png";
import chat from "../assets/icons/chat.png";
import temp from "../assets/icons/temp.png";
import btn from "../assets/icons/btn.png";
import rain from "../assets/icons/rain.jpg"

export default function Dashboard() {
  const navigation = useNavigation();


  const headtxt = "text-xl font-bold mt-4 rounded-full text-center uppercase ";
  return (
    <ImageBackground source={bg} resizeMode="cover" style={tw("flex-1")}>
      <SafeAreaView style={tw("flex-1")}>
        <ScrollView>
          <View
            style={tw(
              "bg-gray-900 justify-center py-10 mt-5 pl-10 items-center rounded-md opacity-80"
            )}
          >
            <View style={tw("flex flex-row flex-wrap")}>
              <TouchableOpacity
                style={tw(
                  "flex text-white w-32 rounded p-2 font-semibold bg-white text-gray-700"
                )}
                onPress={() => navigation.navigate("Humidity")}
              >
                <View style={tw("flex font-semibold")}>
                  <Image
                    source={rain}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 8,
                    }}
                  />
                  <Text style={tw(headtxt)}>Humidity </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={tw(
                  "flex text-white w-32 ml-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
                onPress={() => navigation.navigate("Moisture")}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={water}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 8,
                    }}
                  />
                  <Text style={tw(headtxt)}>Soil Moisture </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw(
                  "flex text-white w-32 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
                onPress={() => navigation.navigate("Temperature")}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={temp}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 8,
                    }}
                  />
                  <Text style={tw(headtxt)}>Temperature </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw(
                  "flex text-white w-32 ml-2 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
                onPress={() => navigation.navigate("Diseases")}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={disease}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 8,
                    }}
                  />
                  <Text style={tw(headtxt)}>Check Desease </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={tw(
                  "flex text-white w-32 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={chat}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 8,
                    }}
                  />
                  <Text style={tw(headtxt)}>ChatRoom </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw(
                  "flex text-white w-32 ml-2 mt-2 rounded p-2 font-semibold bg-white text-gray-700"
                )}
                onPress={() => {
                  signOut(authentication);
                  navigation.navigate("Login");
                }}
              >
                <View style={tw("flex text-white font-semibold")}>
                  <Image
                    source={btn}
                    style={{
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 8,
                    }}
                  />
                  <Text style={tw(headtxt)}>LogOut </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
