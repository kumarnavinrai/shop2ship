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
  ImageBackground,
  Dimensions,
  View,
} from 'react-native';

import Icon from '@expo/vector-icons/Ionicons';
import HomepageHeader from "../navigation/HomepageHeader";

export default class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      null
    ),
    drawerLabel: ({ tintColor }) => (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
        <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
          <Text style={{fontWeight: "bold"}} >Home</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/home.png')}
            style={[styles.iconsidemenu, { tintColor: tintColor }]}
          />
        </View>  
      </View>  
    ),
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/images/homebg.png')} style={{width: '100%', height: '100%'}}>
          <HomepageHeader navigation={this.props.navigation} title="Home" />
            <ScrollView contentContainerStyle={{ }}> 
             <View elevation={5} style={{flex: 1, flexDirection: 'row', borderRadius: 15, height: 85, borderColor: '#EFEFEF', borderWidth: 1, marginLeft: '5%', marginRight: '5%', marginTop: '10%', shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 1.0 }}>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View style={{ justifyContent: 'center', borderRadius: 15, height: 85, width: '100%', backgroundColor: '#FEFEFE' }}>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626' }}>Your</Text>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626'}}> Warehouse</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View  style={{ flex: 1, alignItems: 'flex-end', borderRadius: 15, height: 85 }}>
                    <Image
                      source={require('../assets/images/tab1.png')}
                      style={[styles.icon, { }]}
                    />
                  </View>
                </TouchableWithoutFeedback>  
             </View>
             <View elevation={5} style={{flex: 1, flexDirection: 'row', borderRadius: 15, height: 85, borderColor: '#EFEFEF', borderWidth: 1, marginLeft: '5%', marginRight: '5%', marginTop: '10%', shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 1.0 }}>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View style={{ justifyContent: 'center', borderRadius: 15, height: 85, width: '100%', backgroundColor: '#FEFEFE' }}>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626'}}>Shipped</Text>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626'}}> Packages</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View  style={{ flex: 1, alignItems: 'flex-end', borderRadius: 15, height: 85 }}>
                    <Image
                      source={require('../assets/images/tab2.png')}
                      style={[styles.icon, { }]}
                    />
                  </View>
                </TouchableWithoutFeedback>  
             </View>
             <View elevation={5} style={{flex: 1, flexDirection: 'row', borderRadius: 15, height: 85, borderColor: '#EFEFEF', borderWidth: 1, marginLeft: '5%', marginRight: '5%', marginTop: '10%', shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 1.0 }}>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View style={{ justifyContent: 'center', borderRadius: 15, height: 85, width: '100%', backgroundColor: '#FEFEFE' }}>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626'}}>Assisted</Text>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626'}}> Purchase</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View  style={{ flex: 1, alignItems: 'flex-end', borderRadius: 15, height: 85 }}>
                    <Image
                      source={require('../assets/images/tab3.png')}
                      style={[styles.icon, { }]}
                    />
                  </View>
                </TouchableWithoutFeedback>  
             </View>
             <View elevation={5} style={{flex: 1, flexDirection: 'row', borderRadius: 15, height: 85, borderColor: '#EFEFEF', borderWidth: 1, marginLeft: '5%', marginRight: '5%', marginTop: '10%', shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 1.0 }}>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View style={{ justifyContent: 'center', borderRadius: 15, height: 85, width: '100%', backgroundColor: '#FEFEFE' }}>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626'}}>Shipping</Text>
                    <Text style={{fontWeight: "bold", fontSize: 17, marginLeft: '5%', color: '#262626'}}> Calculator</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View  style={{ flex: 1, alignItems: 'flex-end', borderRadius: 15, height: 85 }}>
                    <Image
                      source={require('../assets/images/tab4.png')}
                      style={[styles.icon, { }]}
                    />
                  </View>
                </TouchableWithoutFeedback>  
             </View>
             <View style={{flex: 1, marginLeft: '5%', marginRight: '5%', marginTop: '10%'}}>
              <Text style={{textAlign: 'center', color: '#757575' }}>Track your packages here</Text>
             </View>
             <View style={{flex: 1, justifyContent: 'center', alignItems:'center', borderTopRightRadius:15, borderTopLeftRadius:15, height: 155, borderColor: '#CDCDC5', backgroundColor: '#FDFEFC', borderRightWidth:1, borderLeftWidth:1, borderTopWidth:1, marginLeft: '5%', marginRight: '5%', marginTop: '10%'}}>  
                <View style={{ marginTop: '15%'}}>
                   <Image
                    source={require('../assets/images/addicon.png')}
                    style={[{height:40,width:40}, { }]}
                  />
                </View>
                <View  style={{}}>
                  <Text style={{textAlign: 'center', color: '#757575'}}>You may add & track {"\n"}incomming pacakages</Text>
                </View>
             </View>
             <View  style={{flex: 1, flexDirection: 'row', borderBottomRightRadius:15, borderBottomLeftRadius:15, height: 35, borderColor: '#CDCDC5', borderRightWidth:1, borderLeftWidth:1, borderBottomWidth:1, marginLeft: '5%', marginRight: '5%', marginBottom: '10%', shadowColor: '#000000'}}>  
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View style={{flex: 1, alignItems: 'flex-start', height: 35, borderTopWidth: 1, borderRightWidth: 1, borderRightColor: '#635D5C', borderBottomLeftRadius:15, backgroundColor: '#CDCDC5'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 35, width: '100%'}}>  
                      <Text style={{ color: '#757575' }}>Outgoing</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{}} onPress={ () => this.props.navigation.navigate('signin')}>
                  <View  style={{flex: 1, alignItems: 'flex-end', height: 35, borderTopWidth: 1, borderColor: '#CDCDC5', borderBottomRightRadius:15, backgroundColor: '#D1C9CF'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 35, width: '100%'}}>  
                      <Text style={{ textAlign: 'center', color: '#757575'}}>Incomming</Text>
                    </View>  
                  </View>
                </TouchableWithoutFeedback>  
           </View>
            </ScrollView>   
        </ImageBackground>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 165,
    height: 83,
    borderBottomRightRadius: 15, borderTopRightRadius:15,
  },
  iconsidemenu: {
    width: 50,
    height: 50,
  }
});
