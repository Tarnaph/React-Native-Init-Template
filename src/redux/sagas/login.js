/* Presentational */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

/* Actions */
import Login from '../../redux/ducks/login';

/* Pega todo os modelos */
export function* login(action) {
  const response = yield call(api.post, 'login', { email: action.email, password: action.password });

  console.tron.error(response.data.data);

  switch (response.status) {
    case 200:
      yield put(Login.loginAccept(response.data.data));
      break;
    default:
      yield put(Login.loginDenied());
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
