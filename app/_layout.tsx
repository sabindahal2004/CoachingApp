import React from 'react';
import {Stack} from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import {ActivityIndicator} from 'react-native';

export default function RootLayout() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'Outfit-Regular': require('../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  // Show a loading spinner while fonts are being loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack screenOptions={{headerShown: false}} />
    </SafeAreaView>
  );
}
