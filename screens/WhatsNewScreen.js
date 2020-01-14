import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { MonoText } from '../components/StyledText';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import MyHeader from "../navigation/MyHeader";

export default class WhatsnewScreen extends React.Component {

  static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        null
      ),
      drawerLabel: ({ tintColor }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
          <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
            <Text style={{fontWeight: "bold"}} >Whats New</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/newbadge.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          </View>  
        </View>  
      ),
    };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#E3E3E3' }}>
        <MyHeader navigation={this.props.navigation} title="Whats New" />
        <ScrollView contentContainerStyle={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#E3E3E3' }}>
          <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#E3E3E3', marginLeft: '5%' }}>
              <Image
                source={require('../assets/images/CyberMonda.png')}
                style={[styles.iconimg, { }]}
              />
          </View>
          <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '5%' }}>
            <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 'bold', color: '#0C0C0C' }}>Get ready for Cyber Monday 2019{'\n'} Sales!</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  iconimg: {
    width: 250,
    height: 250,
    marginLeft: '5%',
  },
});
