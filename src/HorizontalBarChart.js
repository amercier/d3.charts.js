define([
    './core/inherit',
    './core/Options',
    './Chart',
    './data/Data',
    './layer/axis/ContinuousAxisLayer',
    './layer/axis/DiscreteAxisLayer',
    './layer/data/HorizontalBarDataLayer',
    './renderer/SVGRenderer'
  ],
  function(inherit, Options, Chart, Data, ContinuousAxisLayer, DiscreteAxisLayer, HorizontalBarDataLayer, SVGRenderer) {

    function HorizontalCharts(options) {
      this.setOptions(options);

      this.validateOption('data'     , 'string');
      this.validateOption('getValue' , 'function');
      this.validateOption('getLabel' , 'function');
      this.validateOption('container', 'Element');
      this.validateOption('width'    , 'number');

      this.options.barHeight  = 20;
      this.options.barSpacing = 3;
      this.options.padding = {
          left : 140,
          right: 0,
          top: 20,
          bottom: 0
        };

      this.data = Data.fromCSV(options.data, {
          forEach: function(d) { d.Price = +d.Price; }
        });

      this.xAxis = new ContinuousAxisLayer({ // X Axis
          orientation: 'top',
          getValue   : this.options.getValue,
          maxLength  : this.options.width - this.options.padding.left - this.options.padding.right,
          attributes : {
            class: 'axis axis-x'
          },
          x: options.padding.left,
          y: options.padding.top
        });

      this.yAxis = new DiscreteAxisLayer({ // Y Axis
          orientation: 'left',
          tickSize   : 0,
          getLabel   : this.options.getLabel,
          itemHeight : this.options.barHeight,
          itemSpacing: this.options.barSpacing,
          itemPadding: 20,
          attributes : {
            class: 'axis axis-y'
          },
          x: options.padding.left,
          y: options.padding.top
        });

      this.bars = new HorizontalBarDataLayer({ // Y Axis
          getValue: this.options.getValue
        });

      this.renderer = new SVGRenderer({
          container: this.options.container,
          width    : this.options.width
        });

      this.chart = new Chart(this.data, options)
          .addLayer(this.xAxis)
          .addLayer(this.yAxis)
          .addLayer(this.bars)
          .display(this.renderer);

    }

    inherit( HorizontalCharts, Options );

    return HorizontalCharts;

  }
);
