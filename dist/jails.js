!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("jails",[],t):"object"==typeof exports?exports.jails=t():e.jails=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r;!function(t){var o,i,a=(o={},i={},{publish:function(e,t){e in o?v(o[e],function(e){e(t)}):i[e]=t},subscribe:function(e,t){o[e]=o[e]||[],o[e].push(t),e in i&&v(o[e],function(t){t(i[e])})},unsubscribe:function(e){o[e.name]=(o[e.name]||[]).filter(function(t){return t!=e.method}),i[e.name]=(i[e.name]||[]).filter(function(t){return t!=e.method}),o[e.name].length||delete o[e.name],i[e.name].length||delete i[e.name]}}),u="data-component",s="["+u+"]";function c(e,t,n){return c.components[e]=t,c.components[e].options=n||{},c}function l(e){"childList"==e.type&&(e.addedNodes.length?d(e.addedNodes,f):e.removedNodes.length&&d(e.removedNodes,c.destroy))}function d(e,t){v(Array.prototype.slice.call(e).reduce(function(e,t){return t.querySelectorAll?[t].concat(Array.prototype.slice.call(t.querySelectorAll(s))):[t]},[]),function(e){e.getAttribute&&e.getAttribute(u)&&t(e)},!0)}function f(e){v(e.getAttribute(u).split(/\s/),function(e){return function(t){var n,r;e.j=e.j||{},t in c.components&&!e.j[t]&&(r=c.components[t],e.j[t]={methods:{}},function(e){m(()=>m(e))}(()=>{n=c.component(t,e,r.options),r(n,e,n.props),n.__initialize(n)}))}}(e))}function p(e,t){return t.toUpperCase()}function v(e,t,n){for(var r=0,o=(e=n?Array.prototype.slice.call(e).reverse():e).length;r<o;r++)e[r]&&t(e[r],r,e)}function m(e){(requestAnimationFrame||setTimeout)(e,1e3/60)}c.observer=null,c.events=function(){var e="CustomEvent"in window&&"function"==typeof window.CustomEvent?function(e,t){return new CustomEvent(e,t)}:function(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,!0,t),n};function t(e,t){e.__events[t]&&e.__events[t].listener&&(e.removeEventListener(t,e.__events[t].listener,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),delete e.__events[t])}function n(e,t,n){return function(r){for(var o=r.target,i=r.detail||{};o&&o!==e;)o.matches(t)&&(r.delegateTarget=o,n.apply(this,[r].concat(i.args))),o=o.parentNode}}return{on:function(e,t,r){if(e.__events=e.__events||{},e.__events[t]=e.__events[t]||[],!e.__events[t].length){var o=function(e,t){return function(n){var r=this,o=n.detail||{};e.__events[t].forEach(function(e){e.handler.apply(r,[n].concat(o.args))})}}(e,t);e.addEventListener(t,o,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),e.__events[t].listener=o}r.call?e.__events[t].push({handler:r,callback:r}):Object.keys(r).forEach(function(o){e.__events[t].push({handler:n(e,o,r[o]),callback:r[o]})})},off:function(e,n,r){if(r&&e.__events[n]&&e.__events[n].length){var o=e.__events[n];e.__events[n]=e.__events[n].filter(function(e){return e.callback!=r}),e.__events[n].listener=o.listener,e.__events[n].length||t(e,n)}else t(e,n)},trigger:function(t,n,r){t.dispatchEvent(e(n,{bubbles:!0,detail:r}))}}}(),c.components={},c.publish=a.publish,c.subscribe=a.subscribe,c.start=function(e){var t;return v((e=e||document.documentElement).querySelectorAll(s),f,!0),c.observer=c.observer||((t=new MutationObserver(function(e){e.forEach(l)})).observe(document.body,{childList:!0,subtree:!0}),t),c},c.destroy=function(e){if(e.__events){for(var t in c.events.trigger(e,":destroy"),e.__events)c.events.off(e,t);e.__events=null,e.j=null}},c.use=function(e){return e(c),c},c.extends=function(e){var t,n;return c.component=(t=e,n=c.component,function(){return t(n.apply(null,arguments))}),c},c.component=function(e,t,n){var r,o,i={},u=c.events,s=[],l=new Promise(function(e){o=e});return u.on(t,":destroy",function(){s.forEach(function(e){a.unsubscribe(e)})}),r={name:e,elm:t,publish:a.publish,injection:n.injection,jails:c,__initialize:function(e){o(e)},main:function(e){e&&e.call&&l.then(function(e){return function(t){var n=e(t);if(n&&n.forEach){var r={};n.forEach(function(e){r=(e&&e.call?e(t,r):null)||r})}}}(e))},init:function(e){r.main(e)},expose:function(n,r){t.j[e].methods=n},on:function(e,n){u.on(t,e,n)},off:function(e,n){u.off(t,e,n)},trigger:function(e,n,r){n.constructor==String?u.trigger(t.querySelector(n),e,{args:r}):u.trigger(t,e,{args:n})},props:function(e){return i.props=i.props||function(e){var t={data:{}};return v(e.attributes,(n=t,function(e){var t,r=e.name.split(/data\-/);try{t=e.value in window?e.value:new Function("return "+e.value)()}catch(n){t=e.value}return r[1]?n.data[r.pop().replace(/-([a-z])/g,p)]=t:n[e.name]=t,n})),t;var n}(t),e?i.props[e]:i.props},get:function(e,n){return function(){var r=Array.prototype.slice.call(arguments),o=r.shift(),i="[data-component*="+e+"]";n=n?i+n:i,v(t.querySelectorAll(n),function(t){t.j&&t.j[e]&&o in t.j[e].methods&&t.j[e].methods[o].apply(null,r)}),t.matches(n)&&t.j&&t.j[e]&&o in t.j[e].methods&&t.j[e].methods[o].apply(null,r)}},emit:function(e,n){var r=Array.prototype.slice.call(arguments);u.trigger(t,r.shift(),{args:r})},subscribe:function(e,t){s.push({name:e,method:t}),a.subscribe(e,t)}}},void 0===(r=function(){return c}.call(t,n,t,e))||(e.exports=r)}(window)},function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=n(2);var u="undefined"!=typeof document?document:{},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"soda-";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._prefix=t}return o(e,[{key:"setDocument",value:function(e){u=e}},{key:"run",value:function(e,t){var n=this,r=u.createElement("div");u.documentMode<9&&(r.style.display="none",u.body.appendChild(r)),r.innerHTML=e,(0,a.nodes2Arr)(r.childNodes).map(function(e){n.compileNode(e,t)});var o=r.innerHTML;return u.documentMode<9&&u.body.removeChild(r),o}},{key:"prefix",value:function(e){this._prefix=e}},{key:"_getPrefixReg",value:function(){return new RegExp("^"+this._prefix)}},{key:"_getPrefixedDirectiveMap",value:function(){var t=this,n={};return e.sodaDirectives.map(function(e){var r=t._prefix+e.name;n[r]=e}),n}},{key:"_removeSodaMark",value:function(e,t){e.removeAttribute(t)}},{key:"compileNode",value:function(t,n){var o=this,s=this._getPrefixReg(),c=e.sodaDirectives,l=this._getPrefixedDirectiveMap();!function e(t,n){t.nodeType===(t.TEXT_NODE||3)&&(t.nodeValue=t.nodeValue.replace(i.VALUE_OUT_REG,function(e,t){var i=o.parseSodaExpression(t,n);return"object"===(void 0===i?"undefined":r(i))&&(i=JSON.stringify(i,null,2)),i})),t.attributes&&t.attributes.length&&(c.map(function(e){var r=e.name,i=e.opt,s=o._prefix+r;if((0,a.exist)(t.getAttribute(s))){var c=t.getAttribute(s);i.link.bind(o)({expression:c,scope:n,el:t,parseSodaExpression:o.parseSodaExpression.bind(o),getValue:o.getValue.bind(o),compileNode:o.compileNode.bind(o),document:u}),o._removeSodaMark(t,s)}}),(0,a.nodes2Arr)(t.attributes).filter(function(e){return!l[e.name]}).map(function(e){if(s.test(e.name)){var r=e.name.replace(s,"");if(r&&(0,a.exist)(e.value)){var i=o.parseComplexExpression(e.value,n);!1!==i&&(0,a.exist)(i)&&t.setAttribute(r,i),o._removeSodaMark(t,e.name)}}else(0,a.exist)(e.value)&&(e.value=o.parseComplexExpression(e.value,n))})),(0,a.nodes2Arr)(t.childNodes).map(function(t){e(t,n)})}(t,n)}},{key:"getEvalFunc",value:function(t){return new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+t+"}")(this.getValue,e.sodaFilterMap)}},{key:"getValue",value:function(e,t){i.CONST_REGG.lastIndex=0;t.replace(i.CONST_REGG,function(t){return void 0===e[t]?t:e[t]});if("true"===t)return!0;if("false"===t)return!1;return function t(n,r){var o,a=r.indexOf(".");if(a>-1){var u=r.substr(0,a);return r=r.substr(a+1),void 0!==e[u]&&i.CONST_REG.test(u)&&(u=e[u]),void 0!==n[u]&&null!==n[u]?t(n[u],r):""}r=r.trim(),void 0!==e[r]&&i.CONST_REG.test(r)&&(r=e[r]),o=void 0!==n[r]?n[r]:"";return o}(e,t)}},{key:"parseComplexExpression",value:function(e,t){var n=this,r=i.ONLY_VALUE_OUT_REG.exec(e);if(r){var o=r[1];return this.parseSodaExpression(o,t)}return e.replace(i.VALUE_OUT_REG,function(e,r){return n.parseSodaExpression(r,t)})}},{key:"parseSodaExpression",value:function(e,t){var n=this;e=(e=e.replace(i.STRING_REG,function(e,n,r){var o=(0,a.getRandom)();return t[o]=n||r,o})).replace(i.OR_REG,i.OR_REPLACE).split("|");for(var r=0;r<e.length;r++)e[r]=(e[r].replace(new RegExp(i.OR_REPLACE,"g"),"||")||"").trim();for(var o=e[0]||"",u=e.slice(1);i.ATTR_REG_NG.test(o);)i.ATTR_REG.lastIndex=0,o=o.replace(i.ATTR_REG,function(e,r){var o=(0,a.getAttrVarKey)(),i=n.parseSodaExpression(r,t);return t[o]=i,"."+o});return o=o.replace(i.OBJECT_REG,function(e){return"getValue(scope,'"+e.trim()+"')"}),o=this.parseFilter(u,o),this.getEvalFunc(o)(t)}},{key:"parseFilter",value:function(t,n){var r=e.sodaFilterMap;return function e(){if(o=t.shift()){for(var o,a=(o=o.split(":")).slice(1)||[],u=(o[0]||"").trim(),s=0;s<a.length;s++)i.OBJECT_REG_NG.test(a[s])&&(a[s]="getValue(scope,'"+a[s]+"')");r[u]&&(a.unshift(n),a=a.join(","),n="sodaFilterMap['"+u+"']("+a+")"),e()}}(),n}}],[{key:"filter",value:function(e,t){this.sodaFilterMap[e]=t}},{key:"getFilter",value:function(e){return this.sodaFilterMap[e]}},{key:"directive",value:function(e,t){var n=t.priority,r=void 0===n?0:n,o=void 0;for(o=0;o<this.sodaDirectives.length;o++){var i=this.sodaDirectives[o].opt.priority,a=void 0===i?0:i;if(r<a);else if(r>=a)break}this.sodaDirectives.splice(o,0,{name:e,opt:t})}},{key:"discribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{compile:!0};this.template[e]={funcOrStr:t,option:n}}},{key:"getTmpl",value:function(e,t){var n=this.template[e],r=n.funcOrStr,o=n.option,i=void 0===o?{}:o;return{template:"function"==typeof r?r.apply(null,t):r,option:i}}}]),e}();s.sodaDirectives=[],s.sodaFilterMap={},s.template={},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IDENTOR_REG=/[a-zA-Z_\$]+[\w\$]*/g,t.STRING_REG=/"([^"]*)"|'([^']*)'/g,t.NUMBER_REG=/\d+|\d*\.\d+/g,t.OBJECT_REG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,t.OBJECT_REG_NG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/,t.ATTR_REG=/\[([^\[\]]*)\]/g,t.ATTR_REG_NG=/\[([^\[\]]*)\]/,t.ATTR_REG_DOT=/\.([a-zA-Z_\$]+[\w\$]*)/g,t.NOT_ATTR_REG=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,t.OR_REG=/\|\|/g,t.OR_REPLACE="OR_OPERATOR",t.CONST_PRIFIX="_$C$_",t.CONST_REG=/^_\$C\$_/,t.CONST_REGG=/_\$C\$_[^\.]+/g,t.VALUE_OUT_REG=/\{\{([^\}]*)\}\}/g,t.ONLY_VALUE_OUT_REG=/^\{\{([^\}]*)\}\}$/},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.nodes2Arr=t.exist=t.getRandom=t.getAttrVarKey=void 0;var r=n(1),o=(t.getAttrVarKey=function(){return r.CONST_PRIFIX+~~(1e6*Math.random())},t.getRandom=function(){return"$$"+~~(1e6*Math.random())},t.exist=function(e){return null!=e&&""!==e&&void 0!==e},t.nodes2Arr=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},Object.getOwnPropertySymbols),i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)};t.assign=Object.assign||function(e,t){for(var n,r,s=u(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))i.call(n,l)&&(s[l]=n[l]);if(o){r=o(n);for(var d=0;d<r.length;d++)a.call(n,r[d])&&(s[r[d]]=n[r[d]])}}return s}},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},a=n(2);n(4),n(5),n(6),n(7),n(8),n(9),n(10);var u=new i.default,s={prefix:function(e){u.prefix(e)},filter:function(e,t){i.default.filter(e,t)},directive:function(e,t){i.default.directive(e,t)},setDocument:function(e){u.setDocument(e)},discribe:function(e,t,n){i.default.discribe(e,t,n)},Soda:i.default},c=(0,a.assign)(function(e,t){return u.run(e,t)},s);e.exports=c},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("repeat",{priority:10,link:function(e){var t,n,r,o=this,i=e.scope,a=e.el,u=e.expression,s=e.getValue,c=(e.parseSodaExpression,e.compileNode),l=u.replace(/\s+by\s+([^\s]+)$/,function(e,t){return t&&(r=(t||"").trim()),""}),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(l);if(d){if(d[1]&&d[2]){if(t=(d[1]||"").trim(),n=(d[2]||"").trim(),!t||!n)return}else d[3]&&d[4]&&d[5]&&(r=(d[3]||"").trim(),t=(d[4]||"").trim(),n=(d[5]||"").trim());r=r||"$index";var f=s(i,n)||[],p=function(e){var n=a.cloneNode(!0),u=Object.create(i);u[r]=e,u[t]=f[e],n.removeAttribute(o._prefix+"repeat"),a.parentNode.insertBefore(n,a),c(n,u)};if("length"in f)for(var v=0;v<f.length;v++)p(v);else for(var v in f)f.hasOwnProperty(v)&&p(v);a.parentNode.removeChild(a),a.childNodes&&a.childNodes.length&&(a.innerHTML="")}}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("if",{priority:9,link:function(e){var t=e.expression,n=e.parseSodaExpression,r=e.scope,o=e.el;n(t,r)||(o.parentNode&&o.parentNode.removeChild(o),o.innerHTML="")}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var a=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")};i.default.directive("class",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t);o&&function(e,t){e.className?e.className.match(a(t))||(e.className+=" "+t):e.className=t}(n,o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("html",{link:function(e){var t=e.expression,n=e.scope,r=e.el,o=(0,e.parseSodaExpression)(t,n);o&&(r.innerHTML=o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("replace",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=e.document,a=o(r,t);if(a){var u=i.createElement("div");if(u.innerHTML=a,n.parentNode)for(;u.childNodes[0];)n.parentNode.insertBefore(u.childNodes[0],n)}n.parentNode&&n.parentNode.removeChild(n)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("style",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t),i=function(e,t){return/opacity|z-index/.test(e)?parseFloat(t):isNaN(t)?t:t+"px"};if(o){var a=[];for(var u in o)if(o.hasOwnProperty(u)){var s=i(u,o[u]);a.push([u,s].join(":"))}var c=n.style;for(u=0;u<c.length;u++){var l=c[u];o[l]||a.push([l,c[l]].join(":"))}var d=a.join(";");n.setAttribute("style",d)}}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};i.default.directive("include",{priority:8,link:function(e){var t=e.scope,n=e.el,r=e.parseSodaExpression,o=e.expression.replace(/\{\{([^\}]*)\}\}/g,function(e,n){return r(n,t)}),a=(o=o.split(":"))[0],u=o.slice(1),s=i.default.getTmpl(a,u),c=s.template,l=s.option;c&&((void 0===l?{}:l).compile?n.outerHTML=this.run(c,t):n.outerHTML=c)}})}])},e.exports=r()},function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(3);Object.defineProperty(t,"pandora",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(t){return function(n){return e&&"production"!==e.env.NODE_ENV&&(console.groupCollapsed(t+" / INITIAL STATE"),console.log("+ state",n.getState()),console.groupEnd(),n.subscribe(function(e,n){var r=n.action,o=n.payload,i=JSON.parse(JSON.stringify(e));console.groupCollapsed(t+" / ACTION => "+r),console.log("+ payload",o),console.log("+ state",i),console.groupEnd()})),n}}}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(){v&&f&&(v=!1,f.length?p=f.concat(p):m=-1,p.length&&a())}function a(){if(!v){var e=o(i);v=!0;for(var t=p.length;t;){for(f=p,p=[];++m<t;)f&&f[m].run();m=-1,t=p.length}f=null,v=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function u(e,t){this.fun=e,this.array=t}function s(){}var c,l,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var f,p=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new u(e,t)),1!==p.length||v||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.model,n=void 0===t?{}:t,r=e.actions,o=void 0===r?{}:r,i=e.middlewares,a=void 0===i?[]:i,u=e.autostart,s=void 0===u||u,c=e.callback,l=[],d=[],f=JSON.parse(JSON.stringify(n)),p="undefined"!=typeof window&&window.document&&window.document.createElement?requestAnimationFrame||setTimeout:function(e){return e()},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.autostart,r=void 0!==n&&n;e&&(e.call?(e.ref=e,d.push(e),r&&e(Object.assign({},f),{action:null,payload:null,haschanged:!0})):Object.keys(e).forEach(function(t){var n=e[t],o=function(t,n){n.action in e&&e[n.action](t,n)};o.ref=n,d.push(o),r&&o(Object.assign({},f),{action:t,payload:null,haschanged:!0})}))},m=function(e,t,n){var r=!1;if(e in o){var i=Object.assign({},f),a=o[e](i,t,h);a&&(f=Object.assign(f,a),r=!0)}if(l.shift(),!l.length){var u={action:e,payload:t,haschanged:r};d.forEach(function(e){return e(f,u)}),n(f,u)}},h={set:function(e){e(f),d.forEach(function(e){return e(f,{haschanged:!0})})},getState:function(){return Object.assign({},f)},dispatch:function(e,t){return new Promise(function(n){l.push({action:e,payload:t}),1==l.length&&p(function(){for(;l.length;)m(l[0].action,l[0].payload,n)})})},subscribe:v,unsubscribe:function(e){d=d.filter(function(t){return t.ref!=e})},getActions:function(){return o},setActions:function(e){o=e}};return c&&(v(function(e,t){return t.haschanged?c(e,t):null}),s&&c(f)),a.forEach(function(e){return e(h)}),h}}])},,function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n.n(o);var a="http://www.w3.org/1999/xhtml",u="undefined"==typeof document?void 0:document;function s(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function c(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var l={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}c(e,t,"selected")},INPUT:function(e,t){c(e,t,"checked"),c(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,o=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(r=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===r){if(a.hasAttribute("selected")){o=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=o}}},d=1,f=11,p=3,v=8;function m(){}function h(e){return e.id}var g=function(e){return function(t,n,o){if(o||(o={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var i=n;(n=u.createElement("html")).innerHTML=i}else c=n,!r&&u.createRange&&(r=u.createRange()).selectNode(u.body),r&&r.createContextualFragment?g=r.createContextualFragment(c):(g=u.createElement("body")).innerHTML=c,n=g.childNodes[0];var c,g,b,y=o.getNodeKey||h,_=o.onBeforeNodeAdded||m,E=o.onNodeAdded||m,A=o.onBeforeElUpdated||m,T=o.onElUpdated||m,N=o.onBeforeNodeDiscarded||m,x=o.onNodeDiscarded||m,O=o.onBeforeElChildrenUpdated||m,S=!0===o.childrenOnly,j={};function w(e){b?b.push(e):b=[e]}function R(e,t,n){!1!==N(e)&&(t&&t.removeChild(e),x(e),function e(t,n){if(t.nodeType===d)for(var r=t.firstChild;r;){var o=void 0;n&&(o=y(r))?w(o):(x(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function C(e){E(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=y(t);if(r){var o=j[r];o&&s(t,o)&&(t.parentNode.replaceChild(o,t),M(o,t))}C(t),t=n}}function M(r,o,i){var a=y(o);if(a&&delete j[a],!n.isSameNode||!n.isSameNode(t)){if(!i){if(!1===A(r,o))return;if(e(r,o),T(r),!1===O(r,o))return}"TEXTAREA"!==r.nodeName?function(e,t){var n,r,o,i,a,c=t.firstChild,f=e.firstChild;e:for(;c;){for(i=c.nextSibling,n=y(c);f;){if(o=f.nextSibling,c.isSameNode&&c.isSameNode(f)){c=i,f=o;continue e}r=y(f);var m=f.nodeType,h=void 0;if(m===c.nodeType&&(m===d?(n?n!==r&&((a=j[n])?o===a?h=!1:(e.insertBefore(a,f),r?w(r):R(f,e,!0),f=a):h=!1):r&&(h=!1),(h=!1!==h&&s(f,c))&&M(f,c)):m!==p&&m!=v||(h=!0,f.nodeValue!==c.nodeValue&&(f.nodeValue=c.nodeValue))),h){c=i,f=o;continue e}r?w(r):R(f,e,!0),f=o}if(n&&(a=j[n])&&s(a,c))e.appendChild(a),M(a,c);else{var g=_(c);!1!==g&&(g&&(c=g),c.actualize&&(c=c.actualize(e.ownerDocument||u)),e.appendChild(c),C(c))}c=i,f=o}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=y(t))?w(n):R(t,e,!0),t=r}}(e,f,r);var b=l[e.nodeName];b&&b(e,t)}(r,o):l.TEXTAREA(r,o)}}!function e(t){if(t.nodeType===d||t.nodeType===f)for(var n=t.firstChild;n;){var r=y(n);r&&(j[r]=n),e(n),n=n.nextSibling}}(t);var k,L,$=t,P=$.nodeType,G=n.nodeType;if(!S)if(P===d)G===d?s(t,n)||(x(t),$=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(k=n.nodeName,(L=n.namespaceURI)&&L!==a?u.createElementNS(L,k):u.createElement(k)))):$=n;else if(P===p||P===v){if(G===P)return $.nodeValue!==n.nodeValue&&($.nodeValue=n.nodeValue),$;$=n}if($===n)x(t);else if(M($,n,S),b)for(var V=0,U=b.length;V<U;V++){var F=j[b[V]];F&&R(F,F.parentNode,!1)}return!S&&$!==t&&t.parentNode&&($.actualize&&($=$.actualize(t.ownerDocument||u)),t.parentNode.replaceChild($,t)),$}}(function(e,t){var n,r,o,i,a,u=t.attributes;for(n=u.length-1;n>=0;--n)o=(r=u[n]).name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,e.getAttributeNS(i,o)!==a&&e.setAttributeNS(i,o,a)):e.getAttribute(o)!==a&&e.setAttribute(o,a);for(n=(u=e.attributes).length-1;n>=0;--n)!1!==(r=u[n]).specified&&(o=r.name,(i=r.namespaceURI)?(o=r.localName||o,t.hasAttributeNS(i,o)||e.removeAttributeNS(i,o)):t.hasAttribute(o)||e.removeAttribute(o))}),b=n(1),y=n.n(b);const _=(e,t)=>{const n=`${t}-enter`,r=`${t}-enter-active`;x(e)(`${n} ${r}`)},E=(e,t)=>{const n=`${t}-enter`,r=`${t}-enter-active`,o=`${t}-enter-to`,i=O(e),a=x(e),u=()=>{i(`${n} ${r} ${o}`),e.removeEventListener(w,u),e.removeEventListener(j,u)};e.addEventListener(w,u),e.addEventListener(j,u),N(()=>{a(o),i(n)})},A=(e,t)=>{const n=`${t}-leave`,r=`${t}-leave-active`,o=`${t}-leave-to`,i=O(e),a=x(e),u=t=>{i(`${r} ${o}`),e.removeEventListener(w,u),e.removeEventListener(j,u),e.parentNode&&e.parentNode.removeChild(e)};e.addEventListener(w,u),e.addEventListener(j,u),a(`${n} ${r}`),N(()=>{i(n),a(o)})};function T(e){(requestAnimationFrame||setTimeout)(e,1e3/60)}function N(e){T(()=>T(e))}const x=e=>t=>t.split(/\s/).map(t=>e.classList.add(t)),O=e=>t=>t.split(/\s/).map(t=>e.classList.remove(t)),S=e=>{for(let t in e)if(t in document.body.style)return e[t]},j=S({animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}),w=S({transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"});let R=0;const C="data-reactor-id",M={},k={},L={};y.a.prefix("v-");const $=(e,t)=>{const n=3!=e.nodeType?Array.prototype.slice.call(e.querySelectorAll("[data-animation]")):[],r=e.dataset&&e.dataset.animation?[e].concat(n):n;return r.forEach(e=>t(e,e.dataset.animation)),r.length>0};function P(e){return JSON.parse(JSON.stringify(e))}y.a.directive("repeat",{priority:10,link({scope:e,el:t,expression:n,getValue:r,compileNode:o}){let i,a,u;const s=n.replace(/\s+by\s+([^\s]+)$/,(e,t)=>(t&&(u=(t||"").trim()),"")),c=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(s);if(!c)return;if(c[1]&&c[2]){if(i=(c[1]||"").trim(),a=(c[2]||"").trim(),!i||!a)return}else c[3]&&c[4]&&c[5]&&(u=(c[3]||"").trim(),i=(c[4]||"").trim(),a=(c[5]||"").trim());u=u||"$index";const l=r(e,a)||[],d=n=>{const r=t.cloneNode(!0),a=Object.create(e);a[u]=n,a[i]=l[n],function(e){const t=e.getAttribute("data-component")?[e]:[],n=Array.prototype.slice.call(e.querySelectorAll("[data-component]"));return t.concat(n)}(r).forEach(e=>{e.setAttribute("data-initialstate",JSON.stringify(a))}),r.removeAttribute(`${this._prefix}repeat`),t.parentNode.insertBefore(r,t),o(r,a)};if("length"in l)for(var f=0;f<l.length;f++)d(f);else for(var f in l)l.hasOwnProperty(f)&&d(f);t.parentNode.removeChild(t),t.childNodes&&t.childNodes.length&&(t.innerHTML="")}});var G=n(2);n.d(t,"store",function(){return V}),G.pandora.middlewares={log:G.log};t.default=i.a.use((e=>t=>{t.register=(n,r,o)=>{t(n,t=>{const{model:n,actions:o,view:i=(e=>e)}=r,a=t.elm.getAttribute("data-initialstate"),u=a?Object.assign(n||{},JSON.parse(a)):n,s=Object.keys(u||{}).length>0;t.module=r,t.Msg=e({model:u,actions:o,autostart:s,callback:e=>{e.parent=t.reactor.SST,t.reactor(i(e))}}),r.default?r.default(t):r(t)},o)}})(G.pandora)).extends((e=>(function(e=document.body){const t=document.createElement("div");Array.prototype.slice.call(e.querySelectorAll("[data-component]")).forEach((e,t)=>e.setAttribute(C,R++)),t.innerHTML=e.innerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,"");const n=Array.prototype.slice.call(t.querySelectorAll("[data-component]"));n.filter(e=>!e.getAttribute(C)).forEach(e=>e.setAttribute(C,R++)),n.forEach(e=>{const t=+e.getAttribute(C);M[t]||(M[t]=e.outerHTML)})}(),e=>{if(e.elm==document.body)e.reactor=()=>console.warn("Reactor can`t be used on document.body");else{!function(e){if(e.getAttribute(C))return;const t=R+=1;e.setAttribute(C,t),M[t]=e.outerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,"")}(e.elm);let n=!0;const r=+e.elm.getAttribute(C),o=M[r];e.elm.instance=e,e.reactor=i=>{if(!i)return P(k);const a=Object.assign({},L[r],i);Object.assign(k,a),delete k.parent,a.parent=k;let u={hascomponent:!1,pageload:n};g(e.elm,y()(o,P(a)),t(u)),u.hascomponent&&(e.jails.observer||e.jails.start(e.elm),e.elm.getAttribute(C)||(e.elm.setAttribute(C,R++),M[R]=e.elm.outerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,""))),u.hascomponent=!1,n=!1,L[r]=a},e.reactor.SST=k}const t=t=>({getNodeKey:e=>3!=e.nodeType&&e.getAttribute("data-key")||e.id,onBeforeElChildrenUpdated(t,n){if(3!=t.nodeType){if("static"in t.dataset&&t!=e.elm)return!1;if(t.getAttribute("data-component")&&t!=e.elm){const e=t.instance;if(e){const t=e.elm.getAttribute("data-initialstate");e.Msg.set(e=>{e.parent=k,t&&Object.assign(e,JSON.parse(t))})}return!1}}},onNodeAdded(e){3!=e.nodeType&&e.getAttribute("data-component")&&!e.j&&(t.hascomponent=!0),$(e,E)},onNodeDiscarded(t){3!=t.nodeType&&t.getAttribute("data-component")&&t.j&&e.jails.destroy(t)},onBeforeNodeAdded(e){$(e,_)},onBeforeNodeDiscarded:e=>!$(e,A)});return e}))());const V=G.pandora}])});