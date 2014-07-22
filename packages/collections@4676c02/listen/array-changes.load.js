montageDefine("4676c02","listen/array-changes",{dependencies:["../shim","../list","weak-map","./property-changes","./range-changes","./map-changes"],factory:function(e){function t(e){for(var t in e)Object.defineProperty(Array.prototype,t,{value:e[t],writable:!0,configurable:!0,enumerable:!1})}e("../shim"),e("../list"),e("weak-map");var n=e("./property-changes"),i=e("./range-changes"),r=e("./map-changes");Array.prototype.splice;var a=Array.prototype.slice;Array.prototype.reverse;var s,o=Array.prototype.sort,l=Array.prototype.swap,c=[],u={}.__proto__===Object.prototype;s=u?function(){this.__proto__=d}:function(){Object.defineProperties(this,h)},Object.defineProperty(Array.prototype,"makeObservable",{value:s,writable:!0,configurable:!0,enumerable:!1}),t(n.prototype),t(i.prototype),t(r.prototype);var h={isObservable:{value:!0,writable:!0,configurable:!0},makeObservable:{value:Function.noop,writable:!0,configurable:!0},reverse:{value:function(){var e=this.constructClone(this);return e.reverse(),this.swap(0,this.length,e),this},writable:!0,configurable:!0},sort:{value:function(){this.dispatchBeforeRangeChange(this,this,0);for(var e=0;this.length>e;e++)n.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);o.apply(this,arguments);for(var e=0;this.length>e;e++)n.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},swap:{value:function(e,t,i){i?Array.isArray(i)||(i=a.call(i)):i=c,0>e&&(e=this.length+e);var r;if(0===t){if(0===i.length)return[];r=c}else r=a.call(this,e,e+t);var s=i.length-r.length,o=this.length,u=Math.max(this.length+s,e+i.length),h=Math.max(o,u);if(s&&n.dispatchBeforeOwnPropertyChange(this,"length",this.length),this.dispatchBeforeRangeChange(i,r,e),0===s)for(var d=e;e+i.length>d;d++)n.dispatchBeforeOwnPropertyChange(this,d,this[d]),this.dispatchBeforeMapChange(d,this[d]);else if(n.hasOwnPropertyChangeDescriptor(this))for(var d=e;h>d;d++)n.dispatchBeforeOwnPropertyChange(this,d,this[d]),this.dispatchBeforeMapChange(d,this[d]);e>o&&(this.length=e);var p=l.call(this,e,t,i);if(0===s)for(var d=e;e+i.length>d;d++)n.dispatchOwnPropertyChange(this,d,this[d]),this.dispatchMapChange(d,this[d]);else if(n.hasOwnPropertyChangeDescriptor(this))for(var d=e;h>d;d++)n.dispatchOwnPropertyChange(this,d,this[d]),this.dispatchMapChange(d,this[d]);return this.dispatchRangeChange(i,r,e),s&&n.dispatchOwnPropertyChange(this,"length",this.length),p},writable:!0,configurable:!0},splice:{value:function(e,t){return e>this.length&&(e=this.length),this.swap.call(this,e,t,a.call(arguments,2))},writable:!0,configurable:!0},set:{value:function(e,t){return this.splice(e,1,t),this},writable:!0,configurable:!0},shift:{value:function(){return this.splice(0,1)[0]},writable:!0,configurable:!0},pop:{value:function(){return this.length?this.splice(this.length-1,1)[0]:void 0},writable:!0,configurable:!0},push:{value:function(e){if(1===arguments.length)return this.splice(this.length,0,e);var t=a.call(arguments);return this.swap(this.length,0,t)},writable:!0,configurable:!0},unshift:{value:function(e){if(1===arguments.length)return this.splice(0,0,e);var t=a.call(arguments);return this.swap(0,0,t)},writable:!0,configurable:!0},clear:{value:function(){return this.splice(0,this.length)},writable:!0,configurable:!0}},d=Object.create(Array.prototype,h)}});