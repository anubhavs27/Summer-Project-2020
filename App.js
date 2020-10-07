import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Header, Content, Footer, List, ListItem, FooterTab, Button, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

let data = [
];

for (i = 0; i < 30; i ++){
  data.push(
    {
      "title": "food Option" + i,
      "description": "description" + i
    }
  )
}

export default function App() {


  return (
    <Container>
    <Content>
      <List  
        dataArray = {data}
        renderRow = {(listItem) => 
          <ListItem>
            <Text> {listItem.title} </Text>
            <Text> {listItem.description} </Text>
          </ListItem>
        }>
      </List> 
    </Content>
    <Footer>
      <FooterTab>
        <Button>
          <Text>Account</Text>
        </Button>
        <Button>
          <Text>Search</Text>
        </Button>
        <Button active>
          <Text>Help</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
  );
}

/* favicon.png <-image
return (
   
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305, 
    height: 159,
    marginBottom: 30,
  },
  instructions: {
    color:'#888',
    fontSize: 18, 
    marginHorizontal: 15,
  },
  button:{
    backgroundColor: "blue",
    padding: 20, 
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
