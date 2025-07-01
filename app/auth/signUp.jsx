import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Colors from '../../constant/Colors';
import {useRouter} from 'expo-router';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '@/config/firebaseConfig';
import {setDoc, doc} from 'firebase/firestore';
import {UserDetailsContext} from '@/context/UserDetailsContext';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userDetails, setUserDetails} = useContext(UserDetailsContext);

  const handleCreateNewAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async response => {
        const user = response.user;
        console.log(user);
        // Save user data to database
        await SaveUser(user);
      })
      .catch(error => {
        console.error('Error creating account:', error);
        alert(error.message);
      });
  };
  const SaveUser = async (user) => {
    try {
      const data = {
        fullName,
        email,
        membership: false,
        userId: user?.uid,
      };
      await setDoc(doc(db, 'users', email), data);
      setUserDetails(data);
      console.log('User saved successfully');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const router = useRouter();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Create New Account</Text>

        <TextInput
          placeholder="Full Name"
          style={styles.textInput}
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.createBtn}
          activeOpacity={0.7}
          onPress={handleCreateNewAccount}>
          <Text style={styles.createText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.footer}>
          <Text>Already have an account?</Text>
          <Pressable onPress={() => router.push('/auth/signIn')}>
            <Text style={styles.signInText}>Sign In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 25,
    paddingTop: 100,
  },
  logo: {
    width: 180,
    height: 180,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Outfit-Bold',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    width: '100%',
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 8,
  },
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.GRAY,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Colors.GRAY,
  },
  footer: {
    flexDirection: 'row',
    gap: 3,
  },
  signInText: {
    color: Colors.PRIMARY,
  },
});
