import React from 'react';
import { AddressItem, AvatarItem, PasswordItem, StringItem } from './ProfileUI';

const componentsByType = {
  string: StringItem,
  password: PasswordItem,
  address: AddressItem,
  image: AvatarItem,
};

export default function DataItem (
  {
    style,
    itemKey,
    editMode,
    template,
    noActionButtons,
    value,
    onEdit,
  },
) {
  const Component = componentsByType[template.type];
  if (!Component) {
    return null;
  }
  return (
    <Component
      {...template}
      editMode={editMode}
      value={value}
      itemKey={itemKey}
      noActionButtons={noActionButtons}
      onEdit={onEdit}

      style={style}
      key={itemKey}
    />
  );
}
