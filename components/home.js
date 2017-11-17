import React, { Component } from 'react';
import { StyleSheet, Button, Image, Text, View } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style = {styles.container}>
          <Text style = {styles.bolditalicblack}>OculAR</Text>
          <View style = {styles.buttonContainer}/>
            <Button
            onPress = {() => navigate('Exam')}
            title = "Take examination!"
            color = "steelblue"
            />
          <View style = {styles.buttonContainer}/>
            <Button
            onPress = {() => navigate('Results')}
            title = "View results"
            color = "steelblue"
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bolditalicblack: {
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 50,
  },
  buttonContainer: {
    margin: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
