import React from 'react';
import { KeyboardAvoidingView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import { screenNames } from './navigation';
import StatsScreen from './screens/StatsScreen';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

const Stack = createStackNavigator();
import { navigation, user } from './state/reducers';
import { fetchUserData, initNavigation } from './state/actions';

const store = createStore(
  combineReducers({navigation, user}),
  {navigation: {currentScreen: screenNames.NEWS}},
  applyMiddleware(thunk),
);

export default class App extends React.Component {
  constructor () {
    super();
    store.dispatch(fetchUserData);
  }

  render () {
    return (
      <KeyboardAvoidingView behavior={'padding'} enabled style={{height: '100%'}}>
        <StatusBar barStyle="dark-content"/>
        <Header/>
        <Provider store={store}>
          <NavigationContainer ref={ref => store.dispatch(initNavigation(ref))}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name={screenNames.NEWS} component={NewsScreen}/>
              <Stack.Screen name={screenNames.STATS} component={StatsScreen}/>
              <Stack.Screen name={screenNames.PROFILE} component={ProfileScreen}/>
            </Stack.Navigator>
            <BottomNavigation activeName={screenNames.NEWS}/>
          </NavigationContainer>
        </Provider>
      </KeyboardAvoidingView>
    );
  }
};
