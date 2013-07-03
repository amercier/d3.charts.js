
define([
    'd3',
    './core/inherit',
    './core/getType',
    './core/Options',
    './error/InvalidObjectArgumentError',
    './data/Data',
    './data/AbstractDataObject',
    './layer/AbstractLayer',
    './renderer/AbstractRenderer'
  ],
  function(d3, inherit, getType, Options, InvalidObjectArgumentError, Data, AbstractDataObject, AbstractLayer, AbstractRenderer) {

    function Chart(data, options) {
      this.setData   (data);
      this.setOptions('2' in arguments ? options : {});
      this.layers = [];
    }

    inherit( Chart, AbstractDataObject, [Options] );

    Chart.prototype.addLayer = function addLayer( layer ) {

      if( !(layer instanceof AbstractLayer) ) {
        throw new InvalidObjectArgumentError('layer', AbstractLayer, layer);
      }

      if( this.layers.indexOf(layer) !== -1 ) {
        throw new Error('Cannot add the same layer twice');
      }

      layer.setData(this.getData());
      this.layers.push(layer);

      return this;
    };

    Chart.prototype.display = function(renderer) {

      if( !(renderer instanceof AbstractRenderer) ) {
        throw new InvalidObjectArgumentError('renderer', AbstractRenderer, renderer);
      }

      this.layers.forEach(function (layer) {
        layer.display(renderer);
      });

    };

    return Chart;
  }
);
