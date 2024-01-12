import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import profile from "../assets/Icon/profile.png";
import recycle from "../assets/Icon/recycle.png";
import coin from "../assets/Icon/coin.png";
import logout from "../assets/Icon/logout.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

const Account = () => {
  const navigate = useNavigation();
  const [data, setData] = useState();
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");

    if (typeof token !== "string") {
      navigate.navigate("Sign In");
      return 0;
    }
    const decoded = jwtDecode(token);
    setData(decoded);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigate.navigate("Sign In");
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {/* <Text style={{ fontSize: 18 }}>
        <Text style={{ fontWeight: "bold" }}>Profile</Text> will be coming soon!
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
      </Pressable> */}
      <View
        style={{
          backgroundColor: "#016060",
          width: "100%",
          height: 266,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginTop: -20,
        }}
      >
        <View
          style={{
            marginTop: 100,
            marginLeft: 30,
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Image
            source={profile}
            style={{ width: 80, height: 80, tintColor: "#fff" }}
          />
          <View style={{ flexDirection: "column", gap: 5 }}>
            <Text style={{ fontFamily: "Poppins", color: "#fff" }}>
              {typeof data === "object" ? data.fullName : ""}
            </Text>
            <View
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                borderRadius: 30,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Poppins", color: "#016060" }}>
                Member Gold
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: -20 }}>
              <View style={{ flexDirection: "row", gap: 30, marginLeft: 30 }}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Image source={recycle} style={{ width: 25, height: 25 }} />
                  <Text style={{ color: "#fff" }}>0</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Image source={coin} style={{ width: 25, height: 25 }} />
                  <Text style={{ color: "#fff" }}>0</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ marginTop: 30, backgroundColor: "#fff", paddingVertical: 20 }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity
            onPress={handleLogout}
            style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
          >
            <Image source={logout} style={{ width: 30, height: 30 }} />
            <Text style={{ fontFamily: "Poppins", color: "#EF574B" }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Account;
