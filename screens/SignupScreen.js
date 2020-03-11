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
  Alert, TextInput, Picker, ToastAndroid, AsyncStorage,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import LoginHeader from "../navigation/LoginHeader";
import Tooltip from 'react-native-walkthrough-tooltip';
import Spinner from 'react-native-loading-spinner-overlay';
import pConst from "../constants/ProjectConstants";



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
    this.myRef = React.createRef();
    this.refEmail = React.createRef();
    this.emailTextboxRef = React.createRef();
    this.refPassword = React.createRef();
    this.refTest = React.createRef();
      

     AsyncStorage.getItem('access_token')
      .then(res => {
        if (res !== null) {
          // Alert.alert(res);
        } else {
          Alert.alert(false);
        }
      }); 

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
      country: 'SC',
      countries: [],
      postcode: '',
      phone: '',
      confirmpasswordMessage: 'Not valid confirm password !',
      toolTipEmail: false,
      toolTipEmailCheck: false,
      toolTipPassword: false,
      toolTipConfirmPassword: false,
      toolTipConfirmPassword2: false,
      toolTipFirstname: false,
      toolTipLastname: false,
      toolTipNickname: false,
      toolTipAddressline1: false,
      toolTipCity: false,
      toolTipCountry: false,
      toolTipPostcode: false,
      toolTipState: false,
      loaderPointer: false,
    };
  }

  componentDidMount() {
      this.setState({
        loaderPointer: !this.state.loaderPointer
      });

      this.getCountries();
  }

  setDefaultState() {
    this.setState({
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
      country: 'SC',
      countries: [],
      postcode: '',
      phone: '',
      confirmpasswordMessage: 'Not valid confirm password !',
      toolTipEmail: false,
      toolTipEmailCheck: false,
      toolTipPassword: false,
      toolTipConfirmPassword: false,
      toolTipConfirmPassword2: false,
      toolTipFirstname: false,
      toolTipLastname: false,
      toolTipNickname: false,
      toolTipAddressline1: false,
      toolTipCity: false,
      toolTipCountry: false,
      toolTipPostcode: false,
      toolTipState: false,
      loaderPointer: false,
    });
  }

  getCountries() {

    fetch(pConst.projectApiUrl + 'api/countries', {
      method: 'GET',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
      body: "" // <-- Post parameters
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({loaderPointer:false});
      this.setState({countries:responseData.data});
    })
    .catch((error) => {
        console.error(error);
    }); 

  }

  checkEmailExists(emailField){

    let me = this;

      this.setState({
        loaderPointer: !this.state.loaderPointer
      });

        fetch(pConst.projectApiUrl + 'api/customers/checkEmail', {
          method: 'POST',
          headers: new Headers({
                     'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
          body: "email=" + emailField // <-- Post parameters
        })
        .then((response) => response.json())
        .then((responseData) => {
       
          if (responseData.data.emailExists) {
              this.setState({loaderPointer:false});
              this._scrollView.scrollTo({ x: 0, y: 0, animated: true });
              setTimeout(function(){me.setState({toolTipEmailCheck: true})}, 1);
              ToastAndroid.show('Email already exists!', ToastAndroid.SHORT);
          }    

          if (!responseData.data.emailExists) {
              this.setState({loaderPointer:false});
              this.signUpUser();
          } 
        })
        .catch((error) => {
            console.error(error);
        }); 

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

  matchPassword() {
      return this.state.password == this.state.confirmpassword;
  }

  validateEmpty(data) {
      return data.length;
  }

  validateCountry(data) {
      return data != "SC";
  }
  
  onLogin() {
   
    let me = this;
    if(!this.validateEmail(this.state.username)){
      this._scrollView.scrollTo({ x: 0, y: 0, animated: true });
      setTimeout(function(){me.setState({toolTipEmail: true})}, 1);
      ToastAndroid.show('Not valid email !', ToastAndroid.SHORT);
      return true;
    }  

    if(!this.validatePassword(this.state.password)){
      this._scrollView.scrollTo({ x: 0, y: 50, animated: true });
      setTimeout(function(){me.setState({toolTipPassword: true})}, 1);
      ToastAndroid.show('Not valid password !', ToastAndroid.SHORT);
      return true;
    } 

    if(!this.validatePassword(this.state.confirmpassword)){
      this._scrollView.scrollTo({ x: 0, y: 100, animated: true });
      setTimeout(function(){me.setState({toolTipConfirmPassword: true})}, 1);
      ToastAndroid.show(this.state.confirmpasswordMessage, ToastAndroid.SHORT);
      return true;
    } 

    if(!this.matchPassword()){
      this._scrollView.scrollTo({ x: 0, y: 100, animated: true });
      setTimeout(function(){me.setState({toolTipConfirmPassword2: true})}, 1);
      ToastAndroid.show('Password and confirm password does not match!', ToastAndroid.SHORT);
      return true;
    } 

    if(!this.validateEmpty(this.state.firstname)){
      this._scrollView.scrollTo({ x: 0, y: 200, animated: true });
      setTimeout(function(){me.setState({toolTipFirstname: true})}, 1);
      ToastAndroid.show('First name is required !', ToastAndroid.SHORT);
      return true;
    }

    if(!this.validateEmpty(this.state.lastname)){
      this._scrollView.scrollTo({ x: 0, y: 250, animated: true });
      setTimeout(function(){me.setState({toolTipLastname: true})}, 1);
      ToastAndroid.show('Last name is required !', ToastAndroid.SHORT);
      return true;
    }

    if(!this.validateEmpty(this.state.nickname)){
      this._scrollView.scrollTo({ x: 0, y: 350, animated: true });
      setTimeout(function(){me.setState({toolTipNickname: true})}, 1);
      ToastAndroid.show('Nick name is required !', ToastAndroid.SHORT);
      return true;
    }

    if(!this.validateEmpty(this.state.addressline1)){
      this._scrollView.scrollTo({ x: 0, y: 400, animated: true });
      setTimeout(function(){me.setState({toolTipAddressline1: true})}, 1);
      ToastAndroid.show('Nick name is required !', ToastAndroid.SHORT);
      return true;
    }

    if(!this.validateEmpty(this.state.city)){
      this._scrollView.scrollTo({ x: 0, y: 450, animated: true });
      setTimeout(function(){me.setState({toolTipCity: true})}, 1);
      ToastAndroid.show('City is required !', ToastAndroid.SHORT);
      return true;
    }

    if(!this.validateCountry(this.state.country)){
      this._scrollView.scrollTo({ x: 0, y: 550, animated: true });
      setTimeout(function(){me.setState({toolTipCountry: true})}, 1);
      ToastAndroid.show('Country is required !', ToastAndroid.SHORT);
      return true;
    }

    if(!this.validateEmpty(this.state.postcode)){
      this._scrollView.scrollTo({ x: 0, y: 600, animated: true });
      setTimeout(function(){me.setState({toolTipPostcode: true})}, 1);
      ToastAndroid.show('Post code is required !', ToastAndroid.SHORT);
      return true;
    }

    if(!this.validateEmpty(this.state.state)){
      this._scrollView.scrollTo({ x: 0, y: 550, animated: true });
      setTimeout(function(){me.setState({toolTipState: true})}, 1);
      ToastAndroid.show('State is required !', ToastAndroid.SHORT);
      return true;
    }

    this.checkEmailExists(this.state.username);
      
  }


  signUpUser() {

    let dataToSend = "email=" + this.state.username + "&password=" + this.state.password;
    dataToSend = dataToSend + "&confirmPassword=" + this.state.confirmpassword + "&firstName=" + this.state.firstname;
    dataToSend = dataToSend + "&lastName=" + this.state.lastname + "&addressNickname=" + this.state.nickname;
    dataToSend = dataToSend + "&countryId=" + this.state.country + "&addressLine1=" + this.state.addressline1;
    dataToSend = dataToSend + "&city=" + this.state.city + "&zip=" + this.state.postcode;
    dataToSend = dataToSend + "&state=" + this.state.state + "&prefixName=" + this.state.title;
    dataToSend = dataToSend + "&addressLine2=" + this.state.addressline2 + "&phone=" + this.state.phone;

    fetch(pConst.projectApiUrl + 'api/customers/signup', {
      method: 'POST',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
      body: dataToSend // <-- Post parameters
    })
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.status == 'OK') {
          AsyncStorage.setItem('access_token', responseData.data.accessToken);
          ToastAndroid.show('Successfully registered !', ToastAndroid.SHORT);
          this.setDefaultState();
          this.props.navigation.navigate('Home');
      } else {
          ToastAndroid.show('Please contact app admin !', ToastAndroid.SHORT);
      }


    })
    .catch((error) => {
        console.error(error);
    }); 
    
  }

  render() {
    let countryItems = [];
    if(this.state.countries != []) {
    countryItems = this.state.countries.map( (item, key) => {
            return <Picker.Item key={item.id} value={item.id} label={item.name} />
        });
    }
    return (
      <View style={{ backgroundColor: '#E3E3E3', width: '100%', height: '100%', flex: 1, flexDirection: 'column' }}>
          <View style={{}}>
            <LoginHeader navigation={this.props.navigation} title="Sign Up" />
          </View>
        <ScrollView ref={(ref) => this._scrollView = ref} contentContainerStyle={{ }}>
          <Spinner
            visible={this.state.loaderPointer}
            textContent={'Loading...'}
            textStyle={{color: '#000'}}
          />  
          <View style={{ backgroundColor: '#FFFFFF'  }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, height: 35, marginTop: '5%' }}>Sign Up</Text>           
          </View>  
          <View style={{ backgroundColor: '#FFFFFF' }}>
            <Tooltip  isVisible={this.state.toolTipEmail}  content={<Text>Not valid email!</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipEmail: false })}>
              <Text style={{display: 'none'}}>Email</Text>
            </Tooltip>
            <Tooltip  isVisible={this.state.toolTipEmailCheck}  content={<Text>Email already exists!</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipEmailCheck: false })}>
              <Text style={{display: 'none'}}>Email</Text>
            </Tooltip>
            <TextInput
              value={this.state.username}
              ref={this.emailTextboxRef}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Email'}
              style={{ marginRight: '5%', marginLeft: '5%',padding: 5, backgroundColor: 'transparent', height: 50, borderBottomWidth : 1.0, borderColor: '#31895F' }}
            />  
          </View> 
          <View style={{ backgroundColor: '#FFFFFF' }}>
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
          <View style={{ backgroundColor: '#FFFFFF' }}>
                <Tooltip  isVisible={this.state.toolTipConfirmPassword}  content={<Text>{this.state.confirmpasswordMessage}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipConfirmPassword: false })}>
                  <Text style={{display: 'none'}}>Confirm Password</Text>
                </Tooltip>
                <Tooltip  isVisible={this.state.toolTipConfirmPassword2}  content={<Text>{'Password and confirm password does not match!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipConfirmPassword2: false })}>
                  <Text style={{display: 'none'}}>Confirm Password</Text>
                </Tooltip>
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
              <Tooltip  isVisible={this.state.toolTipFirstname}  content={<Text>{'First name is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipFirstname: false })}>
                <Text style={{display: 'none'}}>First name</Text>
              </Tooltip>
                <TextInput
                  value={this.state.firstname}
                  onChangeText={(firstname) => this.setState({ firstname })}
                  placeholder={'First Name'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
              <Tooltip  isVisible={this.state.toolTipLastname}  content={<Text>{'Last name is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipLastname: false })}>
                <Text style={{display: 'none'}}>Last name</Text>
              </Tooltip>
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
              <Tooltip  isVisible={this.state.toolTipNickname}  content={<Text>{'Nick name is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipNickname: false })}>
                <Text style={{display: 'none'}}>Nick name</Text>
              </Tooltip>
                <TextInput
                  value={this.state.nickname}
                  onChangeText={(nickname) => this.setState({ nickname })}
                  placeholder={'Nick name for address'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
              <Tooltip  isVisible={this.state.toolTipAddressline1}  content={<Text>{'Address line is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipAddressline1: false })}>
                <Text style={{display: 'none'}}>Address line 1</Text>
              </Tooltip>
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
              <Tooltip  isVisible={this.state.toolTipCity}  content={<Text>{'City is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipCity: false })}>
                <Text style={{display: 'none'}}>City</Text>
              </Tooltip>
                <TextInput
                  value={this.state.city}
                  onChangeText={(city) => this.setState({ city })}
                  placeholder={'City'}
                  secureTextEntry={true}
                  style={{ marginRight: '5%', marginLeft: '5%', backgroundColor: 'transparent', height: 50, padding: 5, borderBottomWidth : 1.0, borderColor: '#31895F'}}
                />
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
              <Tooltip  isVisible={this.state.toolTipState}  content={<Text>{'State is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipState: false })}>
                <Text style={{display: 'none'}}>State</Text>
              </Tooltip>
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
                  <Tooltip  isVisible={this.state.toolTipCountry}  content={<Text>{'Country is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipCountry: false })}>
                    <Text style={{display: 'none'}}>Country</Text>
                  </Tooltip>  
                  <Picker
                    selectedValue={this.state.country}
                    onValueChange={country => this.setState({ country })}
                    style={{ height: 50, padding: 5}}
                    mode="dropdown">
                    <Picker.Item label="Select country" value="SC" />
                    {countryItems}
                  </Picker>
                </View>
          </View>
          <View style={{ backgroundColor: '#FFFFFF' }}>
              <Tooltip  isVisible={this.state.toolTipPostcode}  content={<Text>{'Postcode is required!'}</Text>}   placement="bottom"    onClose={() => this.setState({ toolTipPostcode: false })}>
                <Text style={{display: 'none'}}>Postcode</Text>
              </Tooltip>
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
        </ScrollView>  
      </View>
    );
  }
}



