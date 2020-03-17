import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Header from './screens/Header';
import BottomNavigation from './screens/BottomNavigation';
import { screenNames } from './navigation';
import StatsScreen from './screens/StatsScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this._navigation = React.createRef()
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content"/>
        <Header/>
        <NavigationContainer ref={this._navigation}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={screenNames.NEWS} component={NewsScreen}/>
            <Stack.Screen name={screenNames.STATS} component={StatsScreen}/>
            <Stack.Screen name={screenNames.PROFILE} component={ProfileScreen}/>
          </Stack.Navigator>
          <BottomNavigation navigation={this._navigation} activeName={screenNames.NEWS}/>
        </NavigationContainer>
      </>
    );
  }
};
