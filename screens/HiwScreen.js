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
import { WebView } from 'react-native-webview';
import Icon from '@expo/vector-icons/Ionicons';
import MyHeader from "../navigation/MyHeader";


export default class Hiw extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      null
    ),
    drawerLabel: ({ tintColor }) => (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
        <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
          <Text style={{fontWeight: "bold"}} >How it works</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/faq.png')}
            style={[styles.iconmenu, { tintColor: tintColor }]}
          />
        </View>  
      </View>  
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <MyHeader navigation={this.props.navigation} title="How it works" />
        <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
          <ScrollView contentContainerStyle={{ }}>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '10%' }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#157B7D' }}>HOW IT WORKS</Text>
            </View>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '5%', marginBottom: '8%' }}>
              <Text style={{ textAlign: 'center', color: '#404040', fontWeight: 'bold', fontSize: 17 }}>BASICS</Text>
            </View>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
              <Image
                  source={require('../assets/images/youtube.png')}
                  style={[{width: 330, height: 177, alignSelf: 'center' }, {  }]}
                />
            </View>
            <View style={{ flex: 1, height: 180, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <Image
                  source={require('../assets/images/icon1.png')}
                  style={[styles.icon, {  }]}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#404040', bottom: -35 }}>Sign-up and get your personal Shop2Ship {'\n'} address</Text>
            </View>

            <View style={{ flex: 1, height: 180, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <Image
                  source={require('../assets/images/icon2.png')}
                  style={[styles.icon, {  }]}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#404040', bottom: -35 }}>Shop anywhere and enjoy Tac-free benefits {'\n'} from 60 USA Stores</Text>
            </View>

            <View style={{ flex: 1, height: 180, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <Image
                  source={require('../assets/images/icon3.png')}
                  style={[styles.icon, {  }]}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#404040', bottom: -35 }}>At checkout enter your Shop2Ship address as {'\n'} delivery address</Text>
            </View>

            <View style={{ flex: 1, height: 180, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <Image
                  source={require('../assets/images/icon4.png')}
                  style={[styles.icon, {  }]}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#404040', bottom: -35 }}>When requested Shop2Ship will consolidate & {'\n'} reduce packaging size</Text>
            </View>

            <View style={{ flex: 1, height: 180, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <Image
                  source={require('../assets/images/icon5.png')}
                  style={[styles.icon, {  }]}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#404040', bottom: -35 }}>Ship with our lowest rates and get your {'\n'} products in 1 to 4 days</Text>
            </View>
            <View style={{ flex: 1, height: 180, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <Image
                  source={require('../assets/images/icon6.png')}
                  style={[styles.icon, {  }]}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#404040', bottom: -35 }}>Track and get your parcel</Text>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  iconmenu: {
    width: 50,
    height: 50,
  }
});
