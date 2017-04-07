import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Button,
  AsyncStorage,
  AcitivityIndicatorIOS,
} from 'react-native';
export default class Register extends Component {
  constructor() {
    super();
    console.log("hello");
    this.state = {
      username: "",
      password: "",
      errors: [],
    };
  }


  onSubmission() {
    // console.log('Submitted: ', `${this.props.username} ${this.props.password}`);
    const { username, password } = this.state;
    console.log("signup");
    console.log(this.props.signup);
    this.props.signup(this.state);
    this.props.navigator.push({id: 'Home'});
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.allContainer}>
        <Text style={styles.quote}>
          "No dough, no signup!"
        </Text>
        <Text style={styles.quoted}>
          - Lucky Day, The Three Amigos
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.inputOuter}>
            <TextInput
              style={styles.input}
              onChangeText={(username) => this.setState({username: username})}
              returnKeyType="next"
              value={this.state.username}
              placeholder="Username"
              placeholderTextColor="#115635"
            />
          </View>
          <View style={styles.inputOuter}>
            <TextInput
              style={styles.input}
              onChangeText={(val) => this.setState({password: val})}
              returnKeyType="go"
              keyboardType="email-address"
              autocapitalize="none"
              autoCorrect={false}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="#115635"
            />
          </View>
        </View>
        <View
          style={styles.buttonContainer}>
           <Button
              style={styles.button}
              title="Sign Up!"
              onPress={this.onSubmission.bind(this)} >
          </Button>
        </View>
        <View>
          <Text>
            {this.state.errors}
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115635',
  },

  quote: {
    textAlign: 'center',
    color: '#BBD149',
    fontSize: 16,
    fontWeight: '700',
  },

  quoted: {
    textAlign: 'center',
    color: '#BBD149',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
    paddingBottom: 10,
  },

  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115635',
  },

  input: {
    height: 30,
    width: 200,
    textAlign: 'center',
    backgroundColor: '#BBD149',
  },

  inputOuter: {
    marginBottom: 5,
  },

  buttonContainer: {
    backgroundColor: '#74B530',
    width: 200,
  },

  button: {
    textAlign: 'center',
    color: '#115635',
    fontWeight: '700',
  }

});


// <TouchableOpacity style={styles.buttonContainer}>
//   <Text style={styles.buttonText}>Signup</Text>
// </TouchableOpacity>
