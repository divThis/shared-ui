/**
 *	This plugin should only be used for unit testing. It wraps a module factory in another function to allow dependency injection
 */

define([], function() {
	'use strict';

    var overriden = false;
    var modulesToWrap = [];
    
    /**
     *	Stub the surrogate function that checks if the factory should be wrapped.
     *	@param {Function} fn function to wrap
     */
 	function stub(fn) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var module = args[0];
            var index = modulesToWrap.indexOf(module.id);
            
            if (index !== -1) {
                modulesToWrap.splice(index, 1);
                return function() {
                    return fn.apply(this, arguments);
                };
            }
            
            return fn.apply(this, args.slice(1));
        };
    }
    
    // Original define
    var d = define;

    /**
     *	Overrides the define function to force getting the module informations
     */
    define = function() {
        var args = Array.prototype.slice.call(arguments);
        var index = args.length;
        
        while(index--) {
            if (typeof args[index] === 'function') {
                args.splice(index, 1, stub(args[index]));
            }
            else if (args[index] instanceof Array) {
                args[index].unshift('module');
            }
        }
        
        return d.apply(this, args);
    };

    // We must copy the properties of the original define to ensure that define.amd is available
    for (var name in d) {
    	if (d.hasOwnProperty(name)) {
    		define[name] = d[name];
    	}
    }

    return {
    	/**
    	 *	Loads a dependency with requirejs and instruct the callback to wrap the factory in a new function
    	 *	@param {String} name of the dependency to load
    	 *  @param {Function} req parent requirejs
    	 *	@param {Function} load callback
    	 *	@param {Object} config global configurations
    	 */
        load: function(name, req, load, config) {
            modulesToWrap.push(name);
            
            req([name], function (value) {
                load(value);
            });
        }
    };
});