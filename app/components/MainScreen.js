import React,{Component}from 'react';
import {
  View,
  Text
} from 'react-native';
import * as Strings from './values/strings.js';


class MainScreen extends Component {
  render() {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>{Strings.SHOPPING_LIST}</Text>
        </View>
    );
  }
}

export default MainScreen;
