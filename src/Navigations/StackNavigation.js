import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import OTP from '../Screens/Otp';
import ForgotPassword from '../Screens/ForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ResetPassword from '../Screens/ResetPassword';
import {USERDATA} from '../Utility/AsyncStorage';
import {useNavigation} from '@react-navigation/native';
import Dashboard from '../Screens/Dashboard';

export default function StackNavigation() {
  const nav = useNavigation();
  const [state, setState] = useState({
    intialScreen: NAVIGATION_NAME.WELCOME,
    toRender: false,
  });

  const {Screen, Navigator} = createNativeStackNavigator();

  if (!state.toRender) {
    return (
      <Navigator initialRouteName={state.intialScreen}>
        <Screen
          name={NAVIGATION_NAME.WELCOME}
          component={Welcome}
          options={{headerShown: false}}
        />
        <Screen
          name={NAVIGATION_NAME.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />

        <Screen
          name={NAVIGATION_NAME.OTP}
          component={OTP}
          options={{headerShown: false}}
        />
        <Screen
          name={NAVIGATION_NAME.FORGOTPASSWORD}
          component={ForgotPassword}
          options={{headerShown: false}}
        />

        <Screen
          name={NAVIGATION_NAME.DASHBOARD}
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Navigator>
    );
  } else {
    return null;
  }
}
