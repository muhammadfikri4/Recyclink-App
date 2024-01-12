import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Recycle = () => {
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>
        <Text style={{ fontWeight: "bold" }}>Recycle</Text> will be coming soon!
      </Text>
      <Pressable
        style={{
          backgroundColor: "#016060",
          padding: 10,
          marginTop: 10,
          paddingHorizontal: 50,
          borderRadius: 10,
        }}
        onPress={() => {
          navigate.goBack();
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>BACK</Text>
      </Pressable>
    </View>
  );
};

export default Recycle;
