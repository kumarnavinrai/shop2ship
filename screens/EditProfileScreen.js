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
import Ticon from '@expo/vector-icons/MaterialCommunityIcons';
import EditprofileHeader from "../navigation/EditprofileHeader";


export default class EditProfileScreen extends React.Component {
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
            <EditprofileHeader navigation={this.props.navigation} title="Edit Profile" />
          </View>  
          <ScrollView contentContainerStyle={{ }}>  
            <View style={{ flex: 1, flexDirection: 'row', alignItem: 'center', justifyContent: 'center', height: 40}}>
              <Text style={{ textAlign: 'center', padding: 7, fontWeight: 'bold', color: '#DEA460', fontSize: 15 }}> Save Address </Text>
            </View> 
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center', borderWidth: 1, borderRadius: 10, marginBottom: '5%' }}>
                  <View style={{ flext: 1, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ABC7D5', height: 35}}>
                    <View style={{ flex: 1, alignItem: 'flex-start' }}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' , padding: 5, color: '#000000'}}> Home </Text>
                    </View>
                    <TouchableOpacity style={{}} onPress={ () => this.props.navigation.navigate('editp')}>
                      <View style={{ textAlign: 'right', padding: 5 }}>
                        <Ticon
                          color="#FFFFFF"
                          name="pencil"
                          size={20}
                        />  
                      </View>
                    </TouchableOpacity>  

                    <TouchableOpacity style={{}} onPress={ () => this.props.navigation.navigate('signup')}>
                    <View style={{ textAlign: 'right', padding: 5 }}>
                      <Ticon
                        color="#FFFFFF"
                        name="delete"
                        onPress={() => props.navigation.navigate('profile')}
                        size={20}
                      />  
                    </View>
                    </TouchableOpacity>
                  </View>
                <Text style={{ color: '#B2AFAC', fontSize: 15, fontWeight: 'bold', marginBottom: 5, marginTop: 10 }}> Address </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> 48B Douglas Road </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> Johannesburg </Text>
                <Text style={{ color: '#000000', fontSize: 13,  }}> Gautang-2196 </Text>                
              
            </View>
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center', borderWidth: 1, borderRadius: 10, marginBottom: '5%' }}>
                <TouchableOpacity style={{ }} onPress={this.onLogin.bind(this)}>
                  <View style={{ flext: 1, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ABC7D5', height: 35}}>
                    <View style={{ flex: 1, alignItem: 'flex-start' }}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' , padding: 5, color: '#000000'}}> Aresh Chanduwadia </Text>
                    </View>
                    <View style={{ textAlign: 'right', padding: 5 }}>
                      <Ticon
                        color="#FFFFFF"
                        name="pencil"
                        onPress={() => this.props.navigation.navigate('editp')}
                        size={20}
                      />  
                    </View>
                    <View style={{ textAlign: 'right', padding: 5 }}>
                      <Ticon
                        color="#FFFFFF"
                        name="delete"
                        onPress={() => props.navigation.navigate('profile')}
                        size={20}
                      />  
                    </View>
                  </View>
                </TouchableOpacity> 
                <Text style={{ color: '#B2AFAC', fontSize: 15, fontWeight: 'bold', marginBottom: 5, marginTop: 10 }}> Address </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> 48B Douglas Road </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> Johannesburg </Text>
                <Text style={{ color: '#000000', fontSize: 13,  }}> Gautang-2196 </Text>                
              
            </View>
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center', borderWidth: 1, borderRadius: 10, marginBottom: '5%' }}>
                  <View style={{ flext: 1, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ABC7D5', height: 35}}>
                    <View style={{ flex: 1, alignItem: 'flex-start' }}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' , padding: 5, color: '#000000'}}> Joe Test </Text>
                    </View>
                    <View style={{ textAlign: 'right', padding: 5 }}>
                      <Ticon
                        color="#FFFFFF"
                        name="pencil"
                        onPress={() => props.navigation.navigate('profile')}
                        size={20}
                      />  
                    </View>
                    <View style={{ textAlign: 'right', padding: 5 }}>
                      <Ticon
                        color="#FFFFFF"
                        name="delete"
                        onPress={() => props.navigation.navigate('profile')}
                        size={20}
                      />  
                    </View>
                  </View>
                <Text style={{ color: '#B2AFAC', fontSize: 15, fontWeight: 'bold', marginBottom: 5, marginTop: 10 }}> Address </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> 48B Douglas Road </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> Johannesburg </Text>
                <Text style={{ color: '#000000', fontSize: 13,  }}> Gautang-2196 </Text>                
              
            </View>
            <View style={{ backgroundColor: '#E3E3E3', marginLeft: '5%', marginRight: '5%', textAlign: 'center', borderWidth: 1, borderRadius: 10, marginBottom: '5%' }}>
                <TouchableOpacity style={{ }} onPress={this.onLogin.bind(this)}>
                  <View style={{ flext: 1, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ABC7D5', height: 35}}>
                    <View style={{ flex: 1, alignItem: 'flex-start' }}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' , padding: 5, color: '#000000'}}> Joeachillim test </Text>
                    </View>
                    <View style={{ textAlign: 'right', padding: 5 }}>
                      <Ticon
                        color="#FFFFFF"
                        name="pencil"
                        onPress={() => props.navigation.navigate('profile')}
                        size={20}
                      />  
                    </View>
                    <View style={{ textAlign: 'right', padding: 5 }}>
                      <Ticon
                        color="#FFFFFF"
                        name="delete"
                        onPress={() => props.navigation.navigate('profile')}
                        size={20}
                      />  
                    </View>
                  </View>
                </TouchableOpacity> 
                <Text style={{ color: '#B2AFAC', fontSize: 15, fontWeight: 'bold', marginBottom: 5, marginTop: 10 }}> Address </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> 48B Douglas Road </Text>                
                <Text style={{ color: '#000000', fontSize: 13,  }}> Johannesburg </Text>
                <Text style={{ color: '#000000', fontSize: 13,  }}> Gautang-2196 </Text>                
              
            </View> 
        </ScrollView> 
      </View>
    );
  }
}



