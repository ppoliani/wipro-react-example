import { createAction } from 'redux-actions';
import fetch from '../../helpers/api';
import { pipe } from '../../helpers/fn';
import { Just, Nothing } from '../Maybe';

export const SET_SEARCH_RESULTS= 'SEARCH::SET_SEARCH_RESULTS';
export const SET_SEARCH_ERROR = 'SEARCH::SET_SEARCH_ERROR';

const DUMMY_URL = 'https://jsonplaceholder.typicode.com/posts/1';

export const setSearchResults = createAction(SET_SEARCH_RESULTS);
export const setSearchError = createAction(SET_SEARCH_ERROR);

export const getSearchResultsRoot = (fetch, searchCriteria) => dispatch => {
  // ToDo(Pavlos): construct the url with the search criteria
  const getUrl = searchCriteria => `${DUMMY_URL}?q=${searchCriteria}`;
  const fetchData = (fetch) ['∘'] (getUrl)
  const fromNullable = data => data ? Just(data) : Nothing;

  fetchData(searchCriteria)
    .then((dispatch) ['∘'] (setSearchResults) ['∘'] (fromNullable))
    .catch((dispatch) ['∘'] (setSearchError))
};

export const getSearchResults = partial(getSearchResultsRoot, fetch);
