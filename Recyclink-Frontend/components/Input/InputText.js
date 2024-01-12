import { View, Text, TextInput } from "react-native";
import React from "react";

const InputText = ({
  style,
  placeholder,
  label,
  defaultValue,
  editable,
  type,
  handleChange,
}) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>{label}</Text>
      <TextInput
        value={defaultValue}
        style={[style]}
        placeholder={placeholder}
        editable={editable}
        keyboardType={type || "default"}
        onChangeText={(e) => handleChange(e)}
      />
    </View>
  );
};

export default InputText;
