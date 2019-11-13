import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Cadastro extends Component {

  static navigationOptions = {
    title: 'Cadastrar'
  };

  render() {
    return(
      <View style={styles.container}>
        <Text>Cadastro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});