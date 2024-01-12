import { View, Text } from "react-native";
import React from "react";

const Introduction = ({ fullName }) => {
  return (
    <View style={{ marginTop: 50, marginLeft: 55 }}>
      <Text
        style={{
          fontWeight: "500",
          color: "#fff",
          fontSize: 16,
          fontFamily: "Poppins",
        }}
      >
        Hi,
      </Text>
      <Text
        style={{
          fontWeight: "500",
          color: "#fff",
          fontSize: 16,
          fontFamily: "Poppins",
        }}
      >
        {typeof fullName === "string" ? fullName : ""}
      </Text>
    </View>
  );
};

export default Introduction;
