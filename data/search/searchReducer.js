import { handleActions } from 'redux-actions';
import SearchData from './searchData';
import { SET_SEARCH_RESULTS, SET_SEARCH_RESULTS_ERROR } from './searchActions';

const handleSetSearchResults = (state, action) => state.set('searchResults', action.payload);
const handleSetSearchErro = (state, action) => state.set('error', action.payload);

export default handleActions({
  [SET_SEARCH_RESULTS]: handleSetSearchResults,
  [SET_SEARCH_RESULTS_ERROR]: handleSetSearchError
}, SearchData);
