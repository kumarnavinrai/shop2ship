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
  Alert, TextInput, ToastAndroid, AsyncStorage,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import LoginHeader from "../navigation/LoginHeader";
import pConst from "../constants/ProjectConstants";
import Tooltip from 'react-native-walkthrough-tooltip';
import Spinner from 'react-native-loading-spinner-overlay';

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

     AsyncStorage.getItem('access_token')
      .then(res => {
        if (res !== null) {
          //Alert.alert(res);
        } else {
          //Alert.alert(false);
        }
      });
    
    this.state = {
      username: '',
      password: '',
      toolTipEmail: false,
      toolTipPassword: false,
    };
  }

  setDefaultState() {

    this.setState = ({
      username: '',
      password: '',
      toolTipEmail: false,
      toolTipPassword: false,
    });

  }
  
  onLogin() {
    
    const { username, password } = this.state;

    let me = this;
    if(!this.validateEmail(this.state.username)){
      setTimeout(function(){me.setState({toolTipEmail: true})}, 1);
      ToastAndroid.show('Not valid email !', ToastAndroid.SHORT);
      return true;
    }  

    if(!this.validatePassword(this.state.password)){
      setTimeout(function(){me.setState({toolTipPassword: true})}, 1);
      ToastAndroid.show('Not valid password !', ToastAndroid.SHORT);
      return true;
    } 

    this.loginUser(username, password);
  }

  loginUser(username, password) {

    this.setState({
        loaderPointer: !this.state.loaderPointer
    });

    fetch(pConst.projectApiUrl + 'api/customers/login', {
      method: 'POST',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
      body: "email=" + username + "&password=" + password // <-- Post parameters
    })
    .then((response) => response.json())
    .then((responseData) => {

      this.setState({loaderPointer:false});
      if (responseData.status == 'OK') {
          AsyncStorage.setItem('access_token', responseData.data.accessToken);
          ToastAndroid.show('Successfully loggedin !', ToastAndroid.SHORT);
          this.setDefaultState();
          this.props.navigation.navigate('Home');
      } else {
          ToastAndroid.show('Please contact app admin !', ToastAndroid.SHORT);
      }

    })
    .catch((error) => {
        console.error(error);
    }); 

   /*

    fetch( pConst.projectApiUrl + 'api/customers/login',{
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formdata
      }).then((response) => response.json())
      .then((responseData) => {
        console.log('Fetch Success==================');
        console.log(responseData);
      }).catch(err => {
        console.log(err);
      });  */
    
  }

  validateEmail(emailField){
          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (reg.test(emailField) == false) 
          {
              return false;
          }

          return true;

  }

  validatePassword(pw) {

      return /[A-Z]/       .test(pw) &&
             /[a-z]/       .test(pw) &&
             /[0-9]/       .test(pw) &&
             /[^A-Za-z0-9]/.test(pw) &&
             pw.length > 7;

  }

  render() {
    return (
      <View style={{ backgroundColor: '#E3E3E3', width: '100%', height: '100%' }}>
          <View style={{}}>
            <LoginHeader navigation={this.props.navigation} title="Sign In" />
          </View> 
          <Spinner
            visible={this.state.loaderPointer}
            textContent={'Loading...'}
            textStyle={{color: '#000'}}
          />  
          <View style={{ backgroundColor: '#FFFFFF' , marginTop: '25%', marginLeft: '5%', marginRight: '5%' }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, height: 55, marginTop: '5%' }}>Sign In</Text>
          </View>  
          <View style={{ backgroundColor: '#FFFFFF', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
            <Tooltip  isVisible={this.state.toolTipEmail}  content={<Text>Not valid email!</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipEmail: false })}>
              <Text style={{display: 'none'}}>Email</Text>
            </Tooltip> 
                <TextInput
                  value={this.state.username}
                  onChangeText={(username) => this.setState({ username })}
                  placeholder={'Email'}
                  style={{ marginRight: '5%', marginLeft: '5%',padding: 5, backgroundColor: 'transparent', height: 50, borderBottomWidth : 1.0, borderColor: '#31895F' }}
                />
          </View> 
          <View style={{ backgroundColor: '#FFFFFF', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
              <Tooltip  isVisible={this.state.toolTipPassword}  content={<Text>Not valid password!</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipPassword: false })}>
                <Text style={{display: 'none'}}>Password</Text>
              </Tooltip>
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



