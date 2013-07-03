define(['../../core/inherit', './AbstractDataLayer'], function(inherit, AbstractDataLayer) {

  function HorizontalBarsDataLayer(options) {
    this.setOptions(options);
  }

  inherit( HorizontalBarsDataLayer, AbstractDataLayer );

  HorizontalBarsDataLayer.prototype.display = function (renderer) {



  };

  return HorizontalBarsDataLayer;
});
