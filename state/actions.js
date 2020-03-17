import { NAVIGATION_NAVIGATE, NAVIGATION_INIT, USER_DATA_SET } from './actionTypes';
import { fetchData } from '../api';

export function initNavigation(navigation) {
  return {
    type: NAVIGATION_INIT,
    navigation,
  };
}

export function navigate (screenName) {
  return {
    type: NAVIGATION_NAVIGATE,
    screenName,
  };
}

export async function fetchUserData (dispatch) {
  const result = await fetchData('profile');
  console.log('fetchUserData.fetchUserData, ~ Line 20: result >', result)
  dispatch({type: USER_DATA_SET, data: result});
}
