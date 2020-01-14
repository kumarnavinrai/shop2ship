import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  View,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaView } from 'react-navigation'




import TabBarIcon from '../components/TabBarIcon';
import HomeScreenNew from '../screens/HomeScreenNew';
import HiwScreen from '../screens/HiwScreen';
import ServicesScreen from '../screens/ServicesScreen';
import MembershipScreen from '../screens/MembershipScreen';
import SalestaxScreen from '../screens/SalesTaxFreePartnersScreen';
import WhatsnewScreen from '../screens/WhatsNewScreen';
import FaqScreen from '../screens/FaqScreen';
import LiveChatScreen from '../screens/LiveChatScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import EditPScreen from '../screens/EditPScreen';



const styles = StyleSheet.create({
  icon: {
    width: 145,
    height: 30
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
  signin: {
    screen: SigninScreen
  },
  signup: {
    screen: SignupScreen
  },
  profile: {
    screen: ProfileScreen
  },
  editprofile: {
    screen: EditProfileScreen
  },
  editp: {
    screen: EditPScreen
  }

}
,
  {
    initialRouteName:'Home',
    headerMode: 'none',
    drawerWidth: Dimensions.get('window').width - 140,
    contentComponent: (props) => (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E3E3E3'}}>
        <View style={{height: 100,alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
          <View>
            <Image
              source={require('../assets/images/hback.png')}
              style={[styles.icon, {}]}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Menu</Text>
          </View>
        </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
   )
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    screens: MyDrawerNavigator,
  },
  {
    headerMode : 'none',
  }
);

 export default DashboardStackNavigator; 


/*
class HeaderNavigationBar extends Component {
    render() {
        return (<View style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                onPress={() => { this.props.navigation.openDrawer() }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}}
                />
            </TouchableHighlight>
        </View>);
    }
}

export class HomeScreen extends Component {

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
            <View style={{
                flex: 1,
                backgroundColor: '#4885ed',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Home Screen
                </Text>
                
            </View>
        </View>);
    }
}

export class InfoScreen extends Component {

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
            <View style={{
                flex: 1,
                backgroundColor: '#4734ac',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Info Screen
                </Text>
                
            </View>
        </View>);
    }

}

const MyDrawerNavigator = createDrawerNavigator (
    {
      Home:{
        screen:HomeScreenNew
      },
      Info:{
        screen:InfoScreen
      }
    },{
        initialRouteName:'Home',
        drawerWidth: Dimensions.get('window').width - 150,
    }
)


const DashboardStackNavigator = createStackNavigator(
  {
    Home: MyDrawerNavigator,
    Info: MyDrawerNavigator,
  }
);
 export default DashboardStackNavigator; */