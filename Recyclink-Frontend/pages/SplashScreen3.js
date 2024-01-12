import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ecology from "../assets/Image/Ecology.png";
import Progress from "../components/Progress/Progress";

const SplashScreen3 = () => {
  const navigate = useNavigation();

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
        <Image style={{ width: 300, height: 300 }} source={Ecology} />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Find Recyclink lawn care service near your location!
        </Text>
        <Text
          onPress={() => navigate.navigate("Splash Screen 4")}
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

export default SplashScreen3;
