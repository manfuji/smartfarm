import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Chat from "./screens/Chat";
import Dashboard from "./screens/Dashboard";
import Disease from "./screens/Disease";
import Humidity from "./screens/Humidity";
import Login from "./screens/Login";
import Moisture from "./screens/Moisture";
import Pictures from "./screens/Picture";
import Register from "./screens/Register";
import Temperature from "./screens/Temperature";
const stack = createNativeStackNavigator();
export default function StackNavigator() {
  const user = true;
  return (
    <stack.Navigator>
     
        <>
          <stack.Screen name="Dashboard" component={Dashboard} />
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Register" component={Register} />
        <stack.Screen name="Disease" component={Pictures} />
        <stack.Screen name="Diseases" component={Pictures} />
        <stack.Screen name="Humidity" component={Humidity} />
        <stack.Screen name="Temperature" component={Temperature} />
        <stack.Screen name="Chat" component={Chat} />
        <stack.Screen name="Moisture" component={Moisture} />




        </>
     
    </stack.Navigator>
  );
}
