import api from 'services/api';
import { Types } from 'redux/ducks/favorites';
import { call, put } from 'redux-saga/effects';

export function* functionDeAlgo(action) {
  // Consulta
  const response = yield call(api.get, `/repos/${action.payload.repositoryName}`);
  // Put no type
  yield put({ type: Types.ADD, payload: { repository: response.data } });
}
