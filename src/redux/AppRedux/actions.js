import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const AppTypes = makeConstantCreator(
  'STARTUP',
  'LOADING',
  'CLEAR_LOADING',
  'SET_LANGUAGE',
  'GET_CURRENT_LOCATION',
  'GET_CURRENT_LOCATION_SUCCESS',
  'MARK_SKIP_INTRO',
);

export const startup = () => makeActionCreator(AppTypes.STARTUP);
export const loading = () => makeActionCreator(AppTypes.LOADING);
export const clearLoading = () => makeActionCreator(AppTypes.CLEAR_LOADING);
export const setLanguage = language =>
  makeActionCreator(AppTypes.SET_LANGUAGE, { language });

export const getCurrentLocation = data =>
  makeActionCreator(AppTypes.GET_CURRENT_LOCATION, { data });

export const getCurrentLocationSuccess = data =>
  makeActionCreator(AppTypes.GET_CURRENT_LOCATION_SUCCESS, { data });

export const markSkipIntro = isSkip =>
  makeActionCreator(AppTypes.MARK_SKIP_INTRO, { isSkip });
