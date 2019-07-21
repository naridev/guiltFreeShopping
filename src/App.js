import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BaseScreen from './pages/BaseScreen';
import HomeScreen from './pages/HomeScreen';

const App = props => {
  return (
    <View style={styles.container}>
      <BaseScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
