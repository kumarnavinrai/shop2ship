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
  Dimensions,
  View,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import Iconm from '@expo/vector-icons/MaterialIcons';
import Iconf from '@expo/vector-icons/FontAwesome';
import Iconi from '@expo/vector-icons/Ionicons';
import Icona from '@expo/vector-icons/AntDesign'; 
import Iconmc from '@expo/vector-icons/MaterialCommunityIcons';
import Iconad from '@expo/vector-icons/AntDesign';
import Iconfoundation from '@expo/vector-icons/Foundation';


import MyHeader from "../navigation/MyHeader";

export default class FaqScreen extends React.Component {

  static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        null
      ),
      drawerLabel: ({ tintColor }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
          <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
            <Text style={{fontWeight: "bold"}} >FAQ</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/info.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          </View>  
        </View>  
      ),
    };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <MyHeader navigation={this.props.navigation} title="FAQ" />
        <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
          <ScrollView contentContainerStyle={{ }}>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '10%' }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#157B7D' }}>How can we help you?</Text>
            </View>
           
            
            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconm color="#009F7F" name="done" size={50} style={{marginLeft: '10%'}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Getting started</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconf color="#009F7F" name="dollar" size={35} style={{marginLeft: '20%', marginTop: 5}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Payments</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconi color="#009F7F" name="md-people" size={50} style={{marginLeft: 10}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>General Questions</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Icona color="#009F7F" name="bars" size={50} style={{marginLeft: 10}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Customs</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconi color="#009F7F" name="md-star" size={50} style={{marginLeft: 10}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Services</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconmc color="#009F7F" name="cash-refund" size={40} style={{marginLeft: 10}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Claims, Refunds and Insurance</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconad color="#009F7F" name="heart" size={40} style={{marginLeft: 15, marginTop: 5}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Packages</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconf color="#009F7F" name="sitemap" size={40} style={{marginLeft: 15, marginTop: 5}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Account Navigation</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconmc color="#009F7F" name="asterisk" size={40} style={{marginLeft: 15, marginTop: 5}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Carrier Tracking</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconf color="#009F7F" name="map-marker" size={40} style={{marginLeft: 22, marginTop: 5}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Shop2Ship Address</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconm color="#009F7F" name="battery-alert" size={40} style={{marginLeft: 13, marginTop: 5}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Batteries</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 50,  }}>
               <Iconfoundation color="#009F7F" name="prohibited" size={40} style={{marginLeft: 15, marginTop: 5}} />             
              </View>
              <View style={{ flex: 3, height: 50,  }}>
                <Text style={{  textAlign: 'left',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Prohibited Items</Text>
              </View>
            </View>
            
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});
