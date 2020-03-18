import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import { colors, unit } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DataItem from './DataItem';

const shadowStyle = {
  shadowColor: colors.BLACK,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.11,
  shadowRadius: 9.11,
  elevation: 14,
};

const styles = StyleSheet.create({
  itemPlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    // borderRadius: 50,
    paddingVertical: unit * 0.5,
    paddingHorizontal: unit,
    backgroundColor: 'white',
    ...shadowStyle,
  },
  itemEditPlaceholder: {
    paddingVertical: unit * 1,
    paddingHorizontal: unit * 1,
  },
  imagePlaceholder: {
    backgroundColor: colors.LIGHTER_GREY,
    overflow: 'hidden',
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: 160,
    height: 160,
    borderRadius: 80,
    alignSelf: 'center',
  },
  itemText: {
    fontSize: 20,
    flex: 1,
  },
  itemTextFaded: {
    color: colors.GREY,
  },
  itemCaption: {
    color: colors.GREY,
    marginLeft: unit * 0.5,
    marginBottom: unit * 0.25,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  imageEditIconContainer: {
    backgroundColor: colors.WHITE,
    // width: 50,
    // height: 50,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    marginLeft: 25,
    marginTop: 25,
    padding: unit * 0.5,
    borderRadius: 50,
    ...shadowStyle,
  },
  fade: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.WHITE_80,
  },
  actionButtons: {
    padding: unit,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    bottom: -unit * 3,
  },
});

const keyboardTypeByItemType = {
  email: 'email-address',
};

const EditIcon = ({style}) => (
  <View style={style}>
    <Icon solid name={'pen'} size={18} color={colors.GREY}/>
  </View>
);

const ActionButtons = ({onCancelPress, onConfirmPress}) => (
  <View style={styles.actionButtons}>
    <TouchableOpacity style={{flex: 1}} onPress={onCancelPress}>
      <Text style={{color: colors.RED, fontSize: 20}}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onConfirmPress}>
      <Text style={{color: colors.GREEN, fontSize: 20}}>Confirm</Text>
    </TouchableOpacity>
  </View>
);

export const Fade = ({onPress}) => (
  <TouchableWithoutFeedback onPress={onPress} style={styles.fade}><View style={styles.fade}/></TouchableWithoutFeedback>
);

export const StringItem = (props) => {
  const {
    style,
    itemKey,
    name,
    type,
    value,
    placeholder,
    children,
    editable,
    multiline,
    noActionButtons,
    secureTextEntry,
    editMode,
    onEdit,
    onEditCancel,
    onEditConfirm,
  } = props;

  const [inputRef, setInputRef] = useState(undefined);

  if (editMode && children) {
    return (
      <View style={[{zIndex: 10}]}>
        {Object.keys(children).map(key => (
          <DataItem
            key={key}
            {...props}
            style={style}
            editMode
            noActionButtons
            template={children[key]}
            value={value[key]}
          />
        ))}
        <ActionButtons onCancelPress={onEditCancel} onConfirmPress={onEditConfirm}/>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[style, editMode && {zIndex: 5}]}
      disabled={!editable || editMode}
      onPress={async () => {
        inputRef && inputRef.focus();
        onEdit(itemKey);
      }}
    >
      {!!value && <Text style={styles.itemCaption}>{name}</Text>}
      <View style={[styles.itemPlaceholder, editMode && styles.itemEditPlaceholder]}>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardTypeByItemType[type]}
          ref={(ref) => setInputRef(ref)}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          editable={editable && !children}
          onFocus={() => onEdit(itemKey)}
          style={[!value && styles.itemTextFaded, styles.itemText]}
        >
          {value}
        </TextInput>
        {editable && !editMode && <EditIcon/>}
      </View>
      {!noActionButtons && editMode && (
        <ActionButtons onCancelPress={onEditCancel} onConfirmPress={onEditConfirm}/>
      )}
    </TouchableOpacity>
  );
};

export const PasswordItem = (props) => {
  const {editMode} = props
  return (
    <StringItem {...props} secureTextEntry value={editMode?'':'............'}/>
  );
};

export const AddressItem = ({value, editMode, ...props}) => {
  let resultingValue = value;
  if (!editMode) {
    resultingValue = '';
    const composition = [
      '',
      'line1', '\n',
      'line2', '\n',
      'postcode', ' ', 'city', '\n',
      'country',
    ];
    for (let i = 1; i < composition.length; i += 2) {
      value[composition[i]] && (resultingValue += composition[i - 1] + value[composition[i]]);
    }
  }
  return (
    <StringItem
      {...props}
      editMode={editMode}
      multiline
      value={resultingValue}
    />
  );
};

export const AvatarItem = ({style, value, editable}) => {
  return (
    <View>
      <View style={[style, styles.itemPlaceholder, styles.imagePlaceholder]}>
        <Image style={styles.avatarImage} source={{uri: value}}/>
      </View>
      {editable && <EditIcon style={styles.imageEditIconContainer}/>}
    </View>
  );
};
