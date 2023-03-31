import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/app/Home';
import Tasks from '../screens/app/Tasks';
import styles from './styles';

const Tab = createBottomTabNavigator();

const TabNav = () => (
  <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../assets/home_active.png')
                : require('../assets/home_inactive.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Tasks"
      component={Tasks}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../assets/calendar_active.png')
                : require('../assets/calendar_inactive.png')
            }
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default React.memo(TabNav);
