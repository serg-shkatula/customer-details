import { NAVIGATION_NAVIGATE, NAVIGATION_INIT, USER_DATA_UPDATE, USER_DATA_SET, SET_EDITING_INFO } from './actionTypes';

export function navigation (state = {}, action) {
  switch (action.type) {
    case NAVIGATION_INIT:
      return {...state, navigation: action.navigation};
    case NAVIGATION_NAVIGATE:
      if (!state.navigation) {
        return state;
      }
      state.navigation.navigate(action.screenName);

      return {...state, currentScreen: action.screenName};
  }
  return state;
}

export function user (state = {}, action) {
  switch (action.type) {
    case USER_DATA_SET:
      console.log('user.user, ~ Line 21: action.data >', action.data);
      return {
        ...state,
        data: {...action.data},
      };
    case USER_DATA_UPDATE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.key]: action.value,
        },
      };
  }
  return state;
}

export function data (state = {}, action) {
  switch (action.type) {
    case SET_EDITING_INFO:
      const resultingState = {
        ...state,
        editingInfo: {...action.info},
      };
      if (!action.info) {
        delete resultingState.editingInfo;
      }
      return resultingState;
  }
  return state;
}
