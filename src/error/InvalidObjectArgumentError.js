define(['../core/inherit', '../core/getType', './InvalidArgumentError'], function (inherit, getType, InvalidArgumentError) {

  function InvalidObjectArgumentError(name, expectedFunction, value) {
    this.message = (new InvalidArgumentError(name, 'a ' + expectedFunction.name + ' object', value)).message;
  }

  inherit( InvalidObjectArgumentError, InvalidArgumentError );

  return InvalidObjectArgumentError;
});
