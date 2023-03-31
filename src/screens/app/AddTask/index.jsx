import React from 'react';
import {Image, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';

const AddTask = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
