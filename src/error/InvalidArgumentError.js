define(['../core/inherit', '../core/getType', './ChartError'], function (inherit, getType, ChartError) {

  function InvalidArgument(name, expected, value) {
    this.message = 'Expecting ' + name + ' to be ' + expected + ', but got <' + getType(value) + '>';
  }

  inherit( InvalidArgument, ChartError );

  return InvalidArgument;
});
