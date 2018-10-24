import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  userIsAgent: null,
  userIsModel: null,

});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  agent: false,
  model: false,
};

/* Reducers */
export const isAgent = state => ({ ...state, agent: true, model: false });
export const isModel = state => ({ ...state, agent: false, model: true });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_IS_AGENT]: isAgent,
  [Types.USER_IS_MODEL]: isModel,
});
