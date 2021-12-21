import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";
import tw from "tailwind-rn";
import bg from "../assets/bg.jpg";
import {signInWithEmailAndPassword} from "firebase/auth";
import { authentication } from "../firebaseConf";

export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [err, setErr] = useState(false),
    [success, setSuccess] = useState(false),
    [message, setMessage] = useState("");
  const onSubmit = () => {
    if (!email || !password){
       setErr(true);
       setMessage("Please Provide Your credentials")
    }
    else if (email && password) {
      
        signInWithEmailAndPassword(authentication, email, password)
        .then((user) => {
          setSuccess(true);
          setMessage("User Login Successfully");
          navigation.navigate("Dashboard")
        })
        .catch((err) => {
          setErr(true);
          setMessage(err.message);
        });
    }
  };
  return (
    <View style={tw("flex-1")}>
      <ImageBackground source={bg} resizeMode="cover" style={tw("flex-1")}>
        <View
          style={tw(
            "bg-white mx-5 p-10 justify-center mt-28 opacity-90 rounded-md"
          )}
        >
          <Text
            style={tw(
              "text-4xl uppercase font-bold text-blue-600 p-2 text-center tracking-widest"
            )}
          >
            Login
          </Text>
          {success ? (
            <Text
              style={tw("bg-green-600 text-white rounded-md p-2 text-center")}
            >
              {" "}
              {message}
            </Text>
          ) : err ? (
            <Text
              style={tw("bg-red-600 text-white rounded-md p-2 text-center")}
            >
            {message}
            </Text>
          ) : (
            <Text></Text>
          )}
          <View>
            <Text style={tw("font-semibold text-lg p-2")}>Email:</Text>
            <TextInput
              style={tw("border border-blue-400 rounded px-3 py-2")}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
            />
          </View>
          <View>
            <Text style={tw("font-semibold text-lg p-2")}>Password:</Text>
            <TextInput
              style={tw("border border-blue-400 rounded px-3 py-2")}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={tw("bg-green-600 px-20 mt-4 rounded py-3 mb-4")}
            password
            onPress={() => onSubmit()}
          >
            <Text style={tw("text-white font-bold text-center text-xl")}>
              Login
            </Text>
          </TouchableOpacity>
          <Button
            title="Go To Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
