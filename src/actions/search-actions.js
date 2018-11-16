import superagent from 'superagent';
import { switchRoute } from './route';

export const FETCH_RESULTS_BEGIN = 'FETCH_RESULTS_BEGIN';
export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';
export const FETCH_RESULTS_FAILURE = 'FETCH_RESULTS_FAILURE';
export const FETCH_TOP_TEN_SUCCESS = 'FETCH_TOP_TEN_SUCCESS';
export const FETCH_TOP_TEN_FAILURE = 'FETCH_TOP_TEN_FAILURE';

export const fetchResultsBegin = () => ({
  type: FETCH_RESULTS_BEGIN,
});

export const fetchResultsSuccess = results => ({
  type: FETCH_RESULTS_SUCCESS,
  payload: results,
});

export const fetchResultsFailure = error => ({
  type: FETCH_RESULTS_FAILURE,
  payload: error,
});

export const fetchTopTenSuccess = results => ({
  type: FETCH_TOP_TEN_SUCCESS,
  payload: results,
});

export const fetchTopTenFailure = error => ({
  type: FETCH_TOP_TEN_FAILURE,
  payload: error,
});

export const fetchResultsRequest = query => dispatch => {
  dispatch(fetchResultsBegin());
  return superagent.get(`${__API_URL__}/api/v1/profile/all/${query}`)
    .then(res => {
      dispatch(fetchResultsSuccess(res.body));
      dispatch(switchRoute('/search-results'));
    })
    .catch(err => dispatch(fetchResultsFailure(err)));
};

export const fetchTopTenRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/statBlock/topten/player`)
    .then(res => {
      dispatch(fetchTopTenSuccess(res.body));
    })
    .catch(err => dispatch(fetchTopTenFailure(err)));
};