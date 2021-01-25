import Immutable from 'seamless-immutable';
import { AppTypes } from './actions';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { findBestLanguageForApp } from '../../utils/appUtil';

export const INITIAL_STATE = Immutable({
  loading: null,
  language: null,
  currentLocation: {},
  isSkip: false,
});

const loading = state =>
  state.merge({
    loading: true,
  });

const clearLoading = state =>
  state.merge({
    loading: null,
  });

const setLanguage = (state, { language }) => state.merge({ language });

const getCurrentLocation = (state, { data }) => {
  if (data) {
    return state.merge({
      currentLocation: data,
    });
  }
};

const markSkipIntro = (state, { isSkip }) =>
  state.merge({
    isSkip: isSkip,
  });

const ACTION_HANDLERS = {
  [AppTypes.LOADING]: loading,
  [AppTypes.CLEAR_LOADING]: clearLoading,
  [AppTypes.SET_LANGUAGE]: setLanguage,
  [AppTypes.GET_CURRENT_LOCATION_SUCCESS]: getCurrentLocation,
  [AppTypes.MARK_SKIP_INTRO]: markSkipIntro,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
