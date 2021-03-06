'use strict';

var react = require('react');

function useLoadTime(states, fn) {
  if (states === void 0) {
    states = [];
  }

  var sTime = new Date().getTime();

  var _useState = react.useState(null),
      loadTime = _useState[0],
      setLoadTime = _useState[1];

  react.useEffect(function () {
    if (fn) {
      fn();
    }

    var eTime = new Date().getTime();
    setLoadTime(eTime - sTime);
  }, states);
  return [loadTime];
}

module.exports = useLoadTime;
