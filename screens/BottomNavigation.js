import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, unit } from '../styles';
import { screenNames } from '../navigation';

const styles = StyleSheet.create({
  scrollView: {
    minHeight: '100%',
  },
  scrollViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingLeft: unit,
    paddingRight: unit,
  },
  body: {
    flexDirection: 'row',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.LIGHTER_GREY,
  },
  button: {
    padding: unit,
    paddingBottom: unit * 0.5,
    flex: 1,
    alignItems: 'center',
  },
});

const buttons = [
  {icon: 'newspaper', name: screenNames.NEWS},
  {icon: 'chart-area', name: screenNames.STATS},
  {icon: 'user', name: screenNames.PROFILE, size: 20},
];

const IconButton = ({style, name, size = unit, selected, onPress}) => (
  <TouchableOpacity onPress={onPress} style={style} disabled={selected}>
    <Icon solid name={name} size={size} color={selected ? colors.GREEN : undefined}/>
  </TouchableOpacity>
);

export default function BottomNavigation ({navigation, activeName: propActiveName}) {
  const [activeName, setActiveName] = useState(propActiveName);
  useEffect(() => {
    if (activeName) {
      navigation?.current?.navigate(activeName);
    }
  }, [activeName]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.line}/>
        <View style={styles.body}>
          {buttons.map(({icon, size, name}) => (
            <IconButton
              key={name}
              style={styles.button}
              name={icon}
              size={size}
              selected={activeName === name}
              onPress={() => setActiveName(name)}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
