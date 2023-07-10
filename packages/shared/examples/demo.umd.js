(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Demo = factory());
})(this, (function () {
  var index = {
    name: 'demo'
  };

  return index;

}));
