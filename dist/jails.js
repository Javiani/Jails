!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("jails",[],t):"object"==typeof exports?exports.jails=t():e.jails=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=n(2);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u="undefined"!=typeof document?document:{},c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"soda-";s(this,e),this._prefix=t}return o(e,[{key:"setDocument",value:function(e){u=e}},{key:"run",value:function(e,t){var n=this,r=u.createElement("div");u.documentMode<9&&(r.style.display="none",u.body.appendChild(r)),r.innerHTML=e,(0,a.nodes2Arr)(r.childNodes).map((function(e){n.compileNode(e,t)}));var o=r.innerHTML;return u.documentMode<9&&u.body.removeChild(r),o}},{key:"prefix",value:function(e){this._prefix=e}},{key:"_getPrefixReg",value:function(){return new RegExp("^"+this._prefix)}},{key:"_getPrefixedDirectiveMap",value:function(){var t=this,n={};return e.sodaDirectives.map((function(e){var r=t._prefix+e.name;n[r]=e})),n}},{key:"_removeSodaMark",value:function(e,t){e.removeAttribute(t)}},{key:"compileNode",value:function(t,n){var o=this,s=this._getPrefixReg(),c=e.sodaDirectives,l=this._getPrefixedDirectiveMap();!function e(t,n){t.nodeType===(t.TEXT_NODE||3)&&(t.nodeValue=t.nodeValue.replace(i.VALUE_OUT_REG,(function(e,t){var i=o.parseSodaExpression(t,n);return"object"===(void 0===i?"undefined":r(i))&&(i=JSON.stringify(i,null,2)),i}))),t.attributes&&t.attributes.length&&(c.map((function(e){var r=e.name,i=e.opt,s=o._prefix+r;if((0,a.exist)(t.getAttribute(s))){var c=t.getAttribute(s);i.link.bind(o)({expression:c,scope:n,el:t,parseSodaExpression:o.parseSodaExpression.bind(o),getValue:o.getValue.bind(o),compileNode:o.compileNode.bind(o),document:u}),o._removeSodaMark(t,s)}})),(0,a.nodes2Arr)(t.attributes).filter((function(e){return!l[e.name]})).map((function(e){if(s.test(e.name)){var r=e.name.replace(s,"");if(r&&(0,a.exist)(e.value)){var i=o.parseComplexExpression(e.value,n);!1!==i&&(0,a.exist)(i)&&t.setAttribute(r,i),o._removeSodaMark(t,e.name)}}else(0,a.exist)(e.value)&&(e.value=o.parseComplexExpression(e.value,n))}))),(0,a.nodes2Arr)(t.childNodes).map((function(t){e(t,n)}))}(t,n)}},{key:"getEvalFunc",value:function(t){return new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+t+"}")(this.getValue,e.sodaFilterMap)}},{key:"getValue",value:function(e,t){return i.CONST_REGG.lastIndex=0,t.replace(i.CONST_REGG,(function(t){return void 0===e[t]?t:e[t]})),"true"===t||"false"!==t&&function t(n,r){var o=r.indexOf(".");if(o>-1){var a=r.substr(0,o);return r=r.substr(o+1),void 0!==e[a]&&i.CONST_REG.test(a)&&(a=e[a]),void 0!==n[a]&&null!==n[a]?t(n[a],r):""}return r=r.trim(),void 0!==e[r]&&i.CONST_REG.test(r)&&(r=e[r]),void 0!==n[r]?n[r]:""}(e,t)}},{key:"parseComplexExpression",value:function(e,t){var n=this,r=i.ONLY_VALUE_OUT_REG.exec(e);if(r){var o=r[1];return this.parseSodaExpression(o,t)}return e.replace(i.VALUE_OUT_REG,(function(e,r){return n.parseSodaExpression(r,t)}))}},{key:"parseSodaExpression",value:function(e,t){var n=this;e=(e=e.replace(i.STRING_REG,(function(e,n,r){var o=(0,a.getRandom)();return t[o]=n||r,o}))).replace(i.OR_REG,i.OR_REPLACE).split("|");for(var r=0;r<e.length;r++)e[r]=(e[r].replace(new RegExp(i.OR_REPLACE,"g"),"||")||"").trim();for(var o=e[0]||"",s=e.slice(1);i.ATTR_REG_NG.test(o);)i.ATTR_REG.lastIndex=0,o=o.replace(i.ATTR_REG,(function(e,r){var o=(0,a.getAttrVarKey)(),i=n.parseSodaExpression(r,t);return t[o]=i,"."+o}));return o=o.replace(i.OBJECT_REG,(function(e){return"getValue(scope,'"+e.trim()+"')"})),o=this.parseFilter(s,o),this.getEvalFunc(o)(t)}},{key:"parseFilter",value:function(t,n){var r=e.sodaFilterMap;return function e(){if(o=t.shift()){for(var o,a=(o=o.split(":")).slice(1)||[],s=(o[0]||"").trim(),u=0;u<a.length;u++)i.OBJECT_REG_NG.test(a[u])&&(a[u]="getValue(scope,'"+a[u]+"')");r[s]&&(a.unshift(n),a=a.join(","),n="sodaFilterMap['"+s+"']("+a+")"),e()}}(),n}}],[{key:"filter",value:function(e,t){this.sodaFilterMap[e]=t}},{key:"getFilter",value:function(e){return this.sodaFilterMap[e]}},{key:"directive",value:function(e,t){var n=t.priority,r=void 0===n?0:n,o=void 0;for(o=0;o<this.sodaDirectives.length;o++){var i=this.sodaDirectives[o].opt.priority,a=void 0===i?0:i;if(r<a);else if(r>=a)break}this.sodaDirectives.splice(o,0,{name:e,opt:t})}},{key:"discribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{compile:!0};this.template[e]={funcOrStr:t,option:n}}},{key:"getTmpl",value:function(e,t){var n=this.template[e],r=n.funcOrStr,o=n.option,i=void 0===o?{}:o;return{template:"function"==typeof r?r.apply(null,t):r,option:i}}}]),e}();c.sodaDirectives=[],c.sodaFilterMap={},c.template={},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IDENTOR_REG=/[a-zA-Z_\$]+[\w\$]*/g,t.STRING_REG=/"([^"]*)"|'([^']*)'/g,t.NUMBER_REG=/\d+|\d*\.\d+/g,t.OBJECT_REG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,t.OBJECT_REG_NG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/,t.ATTR_REG=/\[([^\[\]]*)\]/g,t.ATTR_REG_NG=/\[([^\[\]]*)\]/,t.ATTR_REG_DOT=/\.([a-zA-Z_\$]+[\w\$]*)/g,t.NOT_ATTR_REG=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,t.OR_REG=/\|\|/g,t.OR_REPLACE="OR_OPERATOR",t.CONST_PRIFIX="_$C$_",t.CONST_REG=/^_\$C\$_/,t.CONST_REGG=/_\$C\$_[^\.]+/g,t.VALUE_OUT_REG=/\{\{([^\}]*)\}\}/g,t.ONLY_VALUE_OUT_REG=/^\{\{([^\}]*)\}\}$/},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.nodes2Arr=t.exist=t.getRandom=t.getAttrVarKey=void 0;var r=n(1),o=(t.getAttrVarKey=function(){return r.CONST_PRIFIX+~~(1e6*Math.random())},t.getRandom=function(){return"$$"+~~(1e6*Math.random())},t.exist=function(e){return null!=e&&""!==e&&void 0!==e},t.nodes2Arr=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},Object.getOwnPropertySymbols),i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)};t.assign=Object.assign||function(e,t){for(var n,r,u=s(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))i.call(n,l)&&(u[l]=n[l]);if(o){r=o(n);for(var d=0;d<r.length;d++)a.call(n,r[d])&&(u[r[d]]=n[r[d]])}}return u}},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},a=n(2);n(4),n(5),n(6),n(7),n(8),n(9),n(10);var s=new i.default,u={prefix:function(e){s.prefix(e)},filter:function(e,t){i.default.filter(e,t)},directive:function(e,t){i.default.directive(e,t)},setDocument:function(e){s.setDocument(e)},discribe:function(e,t,n){i.default.discribe(e,t,n)},Soda:i.default},c=(0,a.assign)((function(e,t){return s.run(e,t)}),u);e.exports=c},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("repeat",{priority:10,link:function(e){var t,n,r,o=this,i=e.scope,a=e.el,s=e.expression,u=e.getValue,c=(e.parseSodaExpression,e.compileNode),l=s.replace(/\s+by\s+([^\s]+)$/,(function(e,t){return t&&(r=(t||"").trim()),""})),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(l);if(d){if(d[1]&&d[2]){if(t=(d[1]||"").trim(),n=(d[2]||"").trim(),!t||!n)return}else d[3]&&d[4]&&d[5]&&(r=(d[3]||"").trim(),t=(d[4]||"").trim(),n=(d[5]||"").trim());r=r||"$index";var f=u(i,n)||[],p=function(e){var n=a.cloneNode(!0),s=Object.create(i);s[r]=e,s[t]=f[e],n.removeAttribute(o._prefix+"repeat"),a.parentNode.insertBefore(n,a),c(n,s)};if("length"in f)for(var v=0;v<f.length;v++)p(v);else for(var v in f)f.hasOwnProperty(v)&&p(v);a.parentNode.removeChild(a),a.childNodes&&a.childNodes.length&&(a.innerHTML="")}}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("if",{priority:9,link:function(e){var t=e.expression,n=e.parseSodaExpression,r=e.scope,o=e.el;n(t,r)||(o.parentNode&&o.parentNode.removeChild(o),o.innerHTML="")}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},a=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")};i.default.directive("class",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t);o&&function(e,t){e.className?e.className.match(a(t))||(e.className+=" "+t):e.className=t}(n,o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("html",{link:function(e){var t=e.expression,n=e.scope,r=e.el,o=(0,e.parseSodaExpression)(t,n);o&&(r.innerHTML=o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("replace",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=e.document,a=o(r,t);if(a){var s=i.createElement("div");if(s.innerHTML=a,n.parentNode)for(;s.childNodes[0];)n.parentNode.insertBefore(s.childNodes[0],n)}n.parentNode&&n.parentNode.removeChild(n)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("style",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t),i=function(e,t){return/opacity|z-index/.test(e)?parseFloat(t):isNaN(t)?t:t+"px"};if(o){var a=[];for(var s in o)if(o.hasOwnProperty(s)){var u=i(s,o[s]);a.push([s,u].join(":"))}var c=n.style;for(s=0;s<c.length;s++){var l=c[s];o[l]||a.push([l,c[l]].join(":"))}var d=a.join(";");n.setAttribute("style",d)}}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};i.default.directive("include",{priority:8,link:function(e){var t=e.scope,n=e.el,r=e.parseSodaExpression,o=e.expression.replace(/\{\{([^\}]*)\}\}/g,(function(e,n){return r(n,t)})),a=(o=o.split(":"))[0],s=o.slice(1),u=i.default.getTmpl(a,s),c=u.template,l=u.option;c&&((void 0===l?{}:l).compile?n.outerHTML=this.run(c,t):n.outerHTML=c)}})}])},e.exports=r()},function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var o=n(3);Object.defineProperty(t,"pandora",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(t){return function(n){return e&&"production"!==e.env.NODE_ENV&&(console.groupCollapsed(t+" / INITIAL STATE"),console.log("+ state",n.getState()),console.groupEnd(),n.subscribe((function(e,n){var r=n.action,o=n.payload,i=JSON.parse(JSON.stringify(e));console.groupCollapsed(t+" / ACTION => "+(r||"SET")),console.log("+ payload",o),console.log("+ state",i),console.groupEnd()}))),n}}}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(){v&&f&&(v=!1,f.length?p=f.concat(p):m=-1,p.length&&a())}function a(){if(!v){var e=o(i);v=!0;for(var t=p.length;t;){for(f=p,p=[];++m<t;)f&&f[m].run();m=-1,t=p.length}f=null,v=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var c,l,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var f,p=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new s(e,t)),1!==p.length||v||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.model,n=void 0===t?{}:t,r=e.actions,o=void 0===r?{}:r,i=e.middlewares,a=void 0===i?[]:i,s=e.autostart,u=void 0===s||s,c=e.callback,l=[],d=[],f=JSON.parse(JSON.stringify(n)),p="undefined"!=typeof window&&window.document&&window.document.createElement?requestAnimationFrame||setTimeout:function(e){return e()},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.autostart,r=void 0!==n&&n;e&&(e.call?(e.ref=e,d.push(e),r&&e(Object.assign({},f),{action:null,payload:null,haschanged:!0})):Object.keys(e).forEach((function(t){var n=e[t],o=function(t,n){n.action in e&&e[n.action](t,n)};o.ref=n,d.push(o),r&&o(Object.assign({},f),{action:t,payload:null,haschanged:!0})})))},m=function(e){d=d.filter((function(t){return t.ref!=e}))},_=function(e,t,n){var r=!1;if(e in o){var i=Object.assign({},f),a=o[e](i,t,h);a&&(f=Object.assign(f,a),r=!0)}if(l.shift(),!l.length){var s={action:e,payload:t,haschanged:r};d.forEach((function(e){return e(f,s)})),n(f,s)}},h={set:function(e){e(f),d.forEach((function(e){return e(f,{haschanged:!0})}))},when:function(e){return new Promise((function(t){v(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,(function e(n,r){var o=r.payload;t(Object.assign({},n,o)),m(e)})))}))},getState:function(){return Object.assign({},f)},dispatch:function(e,t){return new Promise((function(n){l.push({action:e,payload:t}),1==l.length&&p((function(){for(;l.length;)_(l[0].action,l[0].payload,n)}))}))},subscribe:v,unsubscribe:m,getActions:function(){return o},setActions:function(e){o=e}};return c&&(v((function(e,t){return t.haschanged?c(e,t):null})),u&&c(f)),a.forEach((function(e){return e(h)})),h}}])},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"publish",(function(){return A})),n.d(r,"subscribe",(function(){return O})),n.d(r,"unsubscribe",(function(){return S}));var o;var i="undefined"==typeof document?void 0:document,a=!!i&&"content"in i.createElement("template"),s=!!i&&i.createRange&&"createContextualFragment"in i.createRange();function u(e){return e=e.trim(),a?function(e){var t=i.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):s?function(e){return o||(o=i.createRange()).selectNode(i.body),o.createContextualFragment(e).childNodes[0]}(e):function(e){var t=i.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function c(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function l(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var d={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}l(e,t,"selected")},INPUT:function(e,t){l(e,t,"checked"),l(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,o=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(r=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===r){if(a.hasAttribute("selected")){o=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=o}}};function f(){}function p(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var v=function(e){return function(t,n,r){if(r||(r={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var o=n;(n=i.createElement("html")).innerHTML=o}else n=u(n);var a=r.getNodeKey||p,s=r.onBeforeNodeAdded||f,l=r.onNodeAdded||f,v=r.onBeforeElUpdated||f,m=r.onElUpdated||f,_=r.onBeforeNodeDiscarded||f,h=r.onNodeDiscarded||f,y=r.onBeforeElChildrenUpdated||f,b=!0===r.childrenOnly,g=Object.create(null),E=[];function T(e){E.push(e)}function N(e,t,n){!1!==_(e)&&(t&&t.removeChild(e),h(e),function e(t,n){if(1===t.nodeType)for(var r=t.firstChild;r;){var o=void 0;n&&(o=a(r))?T(o):(h(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function x(e){l(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=a(t);if(r){var o=g[r];o&&c(t,o)&&(t.parentNode.replaceChild(o,t),A(o,t))}x(t),t=n}}function A(t,n,r){var o=a(n);if(o&&delete g[o],!r){if(!1===v(t,n))return;if(e(t,n),m(t),!1===y(t,n))return}"TEXTAREA"!==t.nodeName?function(e,t){var n,r,o,u,l,f=t.firstChild,p=e.firstChild;e:for(;f;){for(u=f.nextSibling,n=a(f);p;){if(o=p.nextSibling,f.isSameNode&&f.isSameNode(p)){f=u,p=o;continue e}r=a(p);var v=p.nodeType,m=void 0;if(v===f.nodeType&&(1===v?(n?n!==r&&((l=g[n])?o===l?m=!1:(e.insertBefore(l,p),r?T(r):N(p,e,!0),p=l):m=!1):r&&(m=!1),(m=!1!==m&&c(p,f))&&A(p,f)):3!==v&&8!=v||(m=!0,p.nodeValue!==f.nodeValue&&(p.nodeValue=f.nodeValue))),m){f=u,p=o;continue e}r?T(r):N(p,e,!0),p=o}if(n&&(l=g[n])&&c(l,f))e.appendChild(l),A(l,f);else{var _=s(f);!1!==_&&(_&&(f=_),f.actualize&&(f=f.actualize(e.ownerDocument||i)),e.appendChild(f),x(f))}f=u,p=o}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=a(t))?T(n):N(t,e,!0),t=r}}(e,p,r);var h=d[e.nodeName];h&&h(e,t)}(t,n):d.TEXTAREA(t,n)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var r=a(n);r&&(g[r]=n),e(n),n=n.nextSibling}}(t);var O,S,w=t,R=w.nodeType,C=n.nodeType;if(!b)if(1===R)1===C?c(t,n)||(h(t),w=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(O=n.nodeName,(S=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==S?i.createElementNS(S,O):i.createElement(O)))):w=n;else if(3===R||8===R){if(C===R)return w.nodeValue!==n.nodeValue&&(w.nodeValue=n.nodeValue),w;w=n}if(w===n)h(t);else{if(n.isSameNode&&n.isSameNode(w))return;if(A(w,n,b),E)for(var j=0,M=E.length;j<M;j++){var L=g[E[j]];L&&N(L,L.parentNode,!1)}}return!b&&w!==t&&t.parentNode&&(w.actualize&&(w=w.actualize(t.ownerDocument||i)),t.parentNode.replaceChild(w,t)),w}}((function(e,t){var n,r,o,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=a.length-1;s>=0;s--)r=(n=a[s]).name,o=n.namespaceURI,i=n.value,o?(r=n.localName||r,e.getAttributeNS(o,r)!==i&&("xmlns"===n.prefix&&(r=n.name),e.setAttributeNS(o,r,i))):e.getAttribute(r)!==i&&e.setAttribute(r,i);for(var u=e.attributes,c=u.length-1;c>=0;c--)r=(n=u[c]).name,(o=n.namespaceURI)?(r=n.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r)}})),m=n(0),_=n.n(m),h=n(1);const y="CustomEvent"in window&&"function"==typeof window.CustomEvent?(e,t)=>new CustomEvent(e,t):(e,t)=>{const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,!0,t),n},b=(e,t)=>function(n){const r=this,o=n.detail||{};e.__events[t].forEach(e=>{e.handler.apply(r,[n].concat(o.args))})},g=(e,t)=>{e.__events[t]&&e.__events[t].listener&&(e.removeEventListener(t,e.__events[t].listener,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),delete e.__events[t])},E=(e,t,n)=>function(r){const o=this,i=r.detail||{};let a=r.target;for(;a&&a!==e;)a.matches(t)&&(r.delegateTarget=a,n.apply(o,[r].concat(i.args))),a=a.parentNode},T=(e,t,n)=>{e.dispatchEvent(y(t,{bubbles:!0,detail:n}))},N={},x={},A=(e,t)=>{e in N?N[e].forEach(e=>e(t)):x[e]=t},O=(e,t)=>{N[e]=N[e]||[],N[e].push(t),e in x&&N[e].forEach(t=>t(x[e]))},S=e=>{N[e.name]=(N[e.name]||[]).filter(t=>t!=e.method),x[e.name]=(x[e.name]||[]).filter(t=>t!=e.method),N[e.name].length||delete N[e.name],x[e.name].length||delete x[e.name]};var w=(e,{module:t,injection:n})=>(r,o)=>{const i=R(o,r,t,e),a=[],s=[];let u,c=new Promise(e=>u=e),l=()=>null;const d={name:r,injection:n,elm:o,msg:i,publish:A,unsubscribe:S,__initialize(e){u(e),e.destroy(e=>{a.forEach(e=>S(e)),s.forEach(e=>o.removeEventListener(":destroy",e))})},main(e){c.then(()=>e().forEach(e=>e(d)))},render(t){e.update(o,t)},expose(e){o.__instances__[r].methods=e},update(e){e.apply?l=e:l(e)},destroy(e){s.push(e),o.addEventListener(":destroy",e)},on(e,t,n){((e,t,n,r)=>{if(e.__events=e.__events||{},e.__events[t]=e.__events[t]||[],!e.__events[t].length){const n=b(e,t);e.addEventListener(t,n,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),e.__events[t].listener=n}n.call?e.__events[t].push({handler:n,callback:n}):e.__events[t].push({handler:E(e,n,r),callback:r})})(o,e,t,n)},off(e,t){((e,t,n)=>{if(n&&e.__events[t]&&e.__events[t].length){var r=e.__events[t];e.__events[t]=e.__events[t].filter((function(e){return e.callback!=n})),e.__events[t].listener=r.listener,e.__events[t].length||g(e,t)}else g(e,t)})(o,e,t)},trigger(e,t,n){t.constructor==String?T(o.querySelector(t),e,{args:n}):T(o,e,{args:t})},emit(e,t){const n=Array.prototype.slice.call(arguments);T(o,n.shift(),{args:n})},get:(e,t)=>function(){const n=Array.prototype.slice.call(arguments),r=n.shift(),i=`[data-component*=${e}]`;if(t=t?i+t:i,Array.from(o.querySelectorAll(t)).forEach(t=>{const o=t.__instances__[e];o&&r in o.methods&&o.methods[r].apply(null,n)}),o.matches(t)){const t=o.__instances__[e];t&&r in t.methods&&t.methods[r].apply(null,n)}},subscribe(e,t){a.push({name:e,method:t}),O(e,t)}};return d};const R=(e,t,n,r)=>{const o=n.view?n.view:e=>e,i=r.models[e.dataset.modelId],a=Object.assign({},n.model,i),s="development"==r.mode?[Object(h.log)(`Component ${t.charAt(0).toUpperCase()}${t.substring(1)}`)]:[],u=n.actions||{},c=Object(h.pandora)({model:a,actions:u,middlewares:s,autostart:!1,callback(t){r.update(e,o(t))}});return n.model&&Object.keys(n.model).length&&r.update(e,o(a)),c};var C=(e,t)=>(e.__instances__={},{create({name:n,module:r}){e.__instances__[n]={methods:{}};const o=w(t,r)(n,e);e.__instances__[n].base=o,e.__update__=t=>{for(let n in e.__instances__)e.__instances__[n].base.update(t)},r.module.default(o),o.__initialize(o),delete o.__initialize}});const j=e=>{(requestAnimationFrame||setTimeout)(e,1e3/60)},M=e=>{j(()=>j(e))},L=e=>t=>{t.split(/\s/).map(t=>e.classList.add(t))},$=e=>t=>{t.split(/\s/).map(t=>e.classList.remove(t))},k=e=>{for(let t in e)if(t in document.body.style)return e[t]},P=k({animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}),G=k({transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"}),V=e=>e.replace(/<template*.>/g,"").replace(/<\/template>/g,""),I=(e,t="html")=>{const n=document.createElement(t);n.innerHTML=e;const r=n.querySelectorAll("[data-component]:not([data-reactor-id])");return{templates:Array.from(r).reverse().reduce(U,{}),dom:n.innerHTML}},U=(e,t)=>{const n="xxxxxxxx".replace(/[xy]/g,e=>{const t=8*Math.random()|0;return("x"==e?t:3&t|8).toString(8)});return t.setAttribute("data-reactor-id",n),e[n]=t.outerHTML,e},D=(e,t)=>{const n=`${t}-enter`,r=`${t}-enter-active`;L(e)(`${n} ${r}`)},F=(e,t)=>{const n=`${t}-enter`,r=`${t}-enter-active`,o=`${t}-enter-to`,i=$(e),a=L(e),s=()=>{i(`${n} ${r} ${o}`),e.removeEventListener(G,s),e.removeEventListener(P,s)};e.addEventListener(G,s),e.addEventListener(P,s),M(()=>{a(o),i(n)})},H=(e,t)=>{const n=`${t}-leave`,r=`${t}-leave-active`,o=`${t}-leave-to`,i=$(e),a=L(e);let s=window.getComputedStyle(e).transitionProperty.split(",").length;const u=t=>{"transitionend"==t.type?t.target==e&&(s-=1,0==s&&(i(`${r} ${o}`),e.removeEventListener(G,u),e.parentNode&&e.parentNode.removeChild(e))):(i(`${r} ${o}`),e.removeEventListener(P,u),e.parentNode&&e.parentNode.removeChild(e))};e.addEventListener(G,u),e.addEventListener(P,u),a(`${n} ${r}`),M(()=>{i(n),a(o)})},z=(e,t)=>{const n=1==e.nodeType?Array.prototype.slice.call(e.querySelectorAll("[data-animation]")):[],r=e.dataset&&e.dataset.animation?[e].concat(n):n;return r.forEach(e=>t(e,e.dataset.animation)),r.length>0};var B=({sodajs:e,models:t})=>{let n=0;e.directive("repeat",{priority:10,link({scope:e,el:r,expression:o,getValue:i,compileNode:a}){let s,u,c;const l=o.replace(/\s+by\s+([^\s]+)$/,(e,t)=>(t&&(c=(t||"").trim()),"")),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(l);if(!d)return;if(d[1]&&d[2]){if(s=(d[1]||"").trim(),u=(d[2]||"").trim(),!s||!u)return}else d[3]&&d[4]&&d[5]&&(c=(d[3]||"").trim(),s=(d[4]||"").trim(),u=(d[5]||"").trim());c=c||"$index";const f=i(e,u)||[],p=o=>{const i=r.cloneNode(!0),u=Object.create(e);u[c]=o,u[s]=f[o],function(e){const t=e.getAttribute("data-component")?[e]:[],n=Array.prototype.slice.call(e.querySelectorAll("[data-component]"));return t.concat(n)}(i).forEach(e=>{n+=1,e.setAttribute("data-model-id",n),t[n]=u}),i.removeAttribute(`${this._prefix}repeat`),r.parentNode.insertBefore(i,r),a(i,u)};if("length"in f)for(var v=0;v<f.length;v++)p(v);else for(var v in f)f.hasOwnProperty(v)&&p(v);r.parentNode.removeChild(r),r.childNodes&&r.childNodes.length&&(r.innerHTML="")}})};var J=e=>{_.a.prefix("v-");const t=document.body,n=I(V(t.innerHTML)),{dom:r,templates:o}=n,i={},a={};B({sodajs:_.a,models:a}),t.innerHTML=_()(r,{});const s={templates:o,models:a,observe(){u()},update(e,t={}){const n=JSON.stringify(t);var r;if((!e.__cache__||e.__cache__!==n)&&e){const s=e.dataset.reactorId,u=o[s],c=(r=t,JSON.parse(JSON.stringify(r)));a[s]=Object.assign({},a[s],c),v(e,_()(u,a[s]),q(e,t,i)),e.__cache__=n}},destroy(e){for(let t in e.__events)e.removeEventListener(t,e.__events[t].listener);e.dataset.modelId&&delete a[e.dataset.modelId],T(e,":destroy"),delete e.__events,delete e.__instances__},scan(t=document.documentElement){Array.from(t.querySelectorAll("[data-component]")).reverse().forEach(t=>{const n=t.dataset.component.split(/\s/).some(t=>t in e);if(t.__instances__||!n)return;const r=t.dataset.component.split(/\s/),o=C(t,s);r.forEach(t=>{e[t]&&M(n=>o.create({name:t,module:e[t]}))})})},scanSingle(t){const n=t.dataset.component.split(/\s/).some(t=>t in e);if(t.__instances__||!n)return;const r=I(V(t.outerHTML),"div");Object.assign(o,r.templates),v(t,_()(r.dom,{}));const i=t.dataset.component.split(/\s/),a=C(t,s);i.forEach(t=>{e[t]&&a.create({name:t,module:e[t]})})}},u=()=>{const e=new MutationObserver(e=>e.forEach(c));return e.observe(document.body,{childList:!0,subtree:!0}),e},c=e=>{"childList"==e.type&&(e.addedNodes.length?l(e.addedNodes,s.scanSingle):e.removedNodes.length&&l(e.removedNodes,s.destroy,!0))},l=(e,t,n=!1)=>{Array.from(e).reduce((e,t)=>t.querySelectorAll?[t].concat(Array.from(t.querySelectorAll("[data-component]"))):[t],[]).reverse().forEach(e=>{n&&document.body.contains(e)||1===e.nodeType&&e.dataset.component&&t(e)})};return s};const q=(e,t,n)=>({getNodeKey(e){if(1===e.nodeType)return e.dataset.key||e.id||e.dataset.reactorId},onBeforeElUpdated(r){if(1===r.nodeType){if("static"in r.dataset)return!1;if(r!==e&&r.dataset.component&&r.__update__){const e=Object.assign(n,t);return r.__update__(e),Array.from(r.querySelectorAll("[data-component]")).forEach(t=>{t.dataset.component&&t.__update__&&t.__update__(e)}),!1}}},onBeforeElChildrenUpdated(r,o){if(1===r.nodeType){if("static"in r.dataset)return!1;if(r!==e&&r.dataset.component&&r.__update__){const e=Object.assign(n,t);return r.__update__(e),Array.from(r.querySelectorAll("[data-component]")).forEach(t=>{t.dataset.component&&t.__update__&&t.__update__(e)}),!1}}return!0},onNodeAdded(e){z(e,F)},onBeforeNodeAdded(e){z(e,D)},onBeforeNodeDiscarded:e=>!z(e,H)});t.default=(()=>{const e={};return{Pubsub:r,register(t,n,r){e[t]={module:n,injection:r}},start(){const t=J(e);t.scan(),t.observe()},devStart(){console.time("Jails");const t=J(e);t.mode="development",t.scan(),t.observe(),console.timeEnd("Jails")}}})()}])}));