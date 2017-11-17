import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const styles = StyleSheet.create({
  resultsScreenBackground: {
    flex: 1,
    backgroundColor: '#5ac8fa'
  },

  resultsScreenCentered: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5ac8fa',
    alignItems: 'center'
  },

  tables: {
    alignItems: 'center',
    width: 300
  },

  tableHead: {
     height: 40,
     backgroundColor : '#007aff',
  },

  tableCols: {
    height: 100,
    backgroundColor: '#5effde'
  },

  tableText: {
    fontSize : 20,
    textAlign:  'center'
  }
});

class ResultsScreen extends Component {
  static navigationOptions = {
    title: 'Results Screen',
  };

  render() {
    const tableLabels = ['Dates', 'Results'];
    const tableData = [
      ['10/08/2017', '06/01/2017', '09/20/2016'],
      ['20 / 210' , '20 / 200', '20 / 180']];

    widthArray = [];
    for(var index = 0; index < tableData[0].length; index++){
        widthArray.push(100);
    }

    return (
      <View style={styles.resultsScreenBackground}>
        <Text style = {{color: 'white', fontSize: 26, textAlign: 'left', fontWeight: '500'}}>
          {'\n'}     PAST EXAMS{'\n'}{'\n'}
        </Text>
        <View style={styles.resultsScreenCentered}>
          <Table style = {styles.tables} borderStyle = {{borderWidth: 0.5, borderColor: 'white'}}>
            <Row data = {tableLabels} style = {styles.tableHead} textStyle = {styles.tableText}/>
            <Cols data = {tableData} style = {styles.tableCols} textStyle = {styles.tableText}/>
          </Table>
        </View>
      </View>
    );
  }
}
export default ResultsScreen;
