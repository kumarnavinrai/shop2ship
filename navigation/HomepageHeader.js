import React from "react";
import { Header } from "react-native-elements";

import HamburgerMenu from "./HamburgerMenu";
import ProfileMenu from "./ProfileMenu";
import LogoBarMenu from "./LogoBarMenu";

const HomepageHeader = props => {
  return (
    <Header
      leftComponent={<HamburgerMenu navigation={props.navigation} />}
      centerComponent={<LogoBarMenu navigation={props.navigation} />}
      rightComponent={<ProfileMenu navigation={props.navigation} />}
      statusBarProps={{ barStyle: "light-content" }}
      containerStyle={{
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        paddingBottom: 25,
        height:60,
      }}
    />
  );
};

export default HomepageHeader;