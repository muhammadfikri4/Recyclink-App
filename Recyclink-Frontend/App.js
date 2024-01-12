import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./pages/Signin";
import Recycle from "./pages/Recycle";
import Signup from "./pages/Signup";
import SplashScreen from "./pages/SplashScreen";
import SplashScreen2 from "./pages/SplashScreen2";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./states";
import Verification from "./pages/Verification";
import Dashboard from "./pages/Dashboard";
import SplashScreen3 from "./pages/SplashScreen3";
import SplashScreen4 from "./pages/SplashScreen4";
import { useFonts } from "@use-expo/font";
import Profile from "./pages/Account";
import Cart from "./pages/Cart";
import Notification from "./pages/Notification";
import Community from "./pages/Community";
import Setting from "./pages/Setting";
import Account from "./pages/Account";

const Stack = createNativeStackNavigator();
const customFonts = {
  Poppins: require("./assets/fonts/Poppins-SemiBold.ttf"),
};
export default function App() {
  const [isLoaded] = useFonts(customFonts);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Splash Screen 2"
            component={SplashScreen2}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Splash Screen 3"
            component={SplashScreen3}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Splash Screen 4"
            component={SplashScreen4}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Sign In"
            component={Signin}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Sign Up"
            component={Signup}
            options={{
              headerShown: false,
              animation: "none",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: false,
              animation: "none",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Community"
            component={Community}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Recycle"
            component={Recycle}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
