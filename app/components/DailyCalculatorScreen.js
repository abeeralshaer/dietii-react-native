import React from 'react';
import {styles} from './styles/style.js';
import {
  View,
  Text
} from 'react-native';
import * as Strings from './values/strings.js';


const DailyCalculator = ()=>{
  return(

    <View>
    <Text style={styles.text}>{Strings.CALORIE_CALCULATOR}</Text>
    </View>

  );
};


export default DailyCalculator;
