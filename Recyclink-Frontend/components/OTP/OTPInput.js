import { View, Text } from "react-native";
import React from "react";
import OTPTextView from "react-native-otp-textinput";

const OTPInput = ({ handleChange }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        marginTop: 30,
      }}
    >
      <OTPTextView
        inputCount={6}
        handleTextChange={(text) => handleChange(text)}
        textInputStyle={{
          backgroundColor: "#EFEFEF",
          width: 50,
          fontWeight: "bold",
          height: 43,
          fontSize: 20,
          textAlign: "center",
          borderWidth: 0,
          borderRadius: 10,
          marginBottom: 30,
        }}
        tintColor="#EFEFEF"
        offTintColor="#EFEFEF"
        keyboardType="number-pad"
      />
    </View>
  );
};

export default OTPInput;
