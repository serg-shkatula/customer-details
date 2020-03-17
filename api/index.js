const _uiTemplatesById = {
  profile: {
    firstName: {
      type: 'string',
      name: 'First Name',
      placeholder: '',
      isRequired: true,
      isEditable: false,
    },
    lastName: {
      type: 'string',
      name: 'Last Name',
      placeholder: '',
      isRequired: true,
      isEditable: true,
    },
    passportNumber: {
      type: 'string',
      name: 'Passport Number',
      validationPattern: '',
      placeholder: '',
      isRequired: true,
      isEditable: true,
    },
    address: {
      type: 'string',
      name: 'Address',
      placeholder: '',
      isRequired: true,
      isEditable: true,
    },
    email: {
      type: 'string',
      name: 'Email',
      validationPattern: '',
      placeholder: '',
      isRequired: true,
      isEditable: false,
    },
    username: {
      type: 'string',
      name: 'Username',
      placeholder: '',
      isRequired: true,
      isEditable: false,
    },
    password: {
      type: 'password',
      name: 'Username',
      validationPattern: '',
      placeholder: '',
      isRequired: true,
      isEditable: false,
    },
    avatar: {
      type: 'image',
      name: 'Avatar',
      placeholder: '',
      isRequired: true,
      isEditable: true,
    },
  },
};

export const fetchUiTemplate = (id) => {
  //TODO: replace with actual API call
  return _uiTemplatesById[id];
};
