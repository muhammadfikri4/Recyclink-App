import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Eye from "../../assets/Icon/Eye.png";
import EyeSlash from "../../assets/Icon/Eye.png";

const InputPassword = ({ placeholder, style, handleChange, defaultValue }) => {
  const [show, setShow] = useState(true);
  const [icon, setIcon] = useState(Eye);

  const handleEye = () => {
    if (show) {
      setShow(false);
      setIcon(EyeSlash);
    } else {
      setShow(true);
      setIcon(Eye);
    }
  };
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 25 }}>
        Password
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: -25 }}
      >
        <TextInput
          style={style}
          placeholder={placeholder}
          secureTextEntry={show}
          onChangeText={(text) => handleChange(text)}
          value={defaultValue}
        />
        <Pressable
          onPress={handleEye}
          style={{
            padding: 8,
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8,
            height: "100%",
            marginLeft: -50,
          }}
        >
          <Image source={icon} style={{ width: 30, height: 30 }} />
        </Pressable>
      </View>
    </View>
  );
};

export default InputPassword;
