define([], function() {

  return function getType (value) {
    var type = typeof value;
    if( type === 'object' ) {
      type = Object.prototype.toString.call(value);
      switch (type) {
        case '[object Object]': return 'object';
        case '[object Array]' : return 'array';
        default               : return type.replace(/^\[object (.*)\]$/, '$1');
      }
    }
    else {
      return type;
    }
  };

});
