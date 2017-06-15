let Sum = (name, patterns) => {
  const _name = name;
  const _value = undefined;
  const _tag = undefined;

  return patterns
    .reduce((tags, tagName) =>
      Object.defineProperty(tags, tagName, {
        set: value => {
          _value = value
          _tag = tagName;
        },

        get: () => _value
      }), {})
}

Sum = Object.assign({}, Sum, {
  _getMissingTags() {
    return [Object.keys(pattern)].map(
      keys => Object.keys(patterns).reduce(
        (acc, t) => keys.includes(t) ? acc : [...acc, t],
        []
      )
    )
  },

  _assertExhaustive() {
    this._getMissingTags()
      .map(missingTags => {
        if(missingTags.length > 0) throw new Error(`The following tags are not included in the pattern matching: ${missingTags.join('')}`)
      });
  },

  matchWith: patterns => {
    this._assertExhaustive(patterns)
    pattern[this.tag](this._value);
  }
})

export default Sum;
