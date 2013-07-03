define(['../core/inherit', './ChartError'], function(inherit, ChartError) {

  function MissingImplementationError(functionName, methodName) {
    this.message = 'No implementation available for method "' + methodName + '" in function "' + functionName + '".';
  }

  inherit(ChartError, MissingImplementationError);

  return MissingImplementationError;

});
