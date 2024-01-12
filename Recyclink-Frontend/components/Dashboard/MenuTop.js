import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import maps from "../../assets/Icon/maps.png";
import bag from "../../assets/Icon/bag.png";
import notif from "../../assets/Icon/notif.png";
import { useNavigation } from "@react-navigation/native";

const MenuTop = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
      }}
    >
      <TouchableOpacity>
        <Image source={maps} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <TouchableOpacity onPress={() => navigate.navigate("Notification")}>
          <Image source={notif} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={bag} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuTop;
