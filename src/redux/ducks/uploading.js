import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  uploadingRequest: ['img', 'userId'],
  uploadingSuccess: ['response'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  img: [],
};

/* Reducers */
export const request = state => ({ ...state });
export const success = state => ({ ...state });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPLOADING_REQUEST]: request,
  [Types.UPLOADING_SUCCESS]: success,
});
