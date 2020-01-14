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

export default class LiveChatScreen extends React.Component {

  static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        null
      ),
      drawerLabel: ({ tintColor }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
          <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
            <Text style={{fontWeight: "bold"}} >Live Chat</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/message.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          </View>  
        </View>  
      ),
    };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#FFFFFF' }}>
        <MyHeader navigation={this.props.navigation} title="Live Chat" />
        <View style={{ flex: 1, alignSelf: 'center', backgroundColor: '#FFFFFF', marginTop: '40%' }}>
          <Icon color="#E67E7E" name="md-stopwatch" size={30} style={{ textAlign: 'center' }} />             
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>No agents available</Text>
          <Text style={{ textAlign: 'center', color: '#696969', fontSize: 17 }}>Sorry there are no agents available to chat.{'\n'}Please try again later or leave us a{'\n'}message.</Text>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={() => onPress()}
          >
           <Text style={styles.textStyle}>LEAVE MESSAGE</Text>
          </TouchableOpacity>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  textStyle: {
    fontSize:17,
  color: '#ffffff',
  textAlign: 'center'
  },
  
  buttonStyle: {
  padding:15,
  backgroundColor: '#2196F3',
  width: 180,
  alignSelf: 'center',
  marginTop: 15,
  }
});
