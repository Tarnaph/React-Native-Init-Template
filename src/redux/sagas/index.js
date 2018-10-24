import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as ModelsType } from '../../redux/ducks/model';
import { Types as LoginType } from '../../redux/ducks/login';
import { Types as UploadingType } from '../../redux/ducks/uploading';

/* Saga */
import { getAllModels, getAll } from './models';
import { login } from './login';
import { uploadingImg } from './uploading';

export default function* root() {
  yield [
    takeLatest(ModelsType.MODEL_REQUEST, getAllModels),
    takeLatest(ModelsType.MODEL_REQUEST_ALL, getAll),
    takeLatest(LoginType.LOGIN_REQUEST, login),
    takeLatest(UploadingType.UPLOADING_REQUEST, uploadingImg),
  ];
}
