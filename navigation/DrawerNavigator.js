import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreenNew from '../screens/HomeScreenNew';
import HiwScreen from '../screens/HiwScreen';
import ServicesScreen from '../screens/ServicesScreen';
import MembershipScreen from '../screens/MembershipScreen';
import SalestaxScreen from '../screens/SalesTaxFreePartnersScreen';
import WhatsnewScreen from '../screens/WhatsNewScreen';
import FaqScreen from '../screens/FaqScreen';
import LiveChatScreen from '../screens/LiveChatScreen';



const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreenNew,
  },
  Howitworks: {
    screen: HiwScreen,
  },
  Services: {
    screen: ServicesScreen,
  },
  Membership: {
    screen: MembershipScreen,
  },
  SalestaxFreePartners: {
    screen: SalestaxScreen,
  },
  WhatsNew: {
    screen: WhatsnewScreen,
  },
  FAQ: {
    screen: FaqScreen,
  },
  LiveChat: {
    screen: LiveChatScreen,
  },

});

const DashboardStackNavigator = createStackNavigator(
  {
    screens: MyDrawerNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-contact"
            size={30}
          />
        ),
        headerBackground: (
          <Image
            style={{width:150, height: 30, margin: 35, marginLeft: 85}}
            source={{ uri: 'http://infopro.site/hbacks.png' }}
          />
        ),
        headerTitleStyle: { color: '#fff' },
      };
    },
    navigationOptions: {
      headershown: false,
    },
  }
);

export default DashboardStackNavigator;