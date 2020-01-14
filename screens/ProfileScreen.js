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
  TouchableWithoutFeedback,
  Dimensions,
  View,
  Alert, TextInput,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import LoginHeader from "../navigation/LoginHeader";


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      null
    ),
    drawerLabel: ({ tintColor }) => (
     null
    ),
  };

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#E3E3E3', width: '100%', height: '100%' }}>
          <View style={{}}>
            <LoginHeader navigation={this.props.navigation} title="Sign In" />
          </View>  
          <ScrollView contentContainerStyle={{ }}> 
            <View style={{ backgroundColor: '#E3E3E3', textAlign: 'center', marginTop: '2%' }}>
              <Icon
                color="#767472"
                name="md-contact"
                onPress={() => props.navigation.navigate('profile')}
                size={80}
                style={{textAlign: 'center'}}
              />          
            </View>  
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 18, fontWeight: 'bold' , padding: 3 }}> Jordan Goedhart </Text>                
            </View> 
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 13, fontWeight: 'bold' , padding: 3}}> jordan.goedhart@shop2ship.com </Text>                
            </View>
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center', borderWidth: 1, borderRadius: 10 }}>
                <Text style={{ textAlign: 'center', color: '#B2AFAC', fontSize: 18, fontWeight: 'bold' }}> Main Address </Text>                
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 18, fontWeight: 'bold' }}> Jordan Goedhart </Text>                
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 13, fontWeight: 'bold' , padding: 3}}> 48B Douglas avenue, Johannesburg, Gauteng, {"\n"}2196 </Text>                
                <TouchableOpacity style={{ }} onPress={ () => this.props.navigation.navigate('editprofile')}>
                  <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#31895F', height: 35}}>
                    <Text style={{ textAlign: 'center', color: '#767472', fontSize: 13, fontWeight: 'bold' , padding: 5, color: '#FFFFFF'}}> Edit Address </Text>
                  </View>
                </TouchableOpacity>  
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center', backgroundColor: '#E3E3E3', marginLeft: '10%', marginRight: '10%', textAlign: 'center', marginTop: 15 }}>
                  <TouchableOpacity style={{ textAlign: 'center',backgroundColor: '#31895F', padding: 10, borderRadius: 55 }} onPress={this.onLogin.bind(this)}>
                    <View style={{ backgroundColor: 'transparent', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                      <Text style={{ textAlign: 'center'}}>US Warehouse</Text>
                      <Text style={{ textAlign: 'center'}}>Suite: 74063371</Text>
                      <Text style={{ textAlign: 'center'}}>2229 NW 79th Ave, Mami, Florida, {'\n'} 33122, United States of America</Text>
                    </View>
                  </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center', backgroundColor: '#E3E3E3', marginLeft: '10%', marginRight: '10%', textAlign: 'center', marginTop: 15 }}>
                  <TouchableOpacity style={{ textAlign: 'center',backgroundColor: '#31895F', padding: 10, borderRadius: 55 }} onPress={this.onLogin.bind(this)}>
                    <View style={{ backgroundColor: 'transparent', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                      <Text style={{ textAlign: 'center'}}>EU Warehouse</Text>
                      <Text style={{ textAlign: 'center'}}>Suite: 74063371</Text>
                      <Text style={{ textAlign: 'center'}}>2229 NW 79th Ave, Mami, Florida, {'\n'} 33122, United States of America</Text>
                    </View>
                  </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback style={{ }} onPress={ () => this.props.navigation.navigate('signup')}>
              <View style={{ marginTop: '5%', height: 30, backgroundColor: '#31895F', marginLeft: '5%', marginRight: '5%', textAlign: 'center', padding: 5, marginBottom: 20, borderRadius: 5 }}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#FFFFFF'}}>Logout</Text>    
              </View>
            </TouchableWithoutFeedback>  
            </ScrollView> 
      </View>
    );
  }
}



