import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import { url } from "../../local";
import InputPassword from "../Input/InputPassword";
import InputText from "../Input/InputText";

const InputLogin = ({ styleInputText, StyleInputName }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigation();
  const handleChangeEmail = (newText) => {
    setEmail(newText);
  };
  const handleChangePassword = (newText) => {
    setPassword(newText);
  };

  const signin = async () => {
    try {
      const res = await axios.post(
        `${url.url}/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      await AsyncStorage.setItem("token", res.data.access_token);
      navigate.navigate("Dashboard");
    } catch (error) {
      const message = error.response.data.message;
      if (message === "You're Not Verified!") {
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: "WARNING!",
          textBody: message,
          button: "Get OTP Code",
          closeOnOverlayTap: true,
        });
        return 0;
      }

      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "WARNING!",
        textBody: message,
        button: "Ok",
        closeOnOverlayTap: true,
      });
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <InputText
          placeholder="Email"
          style={styleInputText}
          label="Email"
          editable={true}
          handleChange={handleChangeEmail}
          defaultValue={email}
        />
        <InputPassword
          handleChange={handleChangePassword}
          placeholder="Password"
          style={[styleInputText, { width: "100%" }]}
          defaultValue={password}
        />
      </View>

      <TouchableOpacity
        style={{
          textAlign: "center",
          backgroundColor: "#EB1818",
          padding: 10,
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          borderRadius: 30,
          marginVertical: 20,
        }}
        onPress={signin}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Continue to Sign In
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "left" }}>
        <Text
          style={{
            lineHeight: 20,
            width: "100%",
            color: "#777",
          }}
        >
          By continuing with the sign in process, we may send you a one-time
          verification code via text message to the phone number associated with
          your account. Message and data rates may apply.
        </Text>
      </View>
    </AlertNotificationRoot>
  );
};

export default InputLogin;
