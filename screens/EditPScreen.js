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
  Alert, TextInput, Picker,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import LoginHeader from "../navigation/LoginHeader";


export default class EditpScreen extends React.Component {
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
      confirmpassword: '',
      title: '',
      firstname: '',
      lastname: '',
      companyname: '',
      othername: '',
      nickname: '',
      addressline1: '',
      addressline2: '',
      city: '',
      state: '',
      country: '',
      postcode: '',
      phone: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#E3E3E3', width: '100%', height: '100%', flex: 1, flexDirection: 'column' }}>
          <View style={{}}>
            <LoginHeader navigation={this.props.navigation} title="Sign Up" />
          </View>
        <ScrollView contentContainerStyle={{ }}>    
          
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
                <TextInput
                  value={this.state.confirmpassword}
                  onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
                  placeholder={'Confirm Password'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ marginRight: '5%', marginLeft: '5%', marginTop: '2%', borderRadius: 5, height: 50, borderColor: '#000000', borderWidth: 1 }}>         
                  <Picker
                    selectedValue={this.state.title}
                    onValueChange={title => this.setState({ title })}
                    style={{ height: 50, padding: 5 }}
                    mode="dropdown">
                    <Picker.Item label="Mr" value="Mr" />
                    <Picker.Item label="Mrs" value="Mrs" />
                    <Picker.Item label="Miss" value="Miss" />
                    <Picker.Item label="Ms" value="Ms" />
                    <Picker.Item label="Mx" value="Mx" />
                    <Picker.Item label="Prof" value="Prof" />
                    <Picker.Item label="Dr" value="Dr" />

                  </Picker>
                </View>    
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.firstname}
                  onChangeText={(firstname) => this.setState({ firstname })}
                  placeholder={'First Name'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.lastname}
                  onChangeText={(lastname) => this.setState({ lastname })}
                  placeholder={'Last Name'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      value={this.state.companyname}
                      onChangeText={(companyname) => this.setState({ companyname })}
                      placeholder={'Company Name'}
                      secureTextEntry={true}
                      style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      value={this.state.othername}
                      onChangeText={(othername) => this.setState({ othername })}
                      placeholder={'Other Name'}
                      secureTextEntry={true}
                      style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                    />
                  </View>
                </View>
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.nickname}
                  onChangeText={(nickname) => this.setState({ nickname })}
                  placeholder={'Nick name for address'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.addressline1}
                  onChangeText={(addressline1) => this.setState({ addressline1 })}
                  placeholder={'Shipping address line 1'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.addressline2}
                  onChangeText={(addressline2) => this.setState({ addressline2 })}
                  placeholder={'Shipping address line 2'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.city}
                  onChangeText={(city) => this.setState({ city })}
                  placeholder={'City'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.state}
                  onChangeText={(state) => this.setState({ state })}
                  placeholder={'State'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
               <View style={{ marginRight: '5%', marginLeft: '5%', marginTop: '2%', borderRadius: 5, height: 50, borderColor: '#000000', borderWidth: 1 }}>         
                  <Picker
                    selectedValue={this.state.country}
                    onValueChange={country => this.setState({ country })}
                    style={{ height: 50, padding: 5}}
                    mode="dropdown">
                    <Picker.Item label="Select country" value="sc" />
                    <Picker.Item label="USA" value="USA" />
                    <Picker.Item label="EU" value="EU" />
                  </Picker>
                </View>
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.postcode}
                  onChangeText={(postcode) => this.setState({ postcode })}
                  placeholder={'Post code'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TextInput
                  value={this.state.phone}
                  onChangeText={(phone) => this.setState({ phone })}
                  placeholder={'Phone'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity style={{textAlign: 'center', color: 'green',backgroundColor: '#A7C7D3', height: 35, marginTop: '15%', marginLeft: '5%', marginRight: '5%', borderRadius: 5 }} onPress={this.onLogin.bind(this)}>
                  <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold' , padding: 7}}> Add Addresses </Text>                
                </TouchableOpacity>
          </View>
          
        </ScrollView>  
      </View>
    );
  }
}



