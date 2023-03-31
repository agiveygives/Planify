import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import styles from './styles';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    setValues(oldState => ({
      ...oldState,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
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
      <Title>Welcome back!</Title>

      <Input
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={value => onChange(value, 'email')}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={value => onChange(value, 'password')}
      />

      <Button onPress={onSubmit}>Log in</Button>

      <Text style={styles.footerText}>
        Not registered?
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.footerLink}>
          {' '}
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
