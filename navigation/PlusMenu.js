import React from "react";
import Icon from '@expo/vector-icons/Feather';

const ProfileMenu = props => {
  return (
    <Icon
      color="#000"
      name="plus"
      onPress={() => props.navigation.navigate('editp')}
      size={20}
    />
  );
};

export default ProfileMenu;