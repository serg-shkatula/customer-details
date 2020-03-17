import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    minHeight: '100%',
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    //
  },
  title: {
    fontSize: 40,
  },
});

export default function NewsScreen ({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.body}>
          <Text style={styles.title}>News</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
