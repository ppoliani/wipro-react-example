import { createAction } from 'redux-actions';
import fetch from '../../helpers/api';
import { partial } from '../../helpers/fn';
import Maybe from '../Maybe';

export const SET_LOADING = 'SEARCH::SET_LOADING';
export const SET_SEARCH_RESULTS= 'SEARCH::SET_SEARCH_RESULTS';
export const SET_SEARCH_ERROR = 'SEARCH::SET_SEARCH_ERROR';

const DUMMY_URL = 'https://jsonplaceholder.typicode.com/posts/1';

export const setSearchResults = createAction(SET_SEARCH_RESULTS);
export const setSearchError = createAction(SET_SEARCH_ERROR);
export const setLoading = createAction(SET_LOADING);

export const getSearchResultsRoot = (fetch, searchCriteria) => dispatch => {
  // ToDo(Pavlos): construct the url with the search criteria
  const getUrl = searchCriteria => `${DUMMY_URL}?q=${searchCriteria}`;
  const fetchData = (fetch) ['∘'] (getUrl)
  const fromNullable = data => data ? Maybe.Just(data) : Maybe.Nothing;

  dispatch(setLoading());

  fetchData(searchCriteria)
    .then((dispatch) ['∘'] (setSearchResults) ['∘'] (fromNullable))
    .catch((dispatch) ['∘'] (setSearchError))
};

export const getSearchResults = partial(getSearchResultsRoot, fetch);
