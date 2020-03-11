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
      email: '',
      fullName: '',
      addressLine1:'',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      toolTipEmail: false,
      toolTipPassword: false,
      loaderPointer: false,
      access_token: '',
    };
    
  }

  UNSAFE_componentWillMount() {
      this.setState({
        loaderPointer: !this.state.loaderPointer
      });

      AsyncStorage.getItem('access_token')
      .then(res => {
        if (res !== null) {
          this.setState({
            access_token: res
          });
          this.loadUserData();
        } else {
          this.setState({loaderPointer:false});
          ToastAndroid.show('You are not logged in!', ToastAndroid.SHORT);
          this.props.navigation.navigate('Home');
        }
      });

  }

  onLogin() {
    const { username, password } = this.state;

    AsyncStorage.setItem('access_token', '');
    ToastAndroid.show('Successfully loggedout !', ToastAndroid.SHORT);
    this.props.navigation.navigate('Home');

  }
  
  loadUserData() {

    fetch(pConst.projectApiUrl + 'api/customers/me', {
      method: 'GET',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                 'accessToken': this.state.access_token
        }),
      body: "" // <-- Post parameters
    })
    .then((response) => response.json())
    .then((responseData) => {

      this.setState({loaderPointer:false});

      if (responseData.status == 'OK') {
          this.setState({
            email: responseData.data.email,
            fullName: responseData.data.addresses[0].fullName,
            addressLine1:responseData.data.addresses[0].addressLine1,
            addressLine2: responseData.data.addresses[0].addressLine2,
            city: responseData.data.addresses[0].city,
            state: responseData.data.addresses[0].state,
            zip: responseData.data.addresses[0].zip,
          });
      } else {
          ToastAndroid.show('Please contact app admin !', ToastAndroid.SHORT);
      }

    })
    .catch((error) => {
        console.error(error);
    }); 
    
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
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 18, fontWeight: 'bold' , padding: 3 }}> {this.state.fullName} </Text>                
            </View> 
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 13, fontWeight: 'bold' , padding: 3}}> {this.state.email} </Text>                
            </View>
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center', borderWidth: 1, borderRadius: 10 }}>
                <Text style={{ textAlign: 'center', color: '#B2AFAC', fontSize: 18, fontWeight: 'bold' }}> Main Address </Text>                
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 18, fontWeight: 'bold' }}> {this.state.fullName} </Text>                
                <Text style={{ textAlign: 'center', color: '#767472', fontSize: 13, fontWeight: 'bold' , padding: 3}}> {this.state.addressLine1}, {this.state.addressLine2}, {this.state.city}, {"\n"}{this.state.state} </Text>                
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
            <TouchableWithoutFeedback style={{ }} onPress={this.onLogin.bind(this)}>
              <View style={{ marginTop: '5%', height: 30, backgroundColor: '#31895F', marginLeft: '5%', marginRight: '5%', textAlign: 'center', padding: 5, marginBottom: 20, borderRadius: 5 }}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#FFFFFF'}}>Logout</Text>    
              </View>
            </TouchableWithoutFeedback>  
            </ScrollView> 
      </View>
    );
  }
}



