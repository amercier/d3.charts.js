define(['../../core/inherit', './AbstractAxisLayer'], function(inherit, AbstractAxisLayer) {

  function DiscreteAxisLayer(options) {
    AbstractAxisLayer.call(this, options);

    this.validateOption('itemHeight' , 'number');
    this.validateOption('itemSpacing', 'number');
    this.validateOption('itemPadding', 'number');
    this.validateOption('getLabel'   , 'function');
  }

  inherit( DiscreteAxisLayer, AbstractAxisLayer );

  DiscreteAxisLayer.prototype.createScale = function () {

    var rawData = this.getData().getRawData(),
        options = this.options;

    return d3.scale.ordinal()
        .domain(
          d3.range(0, rawData.length)
              .map(function(i) {
                return options.getLabel( rawData[i] );
              })
        )
        .rangeBands([0, this.getData().getRawData().length * (options.itemHeight + options.itemSpacing)]);
  };

  return DiscreteAxisLayer;
});
