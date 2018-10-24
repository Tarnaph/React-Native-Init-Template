/* Presentational */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

/* Actions */
import Models from '../../redux/ducks/model';

/* Pega todo os modelos */
export function* getAllModels() {
  const response = yield call(api.get, 'models');

  switch (response.status) {
    case 200:
      yield put(Models.modelGetAll(response.data.date));
      break;
    default:
      yield put(Models.modelGetAll(response.data.date));
  }
}

/* Pega tudo sobre o modelo */
export function* getAll(action) {
  const response = yield call(api.get, `/models/${action.id}/all`);
  switch (response.status) {
    case 200:
      yield put(Models.modelSelected(response.data.date));
      break;
    default:
      yield put(Models.modelSelected(response.data.date));
  }
}
