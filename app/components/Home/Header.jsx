import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserDetailsContext} from '@/context/UserDetailsContext';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  const {userDetails, setUserDetails} = useContext(UserDetailsContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello, {userDetails?.fullName}</Text>
        <Text style={styles.greetingDes}>Let&apos;s Get Started!</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  greeting: {
    fontFamily: 'Outfit-Bold',
    fontSize: 25,
    textTransform: 'capitalize',
  },
  greetingDes: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
  },
});
