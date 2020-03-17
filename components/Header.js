import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { unit } from '../styles';

const styles = StyleSheet.create({
  scrollView: {
    minHeight: '100%',
  },
  scrollViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    padding: unit,
    paddingTop: unit * 0.5,
  },
  title: {
    fontSize: 40,
  },
});

export default function Header () {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Profile</Text>
      </View>
    </SafeAreaView>
  );
}
