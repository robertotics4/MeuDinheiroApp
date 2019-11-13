import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Image
} from 'react-native';

const bg = require('../assets/images/bg/bg.png');
const logo = require('../assets/images/logo/logo.png');

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.entrar = this.entrar.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  static navigationOptions = {
    header: null
  }

  entrar() {
    this.props.navigation.navigate('Login');
  }

  cadastrar() {
    this.props.navigation.navigate('Cadastro');
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.container}>

          <Image source={logo} style={styles.logo} />
          <View style={styles.buttonArea}>
            
            <TouchableHighlight 
            style={styles.btnEntrar}
            onPress={this.entrar}
            underlayColor={null}>
              <Text style={styles.txtEntrar}>ENTRAR</Text>
            </TouchableHighlight>
            
            <TouchableHighlight 
              style={styles.btnCadastrar} 
              onPress={this.cadastrar}
              underlayColor={null}>
              <Text style={styles.txtCadastrar}>Ainda não possui uma conta?</Text>
            </TouchableHighlight>

          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: null
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  buttonArea: {
    marginTop: 50,
  },
  btnEntrar: {
    backgroundColor: '#EE5673',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 10
  },
  btnCadastrar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtEntrar: {
    color: '#FFF',
    fontSize: 27,
    fontWeight: 'bold'
  },
  txtCadastrar: {
    color: '#FFF',
    fontSize: 17,
  }
});