!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("jails",[],n):"object"==typeof exports?exports.jails=n():e.jails=n()}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var r;!function(n){var o,i,u=(o={},i={},{publish:function(e,n){e in o?v(o[e],function(e){e(n)}):i[e]=n},subscribe:function(e,n){o[e]=o[e]||[],o[e].push(n),e in i&&v(o[e],function(n){n(i[e])})},unsubscribe:function(e){o[e.name]=(o[e.name]||[]).filter(function(n){return n!=e.method}),i[e.name]=(i[e.name]||[]).filter(function(n){return n!=e.method}),o[e.name].length||delete o[e.name],i[e.name].length||delete i[e.name]}}),c="data-component",s="["+c+"]";function a(e,n,t){return a.components[e]=n,a.components[e].options=t||{},a}function l(e){"childList"==e.type&&(e.addedNodes.length?f(e.addedNodes,p):e.removedNodes.length&&f(e.removedNodes,a.destroy))}function f(e,n){v(Array.prototype.slice.call(e).reduce(function(e,n){return n.querySelectorAll?[n].concat(Array.prototype.slice.call(n.querySelectorAll(s))):[n]},[]),function(e){e.getAttribute&&e.getAttribute(c)&&n(e)},!0)}function p(e){v(e.getAttribute(c).split(/\s/),function(e){return function(n){var t,r;e.j=e.j||{},n in a.components&&!e.j[n]&&(r=a.components[n],e.j[n]={methods:{}},function(e){m(()=>m(e))}(()=>{t=a.component(n,e,r.options),r(t,e,t.props),t.__initialize(t)}))}}(e))}function d(e,n){return n.toUpperCase()}function v(e,n,t){for(var r=0,o=(e=t?Array.prototype.slice.call(e).reverse():e).length;r<o;r++)e[r]&&n(e[r],r,e)}function m(e){(requestAnimationFrame||setTimeout)(e,1e3/60)}a.observer=null,a.events=function(){var e="CustomEvent"in window&&"function"==typeof window.CustomEvent?function(e,n){return new CustomEvent(e,n)}:function(e,n){var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!0,!0,n),t};function n(e,n){e.__events[n]&&e.__events[n].listener&&(e.removeEventListener(n,e.__events[n].listener,"focus"==n||"blur"==n||"mouseenter"==n||"mouseleave"==n),delete e.__events[n])}function t(e,n,t){return function(r){for(var o=r.target,i=r.detail||{};o&&o!==e;)o.matches(n)&&(r.delegateTarget=o,t.apply(this,[r].concat(i.args))),o=o.parentNode}}return{on:function(e,n,r){if(e.__events=e.__events||{},e.__events[n]=e.__events[n]||[],!e.__events[n].length){var o=function(e,n){return function(t){var r=this,o=t.detail||{};e.__events[n].forEach(function(e){e.handler.apply(r,[t].concat(o.args))})}}(e,n);e.addEventListener(n,o,"focus"==n||"blur"==n||"mouseenter"==n||"mouseleave"==n),e.__events[n].listener=o}r.call?e.__events[n].push({handler:r,callback:r}):Object.keys(r).forEach(function(o){e.__events[n].push({handler:t(e,o,r[o]),callback:r[o]})})},off:function(e,t,r){if(r&&e.__events[t]&&e.__events[t].length){var o=e.__events[t];e.__events[t]=e.__events[t].filter(function(e){return e.callback!=r}),e.__events[t].listener=o.listener,e.__events[t].length||n(e,t)}else n(e,t)},trigger:function(n,t,r){n.dispatchEvent(e(t,{bubbles:!0,detail:r}))}}}(),a.components={},a.publish=u.publish,a.subscribe=u.subscribe,a.start=function(e){var n;return v((e=e||document.documentElement).querySelectorAll(s),p,!0),a.observer=a.observer||((n=new MutationObserver(function(e){e.forEach(l)})).observe(document.body,{childList:!0,subtree:!0}),n),a},a.destroy=function(e){if(e.__events){for(var n in a.events.trigger(e,":destroy"),e.__events)a.events.off(e,n);e.__events=null,e.j=null}},a.use=function(e){return e(a),a},a.extends=function(e){var n,t;return a.component=(n=e,t=a.component,function(){return n(t.apply(null,arguments))}),a},a.component=function(e,n,t){var r,o,i={},c=a.events,s=[],l=new Promise(function(e){o=e});return c.on(n,":destroy",function(){s.forEach(function(e){u.unsubscribe(e)})}),r={name:e,elm:n,publish:u.publish,injection:t.injection,jails:a,__initialize:function(e){o(e)},main:function(e){e&&e.call&&l.then(function(e){return function(n){var t=e(n);if(t&&t.forEach){var r={};t.forEach(function(e){r=(e&&e.call?e(n,r):null)||r})}}}(e))},init:function(e){r.main(e)},expose:function(t,r){n.j[e].methods=t},on:function(e,t){c.on(n,e,t)},off:function(e,t){c.off(n,e,t)},trigger:function(e,t,r){t.constructor==String?c.trigger(n.querySelector(t),e,{args:r}):c.trigger(n,e,{args:t})},props:function(e){return i.props=i.props||function(e){var n={data:{}};return v(e.attributes,function(e){return function(n){var t,r=n.name.split(/data\-/);try{t=n.value in window?n.value:new Function("return "+n.value)()}catch(e){t=n.value}return r[1]?e.data[r.pop().replace(/-([a-z])/g,d)]=t:e[n.name]=t,e}}(n)),n}(n),e?i.props[e]:i.props},get:function(e,t){return function(){var r=Array.prototype.slice.call(arguments),o=r.shift(),i="[data-component*="+e+"]";t=t?i+t:i,v(n.querySelectorAll(t),function(n){n.j&&n.j[e]&&o in n.j[e].methods&&n.j[e].methods[o].apply(null,r)}),n.matches(t)&&n.j&&n.j[e]&&o in n.j[e].methods&&n.j[e].methods[o].apply(null,r)}},emit:function(e,t){var r=Array.prototype.slice.call(arguments);c.trigger(n,r.shift(),{args:r})},subscribe:function(e,n){s.push({name:e,method:n}),u.subscribe(e,n)}}},void 0===(r=function(){return a}.call(n,t,n,e))||(e.exports=r)}(window)},,,function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r);t.d(n,"default",function(){return o.a})}])});