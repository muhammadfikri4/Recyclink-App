import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Community = () => {
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>
        <Text style={{ fontWeight: "bold" }}>Community</Text> will be coming
        soon!
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

export default Community;
