import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Progress = () => {
  const route = useRoute();
  const navigate = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
      }}
    >
      {route.name === "Splash Screen 2" ? (
        <Pressable
          style={{
            width: 20,
            height: 10,
            backgroundColor: "#5DB647",
            borderRadius: 30,
          }}
        ></Pressable>
      ) : (
        <Pressable
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#D9D9D9",
            borderRadius: 30,
          }}
          onPress={() => navigate.navigate("Splash Screen 2")}
        ></Pressable>
      )}
      {route.name === "Splash Screen 3" ? (
        <Pressable
          style={{
            width: 20,
            height: 10,
            backgroundColor: "#5DB647",
            borderRadius: 30,
          }}
        ></Pressable>
      ) : (
        <Pressable
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#D9D9D9",
            borderRadius: 30,
          }}
          onPress={() => navigate.navigate("Splash Screen 3")}
        ></Pressable>
      )}
      {route.name === "Splash Screen 4" ? (
        <Pressable
          style={{
            width: 20,
            height: 10,
            backgroundColor: "#5DB647",
            borderRadius: 30,
          }}
        ></Pressable>
      ) : (
        <Pressable
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#D9D9D9",
            borderRadius: 30,
          }}
          onPress={() => navigate.navigate("Splash Screen 4")}
        ></Pressable>
      )}
    </View>
  );
};

export default Progress;
