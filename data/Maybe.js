const Maybe = {
  Just: data => {
    this._value = data;
    this.tag = 'Just';
  },

  Nothing: () => {
    this._value = null;
    this.tag = 'Nothing';
  },

  matchWith: pattern => {
    pattern[this.tag](this._value);
  }
};

export default Maybe;
