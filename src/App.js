import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BaseScreen from './pages/BaseScreen';
import LoginScreen from './pages/LoginScreen';

import { Switch, Route, NativeRouter, Redirect } from 'react-router-native';

const App = props => {
  return (
    <View style={styles.container}>
    <NativeRouter>

      <Switch>
        <Route
          path='/base'
          component={BaseScreen}
        />
        <Route
          path='/login'
          component={LoginScreen}
        />
        <Redirect
          from='/'
          to='/base'
        />

      </Switch>

    </NativeRouter>
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
