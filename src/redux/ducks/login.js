import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginAccept: ['response'],
  loginDenied: null,

});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  isLogin: false,
  user: '',
};

/* Reducers */
export const loginRequest = state => ({ ...state });
export const loginDenied = () => ({ isLogin: false, user: '' });
export const loginAccept = (state, actions) => ({ ...state, isLogin: true, user: actions.response });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_ACCEPT]: loginAccept,
  [Types.LOGIN_DENIED]: loginDenied,
});
