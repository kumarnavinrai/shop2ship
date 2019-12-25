import React from "react";
import Icon from '@expo/vector-icons/Ionicons';

const ProfileMenu = props => {
  return (
    <Icon
      color="#000"
      name="md-contact"
      onPress={() => props.navigation.navigate('signin')}
      size={30}
    />
  );
};

export default ProfileMenu;