import React from 'react';
import {Text}from 'react-native';
import {styles}from './styles/style.js';

const Title = ({title})=>{
  return(
    <Text style={styles.text}>{title}</Text>
  );
};

export default Title;
