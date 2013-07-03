define(['../../core/inherit', '../AbstractLayer'], function(inherit, AbstractLayer) {

  function AbstractDataLayer(options) {
    this.setOptions(options);
  }

  inherit( AbstractDataLayer, AbstractLayer );

  return AbstractDataLayer;
});
