import { takeLatest, select, put } from 'redux-saga/effects';
import Geocoder from 'react-native-geocoder-reborn';
import { get, head } from 'lodash';
import { AppTypes, getCurrentLocationSuccess } from '../AppRedux/actions';
import http from '../../api/http';
import { NavigationUtils } from '../../navigation';

export function* startupSaga() {
  try {
    const { token } = yield select(state => state.login);
    const { language } = yield select(state => state.app);

    http.setAuthorizationHeader(token, language);
    const { isSkip } = yield select(state => state.app);

    if (token) {
      NavigationUtils.startMainContent();
    } else {
      isSkip ? NavigationUtils.startLoginContent() : NavigationUtils.startWelcomeScreen();
    }
  } catch (error) {
    NavigationUtils.startLoginContent();
    console.log(error);
  }
}

export function* getCurrentLocationSaga({ data }) {
  try {
    const res = yield Geocoder.geocodePosition({
      lat: get(data, 'coords.latitude'),
      lng: get(data, 'coords.longitude'),
    });

    const address = head(res);
    const city = get(address, 'adminArea');
    const country = get(address, 'country');

    yield put(
      getCurrentLocationSuccess({
        ...data,
        address: `${city}, ${country}`,
      }),
    );
  } catch (error) {
    yield put(getCurrentLocationSuccess(data));
  }
}

const appSagas = () => {
  return [
    takeLatest(AppTypes.STARTUP, startupSaga),
    takeLatest(AppTypes.GET_CURRENT_LOCATION, getCurrentLocationSaga),
  ];
};

export default appSagas();
