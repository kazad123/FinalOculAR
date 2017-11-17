import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/home';
import ExamScreen from './components/exam';
import ResultsScreen from './components/results';

const Nav = StackNavigator({
  Home: { screen: HomeScreen },
  Exam: { screen: ExamScreen },
  Results: { screen: ResultsScreen }
});


export default class App extends React.Component {
  render () {
    return <Nav />;
  }
}
