import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import {
  Image,
} from 'react-native';

const LogoBarMenu = props => {
  return (
    <Image
	    source={require('../assets/images/hback.png')}
	    style={[{width:150, height: 30}, {}]}
	  />
  );
};

export default LogoBarMenu;