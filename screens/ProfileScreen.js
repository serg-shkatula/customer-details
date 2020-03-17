import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { fetchUiTemplate } from '../api';
import { unit } from '../styles';
import DataItem from './DataItem';

const styles = StyleSheet.create({
  scrollView: {
    minHeight: '100%',
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  body: {
    padding: unit,
  },
  title: {
    fontSize: 40,
  },
});

const uiTemplate = fetchUiTemplate('profile');//TODO: fetch data

export default function ProfileScreen ({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.body}>
          {Object.keys(uiTemplate).map((key) => (
            <DataItem template={uiTemplate[key]}/>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
