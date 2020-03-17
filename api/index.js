const _uiTemplatesById = {
  profile: {
    avatar: {
      type: 'image',
      name: 'Avatar',
      placeholder: 'Avatar',
      isRequired: true,
      isEditable: true,
    },
    firstName: {
      type: 'string',
      name: 'First Name',
      placeholder: 'First',
      isRequired: true,
      isEditable: false,
    },
    lastName: {
      type: 'string',
      name: 'Last Name',
      placeholder: 'Last',
      isRequired: true,
      isEditable: true,
    },
    passportNumber: {
      type: 'string',
      name: 'Passport Number',
      placeholder: 'Passport',
      validationPattern: '',
      isRequired: true,
      isEditable: true,
    },
    address: {
      type: 'string',
      name: 'Address',
      placeholder: 'Address',
      isRequired: true,
      isEditable: true,
    },
    email: {
      type: 'string',
      name: 'Email',
      placeholder: 'Email',
      validationPattern: '',
      isRequired: true,
      isEditable: false,
    },
    username: {
      type: 'string',
      name: 'Username',
      placeholder: 'Username',
      isRequired: true,
      isEditable: false,
    },
    password: {
      type: 'password',
      name: 'Password',
      placeholder: 'Password',
      validationPattern: '',
      isRequired: true,
      isEditable: false,
    },
  },
};

export const fetchUiTemplate = (id) => {
  //TODO: replace with actual API call
  return _uiTemplatesById[id];
};
