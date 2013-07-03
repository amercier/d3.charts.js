define(['../../core/inherit', '../AbstractLayer'], function(inherit, AbstractLayer) {

  function AbstractAxisLayer(options) {
    AbstractLayer.call(this, options);
    this.scale = null;

    this.validateOption('orientation', 'string');
  }

  inherit( AbstractAxisLayer, AbstractLayer );

  AbstractAxisLayer.prototype.display = function display(renderer) {
    console.log('Rendering axis', this);
    renderer.renderAxis(this.getScale(), this.options);
  };

  AbstractAxisLayer.prototype.getScale = function getScale() {
    if(this.scale === null) {
      this.scale = this.createScale();
    }
    return this.scale;
  };

  AbstractAxisLayer.prototype.createScale = function () {
    throw new MissingImplementationError(this.constructor.name, 'createScale');
  };

  return AbstractAxisLayer;
});
