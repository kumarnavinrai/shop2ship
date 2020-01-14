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
import Icon from '@expo/vector-icons/Feather';
import MyHeader from "../navigation/MyHeader";

export default class Membership extends React.Component {
  
  static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        null
      ),
      drawerLabel: ({ tintColor }) => (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#FFFFFF', margin: 5 }}>
          <View style={{marginLeft: 10, marginTop: 15, width: Dimensions.get('window').width - 220}}>
            <Text style={{fontWeight: "bold"}} >Membership</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/team.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          </View>  
        </View>  
      ),
    };

  render() {
    return (
       <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <MyHeader navigation={this.props.navigation} title="Membership" />
        <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
          <ScrollView contentContainerStyle={{ }}>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '10%' }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#157B7D' }}>Membership Table</Text>
            </View>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '5%' }}>
              <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: '#4E4E4E' }}>Frequent-shipper Program</Text>
            </View>
            
            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Key benefits</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>BLUE 
                <Icon
                  color="#000"
                  name="plus"
                  size={20}
                /></Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>CARD</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>BLUE</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Application criteria</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>None</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Registration Fee</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Free</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Monthly Membership Fee {'\n'}(Annual Membership Fee)</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Free</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Benefits</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Free</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Handling Priority</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>4.</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Free Storage</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>50 Days</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Special Services</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Customer Support</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Special Offers</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>-</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Free pre package recieved</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$5</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Consolidation</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$6</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Reduce Packaging</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$6</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Assisted Purchase</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>9% Service + 4.3% Bank Fee{'\n'}of total order</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Express Processing</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$5</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Extra Packaging Material</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$2</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>7 Photos of Pacakage</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$4</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Storage Fee after free{'\n'}period**</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$1</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FAF8FB', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Gift Wrap</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$7</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 70, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEDED', marginTop: '5%' }}>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>Special Request</Text>
              </View>
              <View style={{ flex: 1, height: 70,  }}>
                <Text style={{  textAlign: 'center',fontWeight: 'bold', color: '#404040', marginTop: 20 }}>$5</Text>
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
  }
});
