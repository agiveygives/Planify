import React, {useState} from 'react';
import {Alert, Linking, SafeAreaView, ScrollView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constants/links';
import styles from './styles';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({});

  const onCheckboxPress = () => {
    setAgreed(oldState => !oldState);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onChange = (value, key) => {
    setValues(oldState => ({
      ...oldState,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (!values.firstName || !values.lastName) {
      Alert.alert('Please enter first and last name');
      return;
    }

    if (values.password !== values.confirmPassword) {
      Alert.alert('Passwords do not match.');
      return;
    }

    if (!agreed) {
      Alert.alert('You should agree to the terms.');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(
        values.email,
        values.password,
      )
      .then(() => {
        auth().currentUser.updateProfile({
          displayName: `${values.firstName} ${values.lastName}`,
        })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Join the hub!</Title>

        <Input
          onChangeText={value => onChange(value, 'firstName')}
          placeholder="First name"
        />
        <Input
          onChangeText={value => onChange(value, 'lastName')}
          placeholder="Last name"
        />
        <Input
          onChangeText={value => onChange(value, 'email')}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          onChangeText={value => onChange(value, 'password')}
          placeholder="Password"
          secureTextEntry
        />
        <Input
          onChangeText={value => onChange(value, 'confirmPassword')}
          placeholder="Confirm password"
          secureTextEntry
        />

        <View style={styles.row}>
          <Checkbox checked={agreed} onPress={onCheckboxPress} />

          <Text style={styles.agreeText}>
            I agree to{' '}
            <Text
              style={styles.link}
              onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text
              style={styles.link}
              onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <Button onPress={onSubmit} type="blue">
          Create account
        </Button>

        <Text style={styles.footerText}>
          Already registered?
          <Text
            onPress={() => navigation.navigate('Signin')}
            style={styles.footerLink}>
            {' '}
            Sign in!
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
