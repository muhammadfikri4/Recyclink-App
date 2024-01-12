import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const AuthSignupOption = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <View
        style={{
          borderColor: "#016060",
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            backgroundColor: "transparent",
            padding: 10,
            borderRadius: 6,
            paddingHorizontal: 25,
          }}
          onPress={() => navigate.navigate("Sign In")}
        >
          <Text
            style={{
              color: "#016060",
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </Text>
        <Text
          style={{
            backgroundColor: "#016060",
            padding: 10,
            borderRadius: 20,
            marginRight: -1,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default AuthSignupOption;
