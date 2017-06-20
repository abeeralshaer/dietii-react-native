import {DrawerNavigator,DrawerItems,StackNavigator,TabNavigator,NavigationActions}from 'react-navigation';
import {ScrollView,Text,View,Image}from 'react-native';
import React from 'react';
import Splash from '../components/SplashScreen.js';
import Login from '../components/LoginScreen.js';
import Signup from '../components/SignupScreen.js';
import SubscribeScreen from '../components/SubscribeScreen.js';
import ShoppingList from '../components/ShoppingListScreen.js';
import MyPlan from '../components/MyPlan.js';
import MainScreen from '../components/MainScreen.js';
import DailyCalculator from '../components/DailyCalculatorScreen.js';
import AskExpert from '../components/AskExpertScreen.js';
import DrawerIcon from '../components/DrawerIcon.js';
import {Icon}from 'react-native-elements';
import Title from '../components/Title.js';
import {styles}from '../components/styles/style.js';
import * as Strings from '../components/values/strings.js';


export const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? null : getStateForAction(action, state);
};

const MainTabs = {
  Main: {
    screen: MainScreen,
    navigationOptions :{
      title: Strings.MAIN
    }
  },
  DailyCalculator: {
    screen: DailyCalculator,
    navigationOptions :{
      title: Strings.CALORIE_CALCULATOR
    }
  },
  AskExpert: {
    screen: AskExpert,
    navigationOptions :{
      title: Strings.ASK_EXPERT
    }
  }
};

export const MainTabsNavigator = TabNavigator(MainTabs);

export const TabsStackNavigator = StackNavigator({
  Home: {
    screen: MainTabsNavigator
  }
});
MainTabsNavigator.navigationOptions = ({navigation})=>({
  headerTintColor: 'black',
  headerLeft:<DrawerIcon {...navigation}/>
});

export const SubscribeStackNav = StackNavigator({
  Subscribe: {
    screen: SubscribeScreen
  }
});

export const MyPlanStackNav = StackNavigator({
  MyPlan: {
    screen: MyPlan
  }
});

export const ShoppingListStackNav = StackNavigator({
  ShoppingList: {
    screen: ShoppingList
  }
});
const ShoppingListState = ShoppingListStackNav.router.getStateForAction;
ShoppingListStackNav.router.getStateForAction = navigateOnce(ShoppingListState);

export const DrawerRoutes = {
  Main: {
    screen : TabsStackNavigator,
    navigationOptions : {
      drawerLabel: <Text style = {styles.text}>{Strings.MAIN}</Text>,
      drawerIcon: ({ tintColor }) => (
     <Icon
        name='list'
        type='font-awesome'
        color='#f50'/> )
    }
  },
  Plan: {
    screen: MyPlanStackNav,
    navigationOptions : {
      drawerLabel: <Text style = {styles.text}>{Strings.MAIN}</Text>,
      drawerIcon: () => (
     <Icon
        name='list'
        type='font-awesome'
        color='#f50'

        /> )
    }
  },
  Subscribe: {
    screen: SubscribeStackNav,
    navigationOptions : {
      drawerLabel: <Text style = {styles.text}>{Strings.MAIN}</Text>,
      drawerIcon: () => (
     <Icon
        name='list'
        type='font-awesome'
        color='#f50'/>)
    }
  },
  ShoppingList: {
    screen: ShoppingListStackNav,
    navigationOptions : {
      drawerLabel: <Text style = {styles.text}>{Strings.MAIN}</Text>,
      drawerIcon: () => (
     <Icon
        name='list'
        type='font-awesome'
        color='#f50'
        /> )
    }
  }
};

export const AppDrawerNav= DrawerNavigator(DrawerRoutes,{drawerWidth: 200,
  drawerPosition: 'right',
  contentComponent:  (props) =>
  <ScrollView>
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between' }}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/110108/pexels-photo-110108.jpeg?h=350&auto=compress&cs=tinysrgb',
        }}
        style={{width: 300, height: 300}} />
    </View>
    <DrawerItems {...props}/>
  </ScrollView>
});

const Routes = {
  Splash : {
    screen: Splash,
  },
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
  },
  LaunchApp: {
    screen: AppDrawerNav
  }
};

export const OpenAppStack = StackNavigator(Routes,{
  headerMode:'none',
  initialRouteName: 'Splash'
});
