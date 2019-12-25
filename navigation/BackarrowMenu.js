import React from "react";
import { Icon } from "react-native-elements";

const BackarrowMenu = props => {
  return (
    <Icon
      color="#000"
      name="chevron-left"
      onPress={() => props.navigation.goBack()}
    />
  );
};

export default BackarrowMenu;