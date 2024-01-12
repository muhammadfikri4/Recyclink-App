import AsyncStorage from "@react-native-async-storage/async-storage";
import { decode } from "base-64";
import { jwtDecode } from "jwt-decode";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import Linear from "../assets/Icon/linear.png";
import { useEffect, useState } from "react";
import TopGroup from "../components/Dashboard/TopGroup";
import Navbar from "../components/Navbar";
import Trash from "../assets/Image/Trash.png";
global.atob = decode;

const Dashboard = () => {
  const [data, setData] = useState();
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    const decoded = jwtDecode(token);
    setData(decoded);
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F5F9" }}>
      <StatusBar barStyle="light-content" backgroundColor="#016060" />
      <ScrollView>
        <TopGroup fullName={typeof data === "object" ? data.fullName : null} />
        <View style={{ marginTop: 100, marginHorizontal: 20 }}>
          <View>
            <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
              Join the Challenge!
            </Text>
            <Image
              source={Linear}
              style={{
                width: "100%",
                height: 20,
                borderRadius: 10,
                marginVertical: 10,
              }}
            />
            <Image
              source={Trash}
              style={{ width: "100%", objectFit: "cover", height: 200 }}
            />
          </View>
          <View style={{ marginBottom: 100 }}>
            <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
              Join the Challenge!
            </Text>
            <Image
              source={Linear}
              style={{
                width: "100%",
                height: 20,
                borderRadius: 10,
                marginVertical: 10,
              }}
            />
            <Image
              source={Trash}
              style={{ width: "100%", objectFit: "cover", height: 200 }}
            />
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default Dashboard;
