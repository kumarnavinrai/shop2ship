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
  View,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class SalestaxScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Sales-tax free partners',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
    drawerLabel: 'Sales-tax free partners',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to nitif"
        />
        <Text style={{ }}>Sales-tax free partners</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});