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


export default class SigninScreen extends React.Component {
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
          <View style={{ backgroundColor: '#FFFFFF' , marginTop: '25%', marginLeft: '5%', marginRight: '5%' }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, height: 55, marginTop: '5%' }}>Sign In</Text>
          </View>  
          <View style={{ backgroundColor: '#FFFFFF', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                <TextInput
                  value={this.state.username}
                  onChangeText={(username) => this.setState({ username })}
                  placeholder={'Email'}
                  style={{ marginRight: '5%', marginLeft: '5%',padding: 5, backgroundColor: 'transparent', height: 50, borderBottomWidth : 1.0, borderColor: '#31895F' }}
                />
          </View> 
          <View style={{ backgroundColor: '#FFFFFF', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                <TextInput
                  value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                <TouchableOpacity style={{textAlign: 'center', color: 'green',backgroundColor: '#31895F', height: 50, marginTop: '15%', marginLeft: '15%', marginRight: '15%'}} onPress={this.onLogin.bind(this)}>
                  <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold' , padding: 15}}> SIGN IN </Text>                
                </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signup')}>
            <View style={{ backgroundColor: '#FFFFFF', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: '5%', marginBottom: '10%'}}>New User?
                  <Text style={{color: '#31895F'}}> Create Account</Text>
                </Text>    
            </View>
          </TouchableWithoutFeedback>  
      </View>
    );
  }
}



