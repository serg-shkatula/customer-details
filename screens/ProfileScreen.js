import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { fetchUiTemplate } from '../api';
import { colors, unit } from '../styles';
import DataItem from './DataItem';
import { Fade } from './ProfileUI';
import { connect, useSelector } from 'react-redux';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.WHITE,
  },
  scrollViewContainer: {
    //
  },
  item: {
    marginBottom: unit,
  },
  body: {
    padding: unit,
    paddingBottom: unit * 3,
  },
  title: {
    fontSize: 40,
  },
});

const uiTemplate = fetchUiTemplate('profile');//TODO: handle globally

function ProfileScreen () {
  const userData = useSelector(state => state.user.data);
  console.log('ProfileScreen.ProfileScreen, ~ Line 31: userData >', userData);
  if (!userData) {
    return <Text>Fetching...</Text>;
  }
  const [editingKey, setEditingKey] = useState(undefined);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.body}>
        {Object.keys(uiTemplate).map((key) => {
          const beingEdited = editingKey === key;
          return (
            <DataItem
              key={key}
              itemKey={key}
              style={styles.item}
              template={uiTemplate[key]}
              value={userData[key]}
              onEdit={setEditingKey}
              onEditCancel={() => {
                setEditingKey(undefined);
              }}
              onEditConfirm={() => {
                setEditingKey(undefined);
              }}
              editMode={beingEdited}
            />
          );
        })}
        {editingKey && <Fade/>}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen
