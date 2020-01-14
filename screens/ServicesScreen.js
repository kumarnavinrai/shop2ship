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

export default class Services extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      null
    ),
    drawerLabel: ({ tintColor }) => (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
        <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
          <Text style={{fontWeight: "bold"}} >Services</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/24hour.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        </View>  
      </View>  
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <MyHeader navigation={this.props.navigation} title="Services" />
        <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
          <ScrollView contentContainerStyle={{ }}>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '10%' }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#157B7D' }}>Services</Text>
            </View>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '5%', height: 150 }}>
              <Text style={{ marginLeft: '6%', marginRight: '5%', textAlign: 'left', color: '#404040', fontSize: 12 }}>Shop2Ship has got you covered! We offer a wide range of dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.</Text>
            </View>
            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon1.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/ListIcon1.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Consolidation</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon2.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/ListIcon2.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Assisted Purchase</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon3.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Express Processing</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon4.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Gift Wrapping</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon5.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Remove Invoices</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon6.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Shipping Insurance</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon7.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Special Requests</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon8.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Extra Packing Material</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon9.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Photos of your product</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon10.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Reduce Packaging</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon11.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Echo-friendly handling</Text>
                  </View>
                </ImageBackground>          
            </View>

            <View elevation={5} style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <ImageBackground
                  style={{flex: 1, width: 50, height: 50, marginTop: 10, marginLeft: 25}} 
                  source={require('../assets/images/ListIcon12.png')}
                >
                  <View style={{ flex: 1, height: 70, backgroundImage: require('../assets/images/home.png')  }}>
                    <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 15 }}>Long-term storage</Text>
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
    width: 50,
    height: 50,
  },
  iconpage: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});
