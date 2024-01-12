import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Planet from "../assets/Image/SavePlanet.png";
import Progress from "../components/Progress/Progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen2 = () => {
  const navigate = useNavigation();
  const setStatus = async () => {
    await AsyncStorage.setItem("status", "Old");
  };
  useEffect(() => {
    setStatus();
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "column", alignItems: "center", gap: 70 }}>
        <Image style={{ width: 300, height: 300 }} source={Planet} />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Get Recyclink lawn care service and reduce air pollution!
        </Text>
        <Text
          onPress={() => navigate.navigate("Splash Screen 3")}
          style={{
            fontSize: 20,
            fontWeight: "bold",
            backgroundColor: "#5DB647",
            color: "#fff",
            padding: 10,
            paddingHorizontal: 50,
            borderRadius: 30,
          }}
        >
          NEXT
        </Text>
        <Progress />
      </View>
    </View>
  );
};

export default SplashScreen2;
