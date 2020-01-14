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
  ImageBackground,
  Dimensions,
  View,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import MyHeader from "../navigation/MyHeader";

export default class SalestaxScreen extends React.Component {

  static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        null
      ),
      drawerLabel: ({ tintColor }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
          <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
            <Text style={{fontWeight: "bold"}} >Sales-tax free partners</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/shop.png')}
              style={[styles.iconmenu, { tintColor: tintColor }]}
            />
          </View>  
        </View>  
      ),
    };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <MyHeader navigation={this.props.navigation} title="Sales-tax free partners" />
        <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
          <ScrollView contentContainerStyle={{ }}>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '10%' }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#157B7D' }}>Our Online Partners</Text>
            </View>

            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', height: 200 }}>
              <Text style={{ marginLeft: '6%', marginRight: '5%', textAlign: 'left', color: '#404040', fontSize: 14 }}>Shop2Ship It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have.</Text>
            </View>
       
            <View style={{ flex: 1, height: 210, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%', }}>
                <ImageBackground
                  style={{flex: 1, width: 200, height: 80, marginTop: 10, marginLeft: '20%'}} 
                  source={require('../assets/images/amazon.png')}
                >
                  <View style={{ flex: 1, height: 170, width: 280, marginLeft: '-20%' }}>
                    <Text style={{ textAlign: 'center', color: '#404040', bottom: -110 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </Text>
                  </View>
                </ImageBackground> 
            </View>

            <View style={{ flex: 1, height: 210, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%', }}>
                <ImageBackground
                  style={{flex: 1, width: 200, height: 80, marginTop: 10, marginLeft: '20%'}} 
                  source={require('../assets/images/ebay.jpg')}
                >
                  <View style={{ flex: 1, height: 170, width: 280, marginLeft: '-20%' }}>
                    <Text style={{ textAlign: 'center', color: '#404040', bottom: -110 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </Text>
                  </View>
                </ImageBackground> 
            </View>

            <View style={{ flex: 1, height: 210, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%', }}>
                <ImageBackground
                  style={{flex: 1, width: 200, height: 80, marginTop: 10, marginLeft: '20%'}} 
                  source={require('../assets/images/amazon.png')}
                >
                  <View style={{ flex: 1, height: 170, width: 280, marginLeft: '-20%' }}>
                    <Text style={{ textAlign: 'center', color: '#404040', bottom: -110 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </Text>
                  </View>
                </ImageBackground> 
            </View>

            <View style={{ flex: 1, height: 210, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%', }}>
                <ImageBackground
                  style={{flex: 1, width: 200, height: 80, marginTop: 10, marginLeft: '20%'}} 
                  source={require('../assets/images/ebay.jpg')}
                >
                  <View style={{ flex: 1, height: 170, width: 280, marginLeft: '-20%' }}>
                    <Text style={{ textAlign: 'center', color: '#404040', bottom: -110 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </Text>
                  </View>
                </ImageBackground> 
            </View>

            <View style={{ flex: 1, height: 210, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%', }}>
                <ImageBackground
                  style={{flex: 1, width: 200, height: 80, marginTop: 10, marginLeft: '20%'}} 
                  source={require('../assets/images/amazon.png')}
                >
                  <View style={{ flex: 1, height: 170, width: 280, marginLeft: '-20%' }}>
                    <Text style={{ textAlign: 'center', color: '#404040', bottom: -110 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </Text>
                  </View>
                </ImageBackground> 
            </View>

            <View style={{ flex: 1, height: 210, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%', }}>
                <ImageBackground
                  style={{flex: 1, width: 200, height: 80, marginTop: 10, marginLeft: '20%'}} 
                  source={require('../assets/images/ebay.jpg')}
                >
                  <View style={{ flex: 1, height: 170, width: 280, marginLeft: '-20%' }}>
                    <Text style={{ textAlign: 'center', color: '#404040', bottom: -110 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </Text>
                  </View>
                </ImageBackground> 
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 80,
    alignSelf: 'center',
  
  },
  iconmenu: {
    width: 50,
    height: 50,
  }
});

