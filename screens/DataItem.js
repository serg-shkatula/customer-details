import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { colors, unit } from '../styles';

const styles = StyleSheet.create({
  item: {
    marginVertical: unit * 0.25,
  },
  itemPlaceholder: {
    justifyContent: 'center',
    minHeight: 50,
    borderRadius: 50,
    paddingVertical: unit * 0.5,
    paddingHorizontal: unit,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.11,
    shadowRadius: 9.11,
    elevation: 14,
  },
  itemText: {
    fontSize: 20,
  },
  itemTextFaded: {
    color: colors.GREY,
  },
  itemCaption: {
    color: colors.GREY,
    marginLeft: unit * 0.5,
    marginBottom: unit * 0.25,
  },
});

const StringItem = ({style, key, name, value, placeholder}) => {
  return (
    <View style={style}>
      {value && <Text style={styles.itemCaption}>{name}</Text>}
      <View style={styles.itemPlaceholder}>
        <TextInput style={[!value && styles.itemTextFaded, styles.itemText]}>{value || placeholder}</TextInput>
      </View>
    </View>
  );
};
const PasswordItem = (props) => {
  return <StringItem {...props} />;
};
const ImageItem = ({style, name}) => {
  return (
    <View style={[style, styles.itemPlaceholder]}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

export default function DataItem ({template}) {
  switch (template.type) {
    case 'string':
      return <StringItem style={styles.item} key={template.name} {...template} />;
    case 'password':
      return <PasswordItem style={styles.item} key={template.name} {...template} />;
    case 'image':
      return <ImageItem style={styles.item} key={template.name} {...template} />;
  }
}
