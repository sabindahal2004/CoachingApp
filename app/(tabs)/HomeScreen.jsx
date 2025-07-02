import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Home/Header';
import {Platform} from 'react-native';
import Colors from '../../constant/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: Platform.OS === 'ios' && 45,
    backgroundColor: Colors.WHITE,
    flex:1,
  },
});
