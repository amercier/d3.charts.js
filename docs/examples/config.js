define([], function() {

  requirejs.config({
    baseUrl: '../../lib',
    paths: {
      d3: 'd3/d3',
      'd3/charts': '../src',
      jquery: 'jquery/jquery'
    },
    shim: {
      d3: {
        exports: 'd3'
      },
      jquery: {
        exports: 'jQuery'
      }
    }
  });

  return window.console && (console.debug && console.debug.bind(console) || console.log && console.log.bind(console)) || function(){};

});
