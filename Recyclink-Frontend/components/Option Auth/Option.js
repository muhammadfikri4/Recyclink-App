import { View, Text, Image } from "react-native";
import React from "react";
import Google from "../../assets/Icon/GoogleLogo.png";
import Facebook from "../../assets/Icon/FacebookLogo.png";

const Option = () => {
  return (
    <View style={{ marginTop: 40, flexDirection: "column", gap: 15 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#498ECD",
          justifyContent: "center",
          padding: 8,
          paddingHorizontal: 60,
          gap: 30,
          borderRadius: 30,
          marginBottom: 15,
        }}
      >
        <Image source={Google} style={{ width: 25, height: 25 }} />
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          Google Account
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#2265A4",
          justifyContent: "center",
          padding: 8,
          paddingHorizontal: 60,
          gap: 30,
          borderRadius: 30,
          marginBottom: 15,
        }}
      >
        <Image source={Facebook} style={{ width: 25, height: 25 }} />
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          Facebook Account
        </Text>
      </View>
    </View>
  );
};

export default Option;
