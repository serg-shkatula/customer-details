import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';

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
    //
  },
  title:{
    fontSize: 40,
  }
});

export default class ProfileScreen extends Component {
  render () {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.body}>
            <Text style={styles.title}>ProfileScreen</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
