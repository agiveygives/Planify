import React, {useState} from 'react';
import {Linking, SafeAreaView, Text, View} from 'react-native';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constants/links'
import styles from './styles';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);

  const onCheckboxPress = () => {
    setAgreed((oldState) => !oldState);
  }

  const onLinkPress = (url) => {
    Linking.openURL(url)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>

      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Email"  keyboardType='email-address' />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm password" secureTextEntry />

      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />

        <Text style={styles.agreeText}>
          I agree to{' '}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
            Terms and Conditions
          </Text>
          {' '}and{' '}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
            Privacy Policy
          </Text>
        </Text>
      </View>

      <Button type="blue">Create account</Button>

      <Text style={styles.footerText}>
        Already registered?
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.footerLink}>
          {' '}
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
