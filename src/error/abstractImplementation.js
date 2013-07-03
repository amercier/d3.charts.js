define(['./MissingImplementationError'], function(MissingImplementationError) {

  return function abstractImplementation(functionName, methodName) {
    throw new MissingImplementationError(functionName, methodName);
  };

});
