define(['../core/inherit', './Error'], function(inherit, ChartError) {

  function MissingImplementationError(functionName, methodName) {
    this.message = 'Function "' + functionName + '" is missing implementation of method "' + methodName + '"';
  }

  inherit(ChartError, MissingImplementationError);

  return MissingImplementationError;

});
