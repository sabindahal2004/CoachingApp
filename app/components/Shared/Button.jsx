import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../../constant/Colors';
const Button = ({backgroundColor, color}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity style={[styles.createBtn, {backgroundColor:backgroundColor}]} activeOpacity={0.7}>
        <Text style={[styles.createText,{color:color}]}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  createBtn: {
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    padding: 15,
    marginTop: 25,
    borderRadius: 8,
  },
  createText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Outfit-Regular',
  },
});
