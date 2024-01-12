import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthSigninOption from "../components/AuthSigninOption";
import Option from "../components/Option Auth/Option";
import InputLogin from "../components/Sign In/InputSignin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = () => {
  return (
    <KeyboardAwareScrollView style={[styles.container]}>
      <View>
        <AuthSigninOption />
        <View style={{ marginHorizontal: 26 }}>
          <Option />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 50,
              alignItems: "center",
              gap: 10,
              opacity: 0.6,
            }}
          >
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                height: 10,
              }}
            >
              -------------------------------
            </Text>
            <Text style={{ fontSize: 16 }}>Or Continue With</Text>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                height: 10,
              }}
            >
              -------------------------------
            </Text>
          </View>

          <View style={{ marginTop: 50, flexDirection: "column", gap: 25 }}>
            <InputLogin
              styleInputText={styles.input}
              styleInputPassword={styles.inputPassword}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    padding: 10,
    fontSize: 20,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  inputPassword: {
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderRightWidth: 0,
    borderColor: "#016060",
  },
});

export default Signin;
