import { View, Text, Image } from "react-native";
import React from "react";
import recycle from "../../assets/Icon/recycle.png";
import coin from "../../assets/Icon/coin.png";
import profile from "../../assets/Icon/profile.png";

const ModalUser = () => {
  return (
    <View
      style={{
        width: 270,
        height: 100,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "left",
        paddingHorizontal: 15,
        gap: 15,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 0.4,
        borderBottomColor: "#000",
        borderRightColor: "#000",
        borderLeftColor: "#000",
        borderTopWidth: 0,
      }}
    >
      <Image
        source={profile}
        style={{ width: 55, height: 55, borderRadius: 100 }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#016060",
            paddingVertical: 3,
            paddingHorizontal: 20,
            borderRadius: 30,
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Member Gold
        </Text>
        <View style={{ flexDirection: "row", gap: 30, marginLeft: 30 }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image source={recycle} style={{ width: 25, height: 25 }} />
            <Text>0</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image source={coin} style={{ width: 25, height: 25 }} />
            <Text>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModalUser;
