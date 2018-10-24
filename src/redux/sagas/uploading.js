/* Presentational */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

/* Actions */
import Up from '../../redux/ducks/uploading';

/* Pega todo os modelos */
export function* uploadingImg(action) {

  const data = new FormData();
  data.append('photo', {
    uri: action.img,
    type: 'image/jpeg',
    name: 'testPhotoName',
  });


  const response = yield call(api.post, 'img', { img: action.img, user_id: 1 });

  switch (response.status) {
    case 200:
      yield put(Up.success(response));
      break;
    default:
      yield put(Up.success(response));
  }
}
