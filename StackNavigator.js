import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Pictures from "./screens/Picture";
import Register from "./screens/Register";
const stack = createNativeStackNavigator();
export default function StackNavigator() {
  const user = true;
  return (
    <stack.Navigator>
     
        <>
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Register" component={Register} />
          <stack.Screen name="Dashboard" component={Dashboard} />
        <stack.Screen name="Disease" component={Pictures} />

        </>
     
    </stack.Navigator>
  );
}
