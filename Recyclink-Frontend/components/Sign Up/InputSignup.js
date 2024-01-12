import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import InputText from "../Input/InputText";
import InputPassword from "../Input/InputPassword";
import axios from "axios";
import { url } from "../../local";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { asyncRegisterUser } from "../../states/user/action";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
  AlertNotificationDialog,
} from "react-native-alert-notification";

const InputSignup = ({ styleInputText, styleInputName }) => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const navigate = useNavigation();
  const handleChangeName = (newText) => {
    setData({ ...data, fullName: newText });
  };
  const handleChangeEmail = (newText) => {
    setData({ ...data, email: newText });
  };
  const handleChangePhone = (newText) => {
    setData({ ...data, phone_number: newText });
  };
  const handleChangePassword = (newText) => {
    setData({ ...data, password: newText });
  };

  const signup = async () => {
    try {
      const res = await axios.post(`${url.url}/register`, data, {
        withCredentials: true,
      });
      // console.log(res.data.data.email);
      navigate.navigate("Verification", {
        email: res.data.data.email,
      });
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "WARNING!",
        textBody: error.response.data.message,
        button: "Ok",
        closeOnOverlayTap: true,
      });
    }
  };
  return (
    <AlertNotificationRoot>
      <View style={{ flexDirection: "column", gap: 20 }}>
        <InputText
          placeholder="Full Name"
          style={styleInputText}
          label="Full Name"
          editable={true}
          handleChange={handleChangeName}
          defaultValue={data.fullName}
        />
        <InputText
          placeholder="Email"
          style={styleInputText}
          label="Email"
          editable={true}
          type="email-address"
          handleChange={handleChangeEmail}
          defaultValue={data.email}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            width: "100%",
          }}
        >
          <InputText
            placeholder="Country"
            defaultValue="+62"
            style={[styleInputName, { width: 80, color: "#666" }]}
            label="Country"
            editable={false}
          />
          <InputText
            placeholder="Mobile Number"
            style={[styleInputName, { width: "100%" }]}
            label="Mobile Number"
            editable={true}
            type="number-pad"
            handleChange={handleChangePhone}
            defaultValue={data.phone_number}
          />
        </View>
        <InputPassword
          style={{
            padding: 10,
            fontSize: 20,
            backgroundColor: "#EFEFEF",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingRight: 50,
            width: "100%",
          }}
          defaultValue={data.password}
          placeholder="Password"
          handleChange={handleChangePassword}
        />
        <View style={{ flexDirection: "row", justifyContent: "left" }}>
          <Text
            style={{
              lineHeight: 20,
              width: "100%",
              color: "#777",
              textAlign: "justify",
            }}
          >
            By tapping Sign Up, you consent to receiving a onetime verification
            code via text message to this phone number. Message and data rates
            may apply.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            textAlign: "center",
            backgroundColor: "#EB1818",
            padding: 10,
            fontSize: 18,
            fontWeight: "bold",
            borderRadius: 30,
          }}
          onPress={signup}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </AlertNotificationRoot>
  );
};

export default InputSignup;
