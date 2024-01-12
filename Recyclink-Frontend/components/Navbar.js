import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Home from "../assets/Icon/home.png";
import Cart from "../assets/Icon/cart.png";
import Community from "../assets/Icon/community.png";
import Recycle from "../assets/Icon/recycle.png";
import Setting from "../assets/Icon/setting.png";
import { useNavigation } from "@react-navigation/native";
import Account from "../assets/Icon/User.png";

const Navbar = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#016060",
        width: "100%",
        position: "absolute",
        bottom: 0,
        padding: 15,
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigate.navigate("Dashboard")}>
        <Image
          source={Home}
          style={{ width: 30, height: 30, tintColor: "#fff" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate.navigate("Cart")}>
        <Image
          source={Cart}
          style={{ width: 30, height: 30, tintColor: "#fff" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate.navigate("Recycle")}>
        <Image
          source={Recycle}
          style={{ width: 30, height: 30, tintColor: "#fff" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate.navigate("Community")}>
        <Image
          source={Community}
          style={{ width: 30, height: 30, tintColor: "#fff" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate.navigate("Account")}>
        <Image
          source={Account}
          style={{ width: 30, height: 30, tintColor: "#fff" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
