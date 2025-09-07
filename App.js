import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VideoListScreen from './screens/VideoListScreen';
import VideoDetailScreen from './screens/VideoDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Videos">
        <Stack.Screen name="Videos" component={VideoListScreen} />
        <Stack.Screen
          name="VideoDetail"
          component={VideoDetailScreen}
          options={{ title: "Now Playing" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
