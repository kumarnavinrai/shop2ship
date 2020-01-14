import React from "react";
import Icon from '@expo/vector-icons/Ionicons';

const BackarrowMenu = props => {
  return (
    <Icon
      color="#000"
      name="ios-arrow-round-back"
      onPress={() => props.navigation.goBack()}
      size={40}
    />
  );
};

export default BackarrowMenu;