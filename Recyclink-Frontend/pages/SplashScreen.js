import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

const SplashScreen = () => {
  // const [token, setToken] = useState();
  const navigate = useNavigation();
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    const status = await AsyncStorage.getItem("status");
    // setToken(access_token);
    setTimeout(() => {
      typeof token === "string"
        ? navigate.navigate("Dashboard")
        : typeof token !== "string" && status === "Old"
        ? navigate.navigate("Sign In")
        : navigate.navigate("Splash Screen 2");
    }, 2000);
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Image
        style={{ width: 300 }}
        source={require("../assets/Image/Recyclink_Logo.png")}
      />
    </View>
  );
};

export default SplashScreen;
