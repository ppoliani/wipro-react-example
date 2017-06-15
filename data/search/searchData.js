import { Map } from 'immutable';
import AsyncData from '../AsyncData';
import { Nothing } from '../Maybe';

export default Map({
  searchResults: AsyncData.Empty,
  error: Nothing
});
