import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/conversor/index';

export default function App() {
  return (
    <View style={styles.container}>
     <Conversor moedaA="USD" moedaB="BRL" />
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
