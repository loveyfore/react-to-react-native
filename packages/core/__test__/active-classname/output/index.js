//
// Created by node lib `react-to-react-native`.
// 
import React from 'react';
import {
  View,
  Text
} from 'react-native'
import * as _util from './tools.js'
import styles from './stylesheet.js'

class App extends React.Component {
  activeCls = type => `tz-${type}-btn`;

  render() {
    const { type } = this.props;
    return (
      <View>
        <View
          style={[
            styles.$merge1,
            _util.extend(styles[`${this.activeCls(type)}`])
          ]}
        >
          <Text style={styles.$inherit2}>123</Text>
        </View>
      </View>
    );
  }
}

export default App;
