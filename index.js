(function(root){
  'use strict';

  function deabbreviateNumber (input) {
    if (typeof input !== 'string') return input;

    var regex = /^([0-9,.]+)[\s+]?(k|m|b|t)?/gi;
    var parts = regex.exec(input);

    if (!parts) return input;

    var numPart = parts[1];
    var scale = (parts[2] || '').toLowerCase();

    if (!scale) return input;

    var num = parseFloat(numPart.replace(/[^0-9.]/g, ''));
    var scales = {
      k: 1000,
      m: 1000000,
      b: 1000000000,
      t: 1000000000000,
    }

    if (!scales[scale]) return input;

    return num * scales[scale];
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = deabbreviateNumber
  } else {
    root.deabbreviateNumber = deabbreviateNumber
  }

})(this);
