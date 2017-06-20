import React from 'react';
import {Icon}from 'react-native-elements';

const DrawerIcon = ({navigate})=>{
  return (
   <Icon
      name='list'
      type='font-awesome'
      color='#f50'
      onPress={() => {navigate('DrawerOpen');
      }}/>
  );
};

export default DrawerIcon;
