require(['./config'], function(debug) {
  require(['jquery', 'd3', 'd3/charts/HorizontalBarChart'], function($, d3, HorizontalBarChart) {

    debug('D3.js loaded: ', d3);

    $.ajax('../../test/data/reviews.csv')
      .done(function(csv) {
        debug('Loaded data: ', csv);

        new HorizontalBarChart({
            data     : csv,
            forEach  : function(d) { d.Price = +d.Price; },
            getValue : function(d) { return d.Price; },
            getLabel : function(d) { return d.Author; },
            container: $('.chart').get(0),
            height   : 200,
            width    : $('.chart').width()
          });

        /*
        var data = Data.fromCSV(csv, {
          forEach: function(d) { d.Price = +d.Price; }
        });
        debug('Parsed data: ', data);

        new Chart(data, {

          })
          .addLayer(new ContinuousAxis({ // X Axis
            orientation: 'top',
            subticks: false,
            getValue: function(d) { return d.Price; }
          }))
          .addLayer(new DiscreteAxis({ // Y Axis
            orientation: 'left',
            getLabel: function(d) { return d.Author }
          }))
          .addLayer(new HorizontalBarsLayer({ // Y Axis
            getValue: function(d) { return d.Price; }
          }))
          .render( new SVGRenderer($('.chart').get(0)) );
          */
      });

  });
});
