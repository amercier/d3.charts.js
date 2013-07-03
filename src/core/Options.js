
define(['./getType'], function(getType) {

  function Options(options) {
    this.setOptions(options);
  }

  Options.prototype.setOptions = function setOptions(options) {
    if( getType(options) !== 'object' ) {
      throw new Error('Expected options to be an object, ' + getType(options) + ' given');
    }
    this.options = options;
    return this;
  };

  Options.prototype.getOptions = function getOptions(Options) {
    return this.options;
  };

  Options.prototype.validateOption = function validateOption(name, type) {
    var options = this.getOptions();

    if( !(name in options) ) {
      throw new Error( 'Missing option "' + name + '"' + (type ? ' (' + type + ')' : '') );
    }

    if(type && getType(options) !== type) {
      new Error('Invalid option "' + name + '": expecting ' + type + ', got ' + getType(options));
    }
  };

  return Options;
});
