import { View, Text } from "react-native";
import React from "react";
import MenuTop from "./MenuTop";
import Introduction from "./Introduction";
import ModalUser from "./ModalUser";

const TopGroup = ({ fullName }) => {
  return (
    <View
      style={{
        backgroundColor: "#016060",
        width: "100%",
        height: 266,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginTop: -20,
      }}
    >
      <View style={{ marginTop: 40 }}>
        <MenuTop />
        <Introduction fullName={fullName} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ModalUser />
        </View>
      </View>
    </View>
  );
};

export default TopGroup;
