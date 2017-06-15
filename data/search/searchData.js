import { Map } from 'immutable';
import AsyncData from  '../AsyncData';
import Maybe from '../Maybe';

export default Map({
  searchResults: AsyncData.Empty,
  error: Maybe.Nothing
});
