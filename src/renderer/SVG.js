
define(['../core/inherit', './Abstract'], function(AbstractRenderer) {

  /**
   * Create a new SVG render
   *
   * @param {Element} container HTML element that will contain the newly created `<svg>` element
   * @param {Object}  options   Options
   *
   * @param {Number} options.width  Width  of the `<svg>` element
   * @param {Number} options.height height of the `<svg>` element
   * @param {Number} options.x      Left offset of the `<svg>` element
   * @param {Number} options.y      Top offset  of the `<svg>` element
   *
   * @constructor
   */
  function SVGRenderer(container, options) {

    var e = this.element = d3.select(container).append('svg'),
        __;
    options = options || {};

    if('width' in options) {
      e.attr('width', options.width);
    }

    if('height' in options) {
      e.attr('height', options.height);
    }

    if(('x' in options) || ('y' in options)) {
      e = this.element = e.append('g').attr('transform', 'translate(' + (options.x || 0) + ',' + (options.y || 0) + ')');
    }
  }

  inherit(AbstractRenderer, SVGRenderer);
  __ = SVGRenderer.prototype;

  /**
   * Render a path
   *
   * @see #renderLine()
   * @see #renderArea()
   *
   * @param {Array}    path            The pre-calculated d3's SVG path
   * @param {Object}   options         Options
   *
   * @param {Function} options.defined       Function that determines whether a datum is defined or not. Eg: function(d) { return d.CpuUsed !== null; }
   * @param {String}   options.interpolation Interpolation mode. See https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-line_interpolate
   * @param {Object}   options.attributes    (SVG-specific) SVG element attributes. Eg: { class: 'my-line' }
   * @param {Function} options.styles        (SVG-specific) SVG styles. Eg: { 'stroke-width':'2px', 'shape-rendering':'crispEdges' }
   *
   * @return {SVGRenderer} Returns this object to provide daisy-chaining capability
   */
  __.renderPath = function renderPath(path, options) {

    var e = this.element.append('path').datum(data);

    // options.defined
    if('defined' in options) {
      path = path.defined(options.defined);
    }

    // options.interpolate
    if('interpolation' in options) {
      path = path.interpolate(options.interpolation);
    }

    // options.attributes
    if('attributes' in options) {
      Object.keys(options.attributes).forEach(function (attributeName) {
        e = e.attr(attributeName, options.attributes.attributeName);
      });
    }

    // options.styles
    if('styles' in options) {
      Object.keys(options.styles).forEach(function (attributeName) {
        e = e.style(attributeName, options.styles.attributeName);
      });
    }

    // path points
    e = e.attr(d, path);

    return this;
  };


  /**
   * Render a line
   *
   * @param {Array}    data            The data array
   * @param {Function} xDataGenerator  Data generator for X axis. Eg: function(d) { return xScale(d.date); }
   * @param {Function} yDataGenerator  Data generator for Y axis. Eg: function(d) { return yScale(d.value); }
   * @param {Object}   options         Options
   *
   * @param {Function} options.defined       Function that determines whether a datum is defined or not. Eg: function(d) { return d.CpuUsed !== null; }
   * @param {String}   options.interpolation Interpolation mode. See https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-line_interpolate
   * @param {Object}   options.attributes    (SVG-specific) SVG element attributes. Eg: { class: 'my-line' }
   * @param {Function} options.styles        (SVG-specific) SVG styles. Eg: { 'stroke-width':'2px', 'shape-rendering':'crispEdges' }
   *
   * @return {SVGRenderer} Returns this object to provide daisy-chaining capability
   */
  __.renderLine = function renderLine(data, xDataGenerator, yDataGenerator, options) {

    // 1. Create a line
    var line = d3.svg.line()
        .x(xDataGenerator)
        .y(yDataGenerator);


    // 2. Render the line as a path
    return this._renderPath(line, options);
  };

  /**
   * Render an area
   *
   * @param {Array}    data            The data array
   * @param {Function} xDataGenerator  Data generator for X axis. Eg: function(d) { return xScale(d.date); }
   * @param {Function} yDataGenerator  Data generator for Y axis. Eg: function(d) { return yScale(d.value); }
   * @param {Object}   options         Options
   *
   * @param {Function} options.defined       Function that determines whether a datum is defined or not. Eg: function(d) { return d.CpuUsed !== null; }
   * @param {String}   options.interpolation Interpolation mode. See https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-line_interpolate
   * @param {Object}   options.attributes    (SVG-specific) SVG element attributes. Eg: { class: 'my-line' }
   * @param {Function} options.styles        (SVG-specific) SVG styles. Eg: { 'stroke-width':'2px', 'shape-rendering':'crispEdges' }
   *
   * @return {SVGRenderer} Returns this object to provide daisy-chaining capability
   */
   __.renderArea = function (data, xDataGenerator, yDataGenerator, options) {

    // 1. Create an area
    var area = d3.svg.area()
        .x(xDataGenerator)
        .y(yDataGenerator);


    // 2. Render the line as a path
    return this._renderPath(area, options);
  };

  return SVGRenderer;

});
