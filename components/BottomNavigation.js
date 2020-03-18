import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, unit } from '../styles';
import { screenNames } from '../navigation';
import { connect, useDispatch, useSelector } from 'react-redux';
import { navigate, setEditingInfo } from '../state/actions';
import { ActionButtons } from './ProfileUI';

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

function BottomNavigation () {
  const dispatch = useDispatch();
  const currentScreen = useSelector(state => state.navigation.currentScreen);
  const editingInfo = useSelector(state => state.data.editingInfo);
  const editingMode = !!editingInfo;
  const [activeName, setActiveName] = useState(currentScreen);

  useEffect(() => {
    if (activeName) {
      dispatch(navigate(activeName));
    }
  }, [activeName]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.line}/>
        {!editingMode ? (
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
        ) : (
          <ActionButtons
            onCancelPress={() => {
              Keyboard.dismiss();
              dispatch(setEditingInfo(undefined));
            }}
            onConfirmPress={() => {
              Keyboard.dismiss();
              dispatch(setEditingInfo(undefined));
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default BottomNavigation;
