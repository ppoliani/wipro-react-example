import daggy from 'daggy';

export default daggy.taggedSum('AsyncData', {
  Empty: [],
  Loading: [],
  Success: ['data'],
  Failure: ['error']
});
