import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AuthSignupOption from "../components/AuthSignupOption";
import InputSignup from "../components/Sign Up/InputSignup";
import Google from "../Image/Icon/GoogleLogo.png";
import Option from "../components/Option Auth/Option";

const Signup = () => {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <AuthSignupOption />
        <View style={{ marginHorizontal: 26 }}>
          <View style={{ marginTop: 50, flexDirection: "column", gap: 25 }}>
            <InputSignup
              styleInputText={styles.input}
              styleInputPassword={styles.inputPassword}
              styleInputName={styles.inputName}
            />
          </View>
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
          <Option />
          <View style={{ flexDirection: "row", justifyContent: "left" }}>
            <Text
              style={{
                lineHeight: 20,
                width: "100%",
                color: "#777",
                textAlign: "justify",
                marginBottom: 25,
              }}
            >
              By tapping "Sign Up" or "Continue with Google, Facebook, or
              Apple," you agree to DoorDash's{" "}
              <Text style={{ color: "#00ABFF" }}>Terms and Conditions</Text> and{" "}
              <Text style={{ color: "#00ABFF" }}>Privacy Policy.</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
    borderRadius: 8,
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
  inputName: {
    padding: 10,
    fontSize: 20,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingHorizontal: 20,
    width: 170,
  },
});

export default Signup;
