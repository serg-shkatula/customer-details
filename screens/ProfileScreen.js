import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, KeyboardAvoidingView } from 'react-native';
import { fetchUiTemplate } from '../api';
import { colors, unit } from '../styles';
import DataItem from '../components/DataItem';
import { Fade } from '../components/ProfileUI';
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
  fetchingStateView: {
    backgroundColor: colors.WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const uiTemplate = fetchUiTemplate('profile');//TODO: handle globally

function ProfileScreen () {
  const userData = useSelector(state => state.user.data);
  const [editingKey, setEditingKey] = useState(undefined);
  if (!userData) {
    return (
      <View style={styles.fetchingStateView}>
        <Text style={{fontSize: 18, color: colors.GREY}}>Fetching...</Text>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView behavior={'position'} enabled>
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
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
