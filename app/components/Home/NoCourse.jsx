import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../Shared/Button';
import Colors from '../../../constant/Colors';

const NoCourse = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/book.png')}
        style={styles.bookIcon}
      />
      <Text
        style={{fontFamily: 'Outfit-Bold', fontSize: 25, textAlign: 'center'}}>
        You Don&apos;t Have Any Course
      </Text>
      <Button backgroundColor={Colors.BLACK} color={Colors.GRAY} />
      {/* <Button /> */}
    </View>
  );
};

export default NoCourse;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  bookIcon: {
    width: 200,
    height: 200,
  },
});
