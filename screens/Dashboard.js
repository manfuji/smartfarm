import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import tw from "tailwind-rn";
import bg from "../assets/bg.jpg";
import {signOut} from "firebase/auth"
import { authentication } from "../firebaseConf";
import { StatusBar } from "expo-status-bar";
export default function Dashboard() {

  const navigation  = useNavigation();

  let textstyle = "flex text-gray-100 font-semibold text-2xl";

  return (

      <ImageBackground source={bg} resizeMode="cover" style={tw("flex-1")}>
    <SafeAreaView style={tw("flex-1")}>
    <ScrollView >
        <View style={tw("")}>
        <TouchableOpacity
              style={tw(
                "bg-red-500 py-2 text-center font-bold justify-center"
              )}
              onPress={()=>{signOut(authentication)
              navigation.navigate("Login")
              }}
            >
              <Text style={tw("text-white text-center font-bold")}>
                Logout
                              </Text>
            </TouchableOpacity>
        </View>



        <View style={tw("bg-gray-900 mt-32 mb-20 mx-5 p-10 rounded-md opacity-80")}>
          <View style={tw("mb-10")}>
           
              {/* main component to be replaced */}
            <TouchableOpacity
              style={tw(
                "bg-green-500 rounded-full py-2 text-center font-bold justify-center"
              )}
              onPress={()=>navigation.navigate("Disease")}
            >
              <Text style={tw("text-white text-center font-bold")}>
                Check Disease
              </Text>
            </TouchableOpacity>
            <Text style={tw(`${textstyle} mt-2`)}>Disease:</Text>
          </View>
          <Text
            style={tw(
              "font-bold text-3xl text-white tracking-widest underline uppercase mb-2"
            )}
          >
            Smart Farm
          </Text>

          <View style={tw("flex text-white font-semibold")} >
           

            <View style={tw("flex text-white font-semibold")}>
              <Text style={tw("text-3xl font-bold text-white mt-10 bg-blue-600 rounded-full")} >Humidity: </Text>
            <Text style={tw(textstyle)}>Readings:</Text>
            <Text style={tw(textstyle)}>Action:</Text>
            
          </View>

            <View style={tw("flex text-white font-semibold")}>
              <Text style={tw("text-3xl font-bold text-white mt-10 bg-blue-600 rounded-full")}>Soil moisture: </Text>
            <Text style={tw(textstyle)}>Readings:</Text>
            <Text style={tw(textstyle)}>Action:</Text>
            
          </View>
            <View style={tw("flex text-white font-semibold")}>
              <Text style={tw("text-3xl font-bold text-white mt-10 bg-blue-600 rounded-full")}>Temperature</Text>
            <Text style={tw(textstyle)}>Readings:</Text>
            <Text style={tw(textstyle)}>Action:</Text>
            
          </View>

          </View>
          

          
        </View>




        
    </ScrollView>
    </SafeAreaView>
      </ImageBackground>
  );    

}

