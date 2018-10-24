import navReducer from '../../navigation/reducer';
import { reducer as user } from '../../redux/ducks/user';
import { reducer as modalContact } from '../../redux/ducks/modalContact';
import { reducer as modalEditor } from '../../redux/ducks/modalEditor';
import { reducer as models } from '../../redux/ducks/model';
import { reducer as login } from '../../redux/ducks/login';
import { reducer as uploading } from '../../redux/ducks/uploading';

export default {
  nav: navReducer,
  user,
  modalContact,
  modalEditor,
  models,
  login,
  uploading,
};
