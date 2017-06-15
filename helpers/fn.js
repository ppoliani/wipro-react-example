export const compose = (...fns) => {
  const [first, ...funcs] = fns.reverse();
  return (...args) => funcs.reduce((res, fn) => fn(res), first(...args));
};

export const pipe = (...fns) => fns.reverse().reduce((res, fn) => fn(res));

// composition hack
Function.prototype['∘'] = function(f){
  return x => this(f(x))
}

export const partial = (fn, ...args) => (...restArgs) => fn.apply(this, args.concat(restArgs));
