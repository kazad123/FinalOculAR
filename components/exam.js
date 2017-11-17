import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const styles = StyleSheet.create({
  chartContainer: {
    height: 125,
    width: 100,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


class ExamScreen extends Component {
  static navigationOptions = {
    title: 'Examination Screen',
  };

  render() {
    return(
      <View style = {styles.cameraContainer}>
        <Image resizeMode = "contain"
        source = {require('../img/snelleneyechart.jpg')}
        style = {styles.chartContainer}/>
      </View>
    );
  }
}

export default ExamScreen;
