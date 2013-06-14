
define(['./error/abstractImplementation'], function(abstractImplementation) {

  function AbstractRenderer() {

  }

  AbstractRenderer.defaultOptions = {
      tickSize   : 6,
      subTickSize: 3
    };

  var prototype = AbstractRenderer.prototype;

  prototype.renderLine = abstractImplementation('renderLine');

});
