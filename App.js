import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Header, Content, Footer, List, ListItem, FooterTab, Button, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


export default function App() {
  return (
    <View style={styles.container}>
      <IntroScreen />
      <StatusBar style="auto" />
    </View>
  );
}

/* favicon.png <-image
return (
   
*/

const styles = StyleSheet.create({

});
