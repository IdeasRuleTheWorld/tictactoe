import React from 'react';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';
export default class App extends React.Component {
  state = {
    title: '',
    author: '',
    books: [],
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>App start</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    marginVertical: 10,
  },
});
