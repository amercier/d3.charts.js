define(['../core/inherit'], function(inherit) {

  function ChartError(message) {
    this.message = message;
  }

  inherit( ChartError, Error );

  return ChartError;
});
