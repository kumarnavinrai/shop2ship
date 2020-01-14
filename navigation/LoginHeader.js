import React from "react";
import { Header } from "react-native-elements";

import BackarrowMenu from "./BackarrowMenu";
import ProfileMenu from "./ProfileMenu";
import LogoBarMenu from "./LogoBarMenu";

const LoginHeader = props => {
  return (
    <Header
      leftComponent={<BackarrowMenu navigation={props.navigation} />}
      centerComponent={<LogoBarMenu navigation={props.navigation} />}
      statusBarProps={{ barStyle: "light-content" }}
      containerStyle={{
        backgroundColor: '#E3E3E3',
        justifyContent: 'space-around',
        paddingBottom: 25,
        height:60,
      }}
    />
  );
};

export default LoginHeader;