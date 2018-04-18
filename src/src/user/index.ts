import * as _Actions from './actions';
import * as _Consts from './consts';
import * as _Reducer from './reducer';
import * as _Sagas from './sagas';
import * as _States from './states';

namespace User {
  export import Actions = _Actions;
  export import Consts = _Consts;
  export import Reducer = _Reducer;
  export import Sagas = _Sagas;
  export import States = _States;
}

export default User;
