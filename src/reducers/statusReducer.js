import { CLEAR_STATUS, UPDATE_STATUS, UPDATE_STATUS_FAIL, UPDATE_STATUS_SUCCESS } from '../constants/actionTypes';
import get from 'lodash/get';

const initState = ''

export default (state = initState, action) => {
  const status = get(action, ['payload', 'status'], undefined);
  if (status) {
    return status;
  } else if (action.type === CLEAR_STATUS) {
    return initState;
  }
  return state;
};
