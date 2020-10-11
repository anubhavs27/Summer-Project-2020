import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Header, Content, Footer, List, ListItem, FooterTab, Button, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class HomeScreen extends Component {
    constructor(props){
        this.data = []
        /*for (i = 0; i < length(props.restaurants); i++){
            data.push(
                {
                    "title": props.restaurants[i],
                    "description": props.restaurants[i]
                }
            )
        }*/
        for (i = 0; i < 30; i ++){
            this.data.push(
                {
                "title": "food Option" + i,
                "description": "description" + i
                }
            )
        }
    }
  
    _renderItem = ({ item }) => {
        return (
            <Container>
                <Content>
                    <List  
                    dataArray = {this.data}
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
    render() {
        return (this._renderItem)
    }
  }