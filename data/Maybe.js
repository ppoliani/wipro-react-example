import daggy from 'daggy';

export default daggy.taggedSum('Maybe', {
  Just: ['data'],
  Nothing: []
});
