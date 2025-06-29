import {View, Image, Text, StyleSheet} from 'react-native';
import Colors from '../constant/Colors';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/landing.png')}
        style={styles.landingImage}
      />

      <View style={styles.blueContainer}>
        <Text style={styles.welcomeText}>Welcome To Coaching Guru</Text>
        <Text style={styles.description}>
          Transform your ideas into engaging educational content, effortlessly
          with AI! 📚🤖
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText, {color: Colors.PRIMARY}]}>
            Get Started
          </Text>
        </View>

        <View
          style={[
            styles.button,
            {
              backgroundColor: Colors.PRIMARY,
              borderWidth: 1,
              borderColor: Colors.WHITE,
            },
          ]}>
          <Text style={[styles.buttonText, {color: Colors.WHITE}]}>
            Already have an account?
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  landingImage: {
    width: '100%',
    height: 300,
    marginTop: 70,
  },
  blueContainer: {
    backgroundColor: Colors.PRIMARY,
    padding: 25,
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily:'outfit-bold',
  },
  description: {
    fontSize: 20,
    color: Colors.WHITE,
    marginTop: 20,
    textAlign: 'center',
    fontFamily:'outfit-regular',
  },
});
