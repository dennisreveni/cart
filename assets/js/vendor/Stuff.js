function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return n[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){return JSON.stringify(n)}function i(n){var t;try{t=JSON.parse(n)}catch(e){console.error(e)}return t}function o(n){return i(localStorage.getItem(n))}function u(n,t){localStorage.setItem(n,r(t))}function a(n){if(!(this instanceof a))return new a(n);this.name=n;var t=o(n);(null===t||"object"!=typeof t)&&localStorage.setItem(n,r({}))}var c=e(1),f=e(2),l=e(3);l(a.prototype,new f),a.create=function(n){return new a(n)},a.prototype.add=function(n){var t=o(this.name),e=c.makeId();return t[e]=n,u(this.name,t),this.emit("add",[e,n]),this.emit("change",[e,n]),e},a.prototype.remove=function(n){var t,e=o(this.name),r=e.hasOwnProperty(n)&&n;return r&&(t=e[n],delete e[n],u(this.name,e),this.emit("remove",[n,t]),this.emit("change",[n,void 0,t])),r},a.prototype.get=function(n){return o(this.name)[n]},a.prototype.update=function(n,t){var e,r=o(this.name),i=r.hasOwnProperty(n)&&n;return i&&(e=r[n],r[n]=t,u(this.name,r),this.emit("update",[n,t,e]),this.emit("change",[n,t,e])),i},a.prototype.clear=function(){this.forEach(function(n){this.remove(n)}.bind(this)),this.emit("clear")},a.prototype.map=function(n){return this.reduce(function(t,e){return t.push(n(e)),t},[])},a.prototype.reduce=function(n,t){for(var e=Object.keys(o(this.name)),r=void 0===t?e.shift():t,i=0;i<e.length;i++)r=n(r,e[i]);return r},a.prototype.filter=function(n){return this.reduce(function(t,e){return n(e)&&t.push(e),t},[])},a.prototype.find=function(n){return this.filter(n)[0]},a.prototype.forEach=function(n){Object.keys(o(this.name)).forEach(n)},n.exports=a},function(n){function t(){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=0;10>e;e++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}n.exports={makeId:t}},function(n){function t(){this._callbacks={}}t.prototype.on=function(n,t){return this._callbacks[n]=this._callbacks[n]||[],this._callbacks[n].push(t),this},t.prototype.off=function(n,t){var e,r=this._callbacks[n];return r?1===arguments.length?(delete this._callbacks[n],this):(e=r.indexOf(t),r.splice(e,1),this):this},t.prototype.emit=function(n,t){return this._callbacks[n]=this._callbacks[n]||[],t=t||[],this._callbacks[n].forEach(function(n){n.apply(this,t)}),this},t.prototype.once=function(n,t){function e(){r.off(n,e),t.apply(this,arguments)}var r=this;return this.on(n,e),this},n.exports=t},function(n,t,e){n.exports=e(4)},function(n,t,e){function r(){var n,t,e,o,u,a,c=arguments[0]||{},f=1,l=arguments.length,s=!1;for("boolean"==typeof c&&(s=c,c=arguments[1]||{},f=2),"object"==typeof c||i.fn(c)||(c={});l>f;f++)if(n=arguments[f],null!=n){"string"==typeof n&&(n=n.split(""));for(t in n)e=c[t],o=n[t],c!==o&&(s&&o&&(i.hash(o)||(u=i.array(o)))?(u?(u=!1,a=e&&i.array(e)?e:[]):a=e&&i.hash(e)?e:{},c[t]=r(s,a,o)):"undefined"!=typeof o&&(c[t]=o))}return c}/*!
	 * node.extend
	 * Copyright 2011, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * @fileoverview
	 * Port of jQuery.extend that actually works on node.js
	 */
var i=e(5);r.version="1.0.8",n.exports=r},function(n){/**!
	 * is
	 * the definitive JavaScript type testing library
	 *
	 * @copyright 2013-2014 Enrico Marino / Jordan Harband
	 * @license MIT
	 */
var t=Object.prototype,e=t.hasOwnProperty,r=t.toString,i=function(n){return n!==n},o={"boolean":1,number:1,string:1,undefined:1},u=/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/,a=/^[A-Fa-f0-9]+$/,c=n.exports={};c.a=c.type=function(n,t){return typeof n===t},c.defined=function(n){return"undefined"!=typeof n},c.empty=function(n){var t,i=r.call(n);if("[object Array]"===i||"[object Arguments]"===i||"[object String]"===i)return 0===n.length;if("[object Object]"===i){for(t in n)if(e.call(n,t))return!1;return!0}return!1},c.equal=function(n,t){var e=n===t;if(e)return!0;var i,o=r.call(n);if(o!==r.call(t))return!1;if("[object Object]"===o){for(i in n)if(!(c.equal(n[i],t[i])&&i in t))return!1;for(i in t)if(!(c.equal(n[i],t[i])&&i in n))return!1;return!0}if("[object Array]"===o){if(i=n.length,i!==t.length)return!1;for(;--i;)if(!c.equal(n[i],t[i]))return!1;return!0}return"[object Function]"===o?n.prototype===t.prototype:"[object Date]"===o?n.getTime()===t.getTime():e},c.hosted=function(n,t){var e=typeof t[n];return"object"===e?!!t[n]:!o[e]},c.instance=c["instanceof"]=function(n,t){return n instanceof t},c.nil=c["null"]=function(n){return null===n},c.undef=c.undefined=function(n){return"undefined"==typeof n},c.args=c.arguments=function(n){var t="[object Arguments]"===r.call(n),e=!c.array(n)&&c.arraylike(n)&&c.object(n)&&c.fn(n.callee);return t||e},c.array=function(n){return"[object Array]"===r.call(n)},c.args.empty=function(n){return c.args(n)&&0===n.length},c.array.empty=function(n){return c.array(n)&&0===n.length},c.arraylike=function(n){return!!n&&!c["boolean"](n)&&e.call(n,"length")&&isFinite(n.length)&&c.number(n.length)&&n.length>=0},c["boolean"]=function(n){return"[object Boolean]"===r.call(n)},c["false"]=function(n){return c["boolean"](n)&&Boolean(Number(n))===!1},c["true"]=function(n){return c["boolean"](n)&&Boolean(Number(n))===!0},c.date=function(n){return"[object Date]"===r.call(n)},c.element=function(n){return void 0!==n&&"undefined"!=typeof HTMLElement&&n instanceof HTMLElement&&1===n.nodeType},c.error=function(n){return"[object Error]"===r.call(n)},c.fn=c["function"]=function(n){var t="undefined"!=typeof window&&n===window.alert;return t||"[object Function]"===r.call(n)},c.number=function(n){return"[object Number]"===r.call(n)},c.infinite=function(n){return 1/0===n||n===-1/0},c.decimal=function(n){return c.number(n)&&!i(n)&&!c.infinite(n)&&n%1!==0},c.divisibleBy=function(n,t){var e=c.infinite(n),r=c.infinite(t),o=c.number(n)&&!i(n)&&c.number(t)&&!i(t)&&0!==t;return e||r||o&&n%t===0},c["int"]=function(n){return c.number(n)&&!i(n)&&n%1===0},c.maximum=function(n,t){if(i(n))throw new TypeError("NaN is not a valid value");if(!c.arraylike(t))throw new TypeError("second argument must be array-like");for(var e=t.length;--e>=0;)if(n<t[e])return!1;return!0},c.minimum=function(n,t){if(i(n))throw new TypeError("NaN is not a valid value");if(!c.arraylike(t))throw new TypeError("second argument must be array-like");for(var e=t.length;--e>=0;)if(n>t[e])return!1;return!0},c.nan=function(n){return!c.number(n)||n!==n},c.even=function(n){return c.infinite(n)||c.number(n)&&n===n&&n%2===0},c.odd=function(n){return c.infinite(n)||c.number(n)&&n===n&&n%2!==0},c.ge=function(n,t){if(i(n)||i(t))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(t)&&n>=t},c.gt=function(n,t){if(i(n)||i(t))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(t)&&n>t},c.le=function(n,t){if(i(n)||i(t))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(t)&&t>=n},c.lt=function(n,t){if(i(n)||i(t))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(t)&&t>n},c.within=function(n,t,e){if(i(n)||i(t)||i(e))throw new TypeError("NaN is not a valid value");if(!c.number(n)||!c.number(t)||!c.number(e))throw new TypeError("all arguments must be numbers");var r=c.infinite(n)||c.infinite(t)||c.infinite(e);return r||n>=t&&e>=n},c.object=function(n){return"[object Object]"===r.call(n)},c.hash=function(n){return c.object(n)&&n.constructor===Object&&!n.nodeType&&!n.setInterval},c.regexp=function(n){return"[object RegExp]"===r.call(n)},c.string=function(n){return"[object String]"===r.call(n)},c.base64=function(n){return c.string(n)&&(!n.length||u.test(n))},c.hex=function(n){return c.string(n)&&(!n.length||a.test(n))}}]);
