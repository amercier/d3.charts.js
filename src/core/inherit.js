/*!d3/charts/core/inherit*/
/**
 * D3 Charts Inheritance
 * =====================
 *
 * This module provides a function `inherit` that create prototypal inheritance
 * from a parent function to a child function.
 *
 *     inherit(parentFunction, childFunction);
 *
 *     new parentFunction() instanceof parentFunction; // true
 *     new parentFunction() instanceof childFunction ; // true
 *
 *
 * Prototypal inheritance is provided through native Javascript class
 * inheritance pattern:
 *
 *     function Parent(param1, ...) {
 *        ...
 *     }
 *
 *     function __();
 *     function Child(param1, ...) {
 *        Parent.call(this, param1, ...);
 *        ...
 *     }
 *     Child.prototype = new __();
 *     Child.prototype.constructor = Child;
 *
 * This can changed by overriding this module by your own implementation. This
 * implementation must be a AMD module that returns a method with the following
 * signature:
 *
 *     inherit(Function parentFunction, Function childFunction) : void
 *
 * @author Alexandre Mercier <pro.alexandre.mercier@gmail.com>
 */
define([], function() {

  function __() {} // see inherhit()

  /**
   * Inheritance method
   */
  return function inherhit(childFunction, parentFunction, mixins) {

    // Inheritance
    if(parentFunction) {
      __.prototype = parentFunction.prototype;
      childFunction.prototype = new __();
      childFunction.prototype.constructor = childFunction;
    }

    // Mixins
    if(mixins) {
      mixins.forEach(function (mixin) {

        var prototypes  = [],
            prototype   = mixin.prototype,
            objectProto = Object.prototype;

        while(prototype !== objectProto) {
          prototypes.splice(0, 0, prototype);
          prototype = prototype.__proto__;
        }

        prototypes.forEach(function (proto) {
          for (var i in proto) {
            if(proto.hasOwnProperty(i)) {
              childFunction.prototype[i] = proto[i];
            }
          }
        });

      });
    }
  };

});
