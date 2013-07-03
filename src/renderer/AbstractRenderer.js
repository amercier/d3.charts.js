
define(['../core/inherit', '../core/Options', '../error/abstractImplementation'], function(inherit, Options, abstractImplementation) {

  function AbstractRenderer(options) {
    Options.call(this, options);

    this.validateOption('container', 'Element');
  }

  inherit( AbstractRenderer, Options );

  AbstractRenderer.defaultOptions = {
      tickSize   : 6,
      subTickSize: 3
    };

  var prototype = AbstractRenderer.prototype;

  prototype.renderLine = function() {
    throw new MissingImplementationError(this.constructor.name, 'renderLine');
  };

  prototype.renderArea = function() {
    throw new MissingImplementationError(this.constructor.name, 'renderArea');
  };

  prototype.renderAxis = function() {
    throw new MissingImplementationError(this.constructor.name, 'renderAxis');
  };

  return AbstractRenderer;

});
