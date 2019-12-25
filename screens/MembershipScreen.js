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

export default class Membership extends React.Component {
  
  static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        null
      ),
      drawerLabel: ({ tintColor }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
          <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
            <Text style={{fontWeight: "bold"}} >Membership</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/team.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          </View>  
        </View>  
      ),
    };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#E3E3E3' }}>
        <MyHeader navigation={this.props.navigation} title="Membership" />
        <Text style={{ }}>Membership</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
    width: 50,
    height: 50,
  }
});
