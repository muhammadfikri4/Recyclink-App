import { View, Text, TextInput, Button, Pressable, Alert } from "react-native";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthSigninOption from "../components/AuthSigninOption";
import AuthSignupOption from "../components/AuthSignupOption";
import OTPTextView from "react-native-otp-textinput";
import OTPInput from "../components/OTP/OTPInput";
import { asyncVerificationRegister } from "../states/user/action";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { url } from "../local";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

const Verification = ({ route }) => {
  // const email = useSelector((state) => state.user);
  const { email } = route.params;
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleChange = (text) => {
    setOtp(text);
  };
  const handleVerification = async () => {
    try {
      const res = await axios(
        {
          method: "put",
          url: `${url.url}/register`,
          data: {
            email,
            otp_code: Number(otp),
          },
        },
        { withCredentials: true }
      );
      // Alert.alert("SUCCESS!", error.response.data.message, [
      //   {
      //     text: "Ok",
      //     style: "cancel",
      //   },
      // ]);
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: "SUCCESS!",
        textBody: res.data.message,
        button: "Sign In",
        closeOnOverlayTap: true,
        onPressButton: () => navigate.navigate("Sign In"),
      });
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "WARNING!",
        textBody: error.response.data.message,
        button: "Close",
        closeOnOverlayTap: true,
      });
    }
  };
  return (
    <AlertNotificationRoot>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ marginHorizontal: 20, marginTop: 40 }}>
          <Text style={{ marginTop: 20, textAlign: "center" }}>
            Please enter 6 digit code we sent to you at{" "}
            <Text style={{ fontWeight: "bold" }}>{email}</Text>
          </Text>
          <OTPInput handleChange={handleChange} />
          <Text style={{ fontWeight: "bold", color: "#898989" }}>
            Didn't get it? Resend.
          </Text>
          <Pressable
            style={{
              backgroundColor: "#EB1818",
              padding: 10,
              marginTop: 20,
              borderRadius: 30,
            }}
            onPress={handleVerification}
          >
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "500" }}
            >
              Verification
            </Text>
          </Pressable>
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

export default Verification;
