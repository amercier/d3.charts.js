define(['../../core/inherit', './AbstractAxisLayer'], function(inherit, AbstractAxisLayer) {

  function ContinuousAxisLayer(options) {
    AbstractAxisLayer.call(this, options);

    this.validateOption('maxLength', 'number');
    this.validateOption('getValue' , 'function');
  }

  inherit( ContinuousAxisLayer, AbstractAxisLayer );

  ContinuousAxisLayer.prototype.createScale = function () {
    return d3.scale.linear()
        .domain([0, d3.max(this.getData().getRawData(), this.getOptions().getValue)])
        .range([0, this.getOptions().maxLength]);
  };

  return ContinuousAxisLayer;
});
