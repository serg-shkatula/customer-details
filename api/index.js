const _uiTemplatesById = {
  profile: {
    avatar: {
      type: 'image',
      name: 'Avatar',
      placeholder: 'Avatar',
      isRequired: true,
      editable: true,
    },
    firstName: {
      type: 'string',
      name: 'First Name',
      placeholder: 'First',
      isRequired: true,
      editable: false,
    },
    lastName: {
      type: 'string',
      name: 'Last Name',
      placeholder: 'Last',
      validationPattern: '/^[a-zA-Z]*$/',
      isRequired: true,
      editable: true,
    },
    passportNumber: {
      type: 'string',
      name: 'Passport Number',
      placeholder: 'Passport',
      validationPattern: '',
      isRequired: true,
      editable: true,
    },
    address: {
      type: 'address',
      name: 'Address',
      placeholder: 'Address',
      isRequired: true,
      editable: true,
      children: {
        line1: {
          type: 'string',
          name: 'Address Line 1',
          placeholder: 'Address Line 1',
          validationPattern: '',
          isRequired: true,
          editable: true,
        },
        line2: {
          type: 'string',
          name: 'Address Line 2',
          placeholder: 'Address Line 2',
          validationPattern: '',
          isRequired: true,
          editable: true,
        },
        postcode: {
          type: 'string',
          name: 'Postcode',
          placeholder: 'Postcode',
          validationPattern: '',
          isRequired: true,
          editable: true,
        },
        city: {
          type: 'string',
          name: 'City',
          placeholder: 'City',
          validationPattern: '',
          isRequired: true,
          editable: true,
        },
        country: {
          type: 'string',
          name: 'Country',
          placeholder: 'Country',
          validationPattern: '',
          isRequired: true,
          editable: true,
        },
      }
    },
    email: {
      type: 'string',
      name: 'Email',
      placeholder: 'Email',
      validationPattern: '',
      isRequired: true,
      editable: false,
    },
    username: {
      type: 'string',
      name: 'Username',
      placeholder: 'Username',
      isRequired: true,
      editable: false,
    },
    password: {
      type: 'password',
      name: 'Password',
      placeholder: 'Password',
      validationPattern: '',
      isRequired: true,
      editable: true,
    },
  },
};

const _dataById = {
  profile: {
    avatar: 'https://www.thispersondoesnotexist.com/image',
    firstName: 'Sergey',
    lastName: 'Shkatula',
    passportNumber: 'SH070884',
    address: {
      line1: 'Mustermannstr. 1',
      line2: '',
      postcode: '636069',
      city: 'Offenbach am Main',
      country: 'Germany'
    },
    email: 'serg.shkatula@gmail.com',
    username: 'serg.shkatula',
    password: '*******',
  },
};

export const fetchUiTemplate = (id) => {
  //TODO: replace with actual API call
  return _uiTemplatesById[id];
};


export const fetchData = async (id) => {
  //TODO: replace with actual API call
  await new Promise(resolve => setTimeout(resolve, 3000))
  return _dataById[id];
};
