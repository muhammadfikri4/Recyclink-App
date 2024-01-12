import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Recycle from "../assets/Image/Recycle.png";
import Progress from "../components/Progress/Progress";

const SplashScreen4 = () => {
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
        <Image style={{ width: 300, height: 300 }} source={Recycle} />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Pay via Credit card, and manage your account online!
        </Text>
        <Text
          onPress={() => navigate.navigate("Sign In")}
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
          LETS START
        </Text>
        <Progress />
      </View>
    </View>
  );
};

export default SplashScreen4;
