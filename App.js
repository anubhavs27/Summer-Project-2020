import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Header, Content, Footer, List, ListItem, FooterTab, Button, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import HomePage from './src/screens/homePage'

export default function App() {
  return (
    <HomePage />
  );
}

const styles = StyleSheet.create({

});
