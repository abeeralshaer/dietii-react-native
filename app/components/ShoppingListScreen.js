import React,{Component}from 'react';
import {styles}from './styles/style.js';
import Title from './Title.js';
import {
  View,
  Text
} from 'react-native';
import DrawerIcon from './DrawerIcon.js';
import * as Strings from './values/strings.js';

class ShoppingList extends Component {
  render() {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f2f2f2'
        }}>
  <Text style={styles.text}>{Strings.SHOPPING_LIST}</Text>
            </View>
    );
  }
}

ShoppingList.navigationOptions = ({navigation})=>({
  title: <Title/>,
  headerTintColor: 'black',
  headerRight:<DrawerIcon {...navigation}/>,
});

export default ShoppingList;
