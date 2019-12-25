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


export default class SignupScreen extends React.Component {
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
            <LoginHeader navigation={this.props.navigation} title="Sign Up" />
          </View>  
          <View style={{ backgroundColor: '#FFFFFF'  }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, height: 55, marginTop: '5%' }}>Sign Up</Text>
          </View>  
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.username}
                  onChangeText={(username) => this.setState({ username })}
                  placeholder={'Email'}
                  style={{ marginRight: '5%', marginLeft: '5%',padding: 5, backgroundColor: 'transparent', height: 50, borderBottomWidth : 1.0, borderColor: '#31895F' }}
                />
          </View> 
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity style={{textAlign: 'center', color: 'green',backgroundColor: '#31895F', height: 50, marginTop: '15%', marginLeft: '15%', marginRight: '15%'}} onPress={this.onLogin.bind(this)}>
                  <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold' , padding: 15}}> SIGN UP </Text>                
                </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: '5%', marginBottom: '10%'}}>Already have an account?
                  <Text style={{color: '#31895F'}}> Sign In</Text>
                </Text>    
            </View>
          </TouchableWithoutFeedback> 
      </View>
    );
  }
}



