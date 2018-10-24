import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  modelRequest: null,
  modelRequestAll: ['id'],
  modelGetAll: ['response'],
  modelSelected: ['response'],
  modelLastPhoto: ['response'],
  modelAddFavorites: ['response'],
  modelRemoveFavorites: ['response'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  all: [],
  favorites: [],
  selected: '',
};

/* Reducers */
export const request = state => ({ ...state });
export const allModels = (state, actions) => ({ ...state, all: actions.response });
export const selected = (state, actions) => ({
  ...state,
  selected: actions.response,
});
export const add = (state, actions) => ({
  ...state,
  favorites: [
    ...state.favorites,
    actions.response,
  ],
});
export const remove = (state, response) => ({
  ...state,
  favorites: state.favorites.filter(favorite => favorite.id !== response.response),
});

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.MODEL_REQUEST]: request,
  [Types.MODEL_REQUEST_ALL]: request,
  [Types.MODEL_GET_ALL]: allModels,
  [Types.MODEL_ADD_FAVORITES]: add,
  [Types.MODEL_REMOVE_FAVORITES]: remove,
  [Types.MODEL_SELECTED]: selected,
});
