
define(['./error/abstractImplementation'], function(abstractImplementation) {

  function AbstractRenderer() {

  }

  var __ = AbstractRenderer.prototype;

  __.renderLine = abstractImplementation('renderLine');

});
