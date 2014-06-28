module.exports = function (arity, efn, gfn) {
  if ('function' == typeof arity) {
    gfn = efn;
    efn = arity;
    arity = false;
  }
  return function (err) {
    if (err) return efn.call(this, err);
    else return gfn.apply(this, Array.prototype.slice.call(arguments, 1));
  };
  if (arity === 0) return function () { return rt.apply(this, arguments); };
  else if (arity === 1) return function (err) { return rt.apply(this, arguments); };
  else if (arity === 2) return function (err, a) { return rt.apply(this, arguments); };
  else if (arity === 3) return function (err, a, b) { return rt.apply(this, arguments); };
  else if (arity === 4) return function (err, a, b, c) { return rt.apply(this, arguments); };
  else if (arity === 5) return function (err, a, b, c, d) { return rt.apply(this, arguments); };
  else if (arity === 6) return function (err, a, b, c, d, e) { return rt.apply(this, arguments); };
  else return rt;
};
