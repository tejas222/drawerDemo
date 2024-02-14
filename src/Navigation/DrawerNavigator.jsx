import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ROUTES} from '../constants';
import BottomNavigator from './BottomNavigator';
import {Wallet} from '../screens';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomNavigator} />
      <Drawer.Screen name={ROUTES.NOTIFICATIONS_DRAWER} component={Wallet} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
