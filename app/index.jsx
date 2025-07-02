import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constant/Colors';
import {useRouter} from 'expo-router';
import {onAuthStateChanged} from 'firebase/auth';
import {auth, db} from '@/config/firebaseConfig';
import {doc, getDoc} from 'firebase/firestore';
import {UserDetailsContext} from '@/context/UserDetailsContext';
import React, {useContext, useEffect} from 'react';

export default function Index() {
  const router = useRouter();
  const {userDetails,setUserDetails} = useContext(UserDetailsContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        console.log('User signed in:', user.email);
        const userDoc = await getDoc(doc(db, 'results', user.email));
        if (userDoc.exists()) {
          setUserDetails(userDoc.data());
        }
      } else {
        router.replace('/auth/signIn');
      }
    });

    return unsubscribe;
  }, [router, setUserDetails]);
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

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => router.push('/auth/signUp')}>
          <Text style={[styles.buttonText, {color: Colors.PRIMARY}]}>
            Get Started
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push('/auth/signIn')}
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
        </TouchableOpacity>
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
    fontFamily: 'Outfit-Bold',
  },
  description: {
    fontSize: 20,
    color: Colors.WHITE,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
  },
});
