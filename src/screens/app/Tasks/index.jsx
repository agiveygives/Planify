import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import styles from './styles';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <ScrollView>
        <Text>Tasks</Text>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  )
}

export default React.memo(Tasks);
