define([
    '../core/inherit',
    '../core/Options',
    '../data/AbstractDataObject',
    '../error/MissingImplementationError'
  ],
  function(inherit, Options, AbstractDataObject, MissingImplementationError) {

    function AbstractLayer(options) {
      AbstractDataObject.call(this, options);
      Options.call(this, options);
    }

    inherit( AbstractLayer, AbstractDataObject, [Options] );

    AbstractLayer.prototype.display = function(renderer) {
      throw new MissingImplementationError(this.constructor.name, 'display');
    };

    return AbstractLayer;
  }

);
