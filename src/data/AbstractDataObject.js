
define([
    '../error/InvalidObjectArgumentError',
    './Data'
  ],
  function(InvalidObjectArgumentError, Data) {

    function AbstractDataObject() {
    }

    AbstractDataObject.prototype.setData = function setData(data) {
      if( !(data instanceof Data) ) {
        throw new InvalidObjectArgumentError('data', Data, data);
      }
      this.data = data;
      return this;
    };

    AbstractDataObject.prototype.getData = function getData(data) {
      return this.data;
    };

    return AbstractDataObject;
  }
);
