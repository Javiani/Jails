!function(){Array.from||(Array.from=function(){var n=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===n.call(t)},e=function(n){var t=+n;return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,o=function(n){var t=e(n);return Math.min(Math.max(t,0),r)};return function(n){var e=this,r=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,u=arguments.length>1?arguments[1]:void 0;if(void 0!==u){if(!t(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var c,a=o(r.length),s=t(e)?Object(new e(a)):Array(a),l=0;a>l;)c=r[l],s[l]=u?void 0===i?u(c,l):u.call(i,c,l):c,l+=1;return s.length=a,s}}()),Object.assign||(Object.assign=function(n){n=Object(n);for(var t=1,e=arguments.length;e>t;t++){var r=arguments[t];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(n){for(var t=(this.document||this.ownerDocument).querySelectorAll(n),e=t.length;--e>=0&&t.item(e)!==this;);return e>-1})}(),function(n){function t(n,e,r){return t.components[n]=e,t.components[n].options=r||{},t}function e(n){var t,e={};return t=n.previousSibling,t=t&&8==t.nodeType?t:t?t.previousSibling:null,t&&8==t.nodeType&&t.data.replace(/@([a-zA-z0-9-\/]*)(?:\((.*)\))?/g,function(n,t,r){e[t]=Function("return "+r)()}),e}function r(n){var t=n.getAttribute(p).split(/\s/);a(t,o(n))}function o(n){return function(e){var r,o;n.j=n.j||{},e in t.components&&!n.j[e]&&(o=t.components[e],n.j[e]={methods:{}},r=t.component(e,n,o.options),o(r,n,r.props),r.__initialize(r))}}function i(n){var t={data:{}};return a(n.attributes,u(t)),t}function u(n){return function(t){var e,r=t.name.split(/data\-/);try{e=t.value in window?t.value:Function("return "+t.value)()}catch(o){e=t.value}return r[1]?n.data[r.pop().replace(/-([a-z])/g,c)]=e:n[t.name]=e,n}}function c(n,t){return t.toUpperCase()}function a(n,t,e){n=e?Array.from(n).reverse():n;for(var r=0,o=n.length;o>r;r++)t(n[r],r,n)}function s(){function n(n,t){return function(e){var r=this,o=e.detail||{};n.__events[t].forEach(function(n){n.handler.apply(r,[e].concat(o.args))})}}function t(n,t){n.__events[t]&&n.__events[t].listener&&(n.removeEventListener(t,n.__events[t].listener,!1),delete n.__events[t])}function e(n,t,e){return function(r){for(var o=this,i=r.target,u=r.detail||{};i&&i!==n;)i.matches(t)&&(r.delegateTarget=i,e.apply(o,[r].concat(u.args))),i=i.parentNode}}return{on:function(t,r,o){if(t.__events=t.__events||{},t.__events[r]=t.__events[r]||[],!t.__events[r].length){var i=n(t,r);t.addEventListener(r,i,"focus"==r||"blur"==r),t.__events[r].listener=i}o.call?t.__events[r].push({handler:o,callback:o}):Object.keys(o).forEach(function(n){t.__events[r].push({handler:e(t,n,o[n]),callback:o[n]})})},off:function(n,e,r){if(r&&n.__events[e]&&n.__events[e].length){var o=n.__events[e];n.__events[e]=n.__events[e].filter(function(n){return n.callback!=r}),n.__events[e].listener=o.listener,n.__events[e].length||t(n,e)}else t(n,e)},trigger:function(n,t,e){n.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e}))}}}function l(n,t){return n={},t={},{publish:function(e,r){e in n?a(n[e],function(n){n(r)}):t[e]=r},subscribe:function(e,r){return n[e]=n[e]||[],n[e].push(r),e in t&&a(n[e],function(n){n(t[e])}),function(){n[e]=n[e].filter(function(n){return n==r})}}}}var f=l(),p="data-component",v="["+p+"]";t.events=s(),t.components={},t.publish=f.publish,t.subscribe=f.subscribe,t.start=function(n){return n=n||document.documentElement,a(n.querySelectorAll(v),r,!0),t},t.destroy=function(n,e){return n=n||document.documentElement,e=e||v,a(n.querySelectorAll(e),function(n){if(n.__events){t.events.trigger(n,":destroy");for(var e in n.__events)t.events.off(n,e);n.__events=null,n.j=null}},!0),t},t.use=function(n){return n(t),t},t.component=function(n,r,o){var u,c={},s=t.events,l=function(){};return s.on(r,":j",l),s.off(r,":j",l),u={elm:r,subscribe:f.subscribe,publish:f.publish,injection:o.injection,__initialize:function(){},expose:function(t){r.j[n].methods=t},on:function(n,t){s.on(r,n,t)},off:function(n,t){s.off(r,n,t)},trigger:function(n,t,e){t.constructor==String?s.trigger(r.querySelector(t),n,{args:e}):s.trigger(r,n,{args:t})},init:function(n){n&&n.call&&(u.__initialize=function(t){var e=n(t);if(e&&e.forEach){var r={};e.forEach(function(n){r=(n&&n.call?n(t,r):null)||r})}})},props:function(n){return c.props=c.props||i(r),n?c.props[n]:c.props},annotations:function(t){return c.annotations=c.annotations||e(r)[n]||{},t?c.annotations[t]:c.annotations},get:function(n,t){return function(){var e=Array.from(arguments),o=e.shift(),i="[data-component*="+n+"]";t=t?i+t:i,a(r.querySelectorAll(t),function(t){t.j&&t.j[n]&&o in t.j[n].methods&&t.j[n].methods[o].apply(null,e)}),r.matches(t)&&r.j&&r.j[n]&&o in r.j[n].methods&&r.j[n].methods[o].apply(null,e)}},emit:function(){var n=Array.from(arguments);s.trigger(r,n.shift(),{args:n})}}},"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:n.jails=t}(window);
