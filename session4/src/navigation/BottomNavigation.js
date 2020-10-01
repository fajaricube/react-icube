import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Category, Cart} from '../screen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#ee4d2d',
          justifyContent: 'center',
        },
        labelStyle: {
          color: '#fff',
          fontSize: 12,
          fontWeight: '700',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
