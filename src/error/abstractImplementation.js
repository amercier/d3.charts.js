define(['./MissingImplementation'], function(MissingImplementationError) {

  return function abstractImplementation(functionName, methodName) {
    throw new MissingImplementationError(methodName);
  };

});
