//
// Created by node lib `react-to-react-native`.
// 
import React from 'react';
import {
  View,
  Text
} from 'react-native'

import styles from './stylesheet.js'

import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <View>
          <View style={styles.$merge1}>
            <Text style={styles.$inherit2}>h1</Text>
          </View>
        </View>
      </>
    );
  }
}

export default App;
