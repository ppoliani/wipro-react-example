import { handleActions } from 'redux-actions';
import SearchData from './searchData';
import AsyncData from '../AsyncData';
import { SET_LOADING, SET_SEARCH_RESULTS, SET_SEARCH_RESULTS_ERROR } from './searchActions';

const handleSetSearchLoading = (state, action) => state.set('searchResults', AsyncData.Loading);
const handleSetSearchResults = (state, action) => state.set('searchResults', AsyncData.Success(action.payload));
const handleSetSearchError= (state, action) => state.set('searchResults', AsyncData.Failure(action.payload));

export default handleActions({
  [SET_LOADING]: handleSetSearchLoading,
  [SET_SEARCH_RESULTS]: handleSetSearchResults,
  [SET_SEARCH_RESULTS_ERROR]: handleSetSearchError
}, SearchData);
