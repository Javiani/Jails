!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("jails",[],t):"object"==typeof exports?exports.jails=t():e.jails=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=n(2);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u="undefined"!=typeof document?document:{},l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"soda-";s(this,e),this._prefix=t}return o(e,[{key:"setDocument",value:function(e){u=e}},{key:"run",value:function(e,t){var n=this,r=u.createElement("div");u.documentMode<9&&(r.style.display="none",u.body.appendChild(r)),r.innerHTML=e,(0,a.nodes2Arr)(r.childNodes).map((function(e){n.compileNode(e,t)}));var o=r.innerHTML;return u.documentMode<9&&u.body.removeChild(r),o}},{key:"prefix",value:function(e){this._prefix=e}},{key:"_getPrefixReg",value:function(){return new RegExp("^"+this._prefix)}},{key:"_getPrefixedDirectiveMap",value:function(){var t=this,n={};return e.sodaDirectives.map((function(e){var r=t._prefix+e.name;n[r]=e})),n}},{key:"_removeSodaMark",value:function(e,t){e.removeAttribute(t)}},{key:"compileNode",value:function(t,n){var o=this,s=this._getPrefixReg(),l=e.sodaDirectives,c=this._getPrefixedDirectiveMap();!function e(t,n){t.nodeType===(t.TEXT_NODE||3)&&(t.nodeValue=t.nodeValue.replace(i.VALUE_OUT_REG,(function(e,t){var i=o.parseSodaExpression(t,n);return"object"===(void 0===i?"undefined":r(i))&&(i=JSON.stringify(i,null,2)),i}))),t.attributes&&t.attributes.length&&(l.map((function(e){var r=e.name,i=e.opt,s=o._prefix+r;if((0,a.exist)(t.getAttribute(s))){var l=t.getAttribute(s);i.link.bind(o)({expression:l,scope:n,el:t,parseSodaExpression:o.parseSodaExpression.bind(o),getValue:o.getValue.bind(o),compileNode:o.compileNode.bind(o),document:u}),o._removeSodaMark(t,s)}})),(0,a.nodes2Arr)(t.attributes).filter((function(e){return!c[e.name]})).map((function(e){if(s.test(e.name)){var r=e.name.replace(s,"");if(r&&(0,a.exist)(e.value)){var i=o.parseComplexExpression(e.value,n);!1!==i&&(0,a.exist)(i)&&t.setAttribute(r,i),o._removeSodaMark(t,e.name)}}else(0,a.exist)(e.value)&&(e.value=o.parseComplexExpression(e.value,n))}))),(0,a.nodes2Arr)(t.childNodes).map((function(t){e(t,n)}))}(t,n)}},{key:"getEvalFunc",value:function(t){return new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+t+"}")(this.getValue,e.sodaFilterMap)}},{key:"getValue",value:function(e,t){return i.CONST_REGG.lastIndex=0,t.replace(i.CONST_REGG,(function(t){return void 0===e[t]?t:e[t]})),"true"===t||"false"!==t&&function t(n,r){var o=r.indexOf(".");if(o>-1){var a=r.substr(0,o);return r=r.substr(o+1),void 0!==e[a]&&i.CONST_REG.test(a)&&(a=e[a]),void 0!==n[a]&&null!==n[a]?t(n[a],r):""}return r=r.trim(),void 0!==e[r]&&i.CONST_REG.test(r)&&(r=e[r]),void 0!==n[r]?n[r]:""}(e,t)}},{key:"parseComplexExpression",value:function(e,t){var n=this,r=i.ONLY_VALUE_OUT_REG.exec(e);if(r){var o=r[1];return this.parseSodaExpression(o,t)}return e.replace(i.VALUE_OUT_REG,(function(e,r){return n.parseSodaExpression(r,t)}))}},{key:"parseSodaExpression",value:function(e,t){var n=this;e=(e=e.replace(i.STRING_REG,(function(e,n,r){var o=(0,a.getRandom)();return t[o]=n||r,o}))).replace(i.OR_REG,i.OR_REPLACE).split("|");for(var r=0;r<e.length;r++)e[r]=(e[r].replace(new RegExp(i.OR_REPLACE,"g"),"||")||"").trim();for(var o=e[0]||"",s=e.slice(1);i.ATTR_REG_NG.test(o);)i.ATTR_REG.lastIndex=0,o=o.replace(i.ATTR_REG,(function(e,r){var o=(0,a.getAttrVarKey)(),i=n.parseSodaExpression(r,t);return t[o]=i,"."+o}));return o=o.replace(i.OBJECT_REG,(function(e){return"getValue(scope,'"+e.trim()+"')"})),o=this.parseFilter(s,o),this.getEvalFunc(o)(t)}},{key:"parseFilter",value:function(t,n){var r=e.sodaFilterMap;return function e(){if(o=t.shift()){for(var o,a=(o=o.split(":")).slice(1)||[],s=(o[0]||"").trim(),u=0;u<a.length;u++)i.OBJECT_REG_NG.test(a[u])&&(a[u]="getValue(scope,'"+a[u]+"')");r[s]&&(a.unshift(n),a=a.join(","),n="sodaFilterMap['"+s+"']("+a+")"),e()}}(),n}}],[{key:"filter",value:function(e,t){this.sodaFilterMap[e]=t}},{key:"getFilter",value:function(e){return this.sodaFilterMap[e]}},{key:"directive",value:function(e,t){var n=t.priority,r=void 0===n?0:n,o=void 0;for(o=0;o<this.sodaDirectives.length;o++){var i=this.sodaDirectives[o].opt.priority,a=void 0===i?0:i;if(r<a);else if(r>=a)break}this.sodaDirectives.splice(o,0,{name:e,opt:t})}},{key:"discribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{compile:!0};this.template[e]={funcOrStr:t,option:n}}},{key:"getTmpl",value:function(e,t){var n=this.template[e],r=n.funcOrStr,o=n.option,i=void 0===o?{}:o;return{template:"function"==typeof r?r.apply(null,t):r,option:i}}}]),e}();l.sodaDirectives=[],l.sodaFilterMap={},l.template={},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IDENTOR_REG=/[a-zA-Z_\$]+[\w\$]*/g,t.STRING_REG=/"([^"]*)"|'([^']*)'/g,t.NUMBER_REG=/\d+|\d*\.\d+/g,t.OBJECT_REG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,t.OBJECT_REG_NG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/,t.ATTR_REG=/\[([^\[\]]*)\]/g,t.ATTR_REG_NG=/\[([^\[\]]*)\]/,t.ATTR_REG_DOT=/\.([a-zA-Z_\$]+[\w\$]*)/g,t.NOT_ATTR_REG=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,t.OR_REG=/\|\|/g,t.OR_REPLACE="OR_OPERATOR",t.CONST_PRIFIX="_$C$_",t.CONST_REG=/^_\$C\$_/,t.CONST_REGG=/_\$C\$_[^\.]+/g,t.VALUE_OUT_REG=/\{\{([^\}]*)\}\}/g,t.ONLY_VALUE_OUT_REG=/^\{\{([^\}]*)\}\}$/},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.nodes2Arr=t.exist=t.getRandom=t.getAttrVarKey=void 0;var r=n(1),o=(t.getAttrVarKey=function(){return r.CONST_PRIFIX+~~(1e6*Math.random())},t.getRandom=function(){return"$$"+~~(1e6*Math.random())},t.exist=function(e){return null!=e&&""!==e&&void 0!==e},t.nodes2Arr=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},Object.getOwnPropertySymbols),i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)};t.assign=Object.assign||function(e,t){for(var n,r,u=s(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))i.call(n,c)&&(u[c]=n[c]);if(o){r=o(n);for(var d=0;d<r.length;d++)a.call(n,r[d])&&(u[r[d]]=n[r[d]])}}return u}},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},a=n(2);n(4),n(5),n(6),n(7),n(8),n(9),n(10);var s=new i.default,u={prefix:function(e){s.prefix(e)},filter:function(e,t){i.default.filter(e,t)},directive:function(e,t){i.default.directive(e,t)},setDocument:function(e){s.setDocument(e)},discribe:function(e,t,n){i.default.discribe(e,t,n)},Soda:i.default},l=(0,a.assign)((function(e,t){return s.run(e,t)}),u);e.exports=l},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("repeat",{priority:10,link:function(e){var t,n,r,o=this,i=e.scope,a=e.el,s=e.expression,u=e.getValue,l=(e.parseSodaExpression,e.compileNode),c=s.replace(/\s+by\s+([^\s]+)$/,(function(e,t){return t&&(r=(t||"").trim()),""})),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(c);if(d){if(d[1]&&d[2]){if(t=(d[1]||"").trim(),n=(d[2]||"").trim(),!t||!n)return}else d[3]&&d[4]&&d[5]&&(r=(d[3]||"").trim(),t=(d[4]||"").trim(),n=(d[5]||"").trim());r=r||"$index";var f=u(i,n)||[],p=function(e){var n=a.cloneNode(!0),s=Object.create(i);s[r]=e,s[t]=f[e],n.removeAttribute(o._prefix+"repeat"),a.parentNode.insertBefore(n,a),l(n,s)};if("length"in f)for(var m=0;m<f.length;m++)p(m);else for(var m in f)f.hasOwnProperty(m)&&p(m);a.parentNode.removeChild(a),a.childNodes&&a.childNodes.length&&(a.innerHTML="")}}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("if",{priority:9,link:function(e){var t=e.expression,n=e.parseSodaExpression,r=e.scope,o=e.el;n(t,r)||(o.parentNode&&o.parentNode.removeChild(o),o.innerHTML="")}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},a=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")};i.default.directive("class",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t);o&&function(e,t){e.className?e.className.match(a(t))||(e.className+=" "+t):e.className=t}(n,o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("html",{link:function(e){var t=e.expression,n=e.scope,r=e.el,o=(0,e.parseSodaExpression)(t,n);o&&(r.innerHTML=o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("replace",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=e.document,a=o(r,t);if(a){var s=i.createElement("div");if(s.innerHTML=a,n.parentNode)for(;s.childNodes[0];)n.parentNode.insertBefore(s.childNodes[0],n)}n.parentNode&&n.parentNode.removeChild(n)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("style",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t),i=function(e,t){return/opacity|z-index/.test(e)?parseFloat(t):isNaN(t)?t:t+"px"};if(o){var a=[];for(var s in o)if(o.hasOwnProperty(s)){var u=i(s,o[s]);a.push([s,u].join(":"))}var l=n.style;for(s=0;s<l.length;s++){var c=l[s];o[c]||a.push([c,l[c]].join(":"))}var d=a.join(";");n.setAttribute("style",d)}}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};i.default.directive("include",{priority:8,link:function(e){var t=e.scope,n=e.el,r=e.parseSodaExpression,o=e.expression.replace(/\{\{([^\}]*)\}\}/g,(function(e,n){return r(n,t)})),a=(o=o.split(":"))[0],s=o.slice(1),u=i.default.getTmpl(a,s),l=u.template,c=u.option;l&&((void 0===c?{}:c).compile?n.outerHTML=this.run(l,t):n.outerHTML=l)}})}])},e.exports=r()},function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var o=n(3);Object.defineProperty(t,"pandora",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(t){return function(n){return e&&"production"!==e.env.NODE_ENV&&(console.groupCollapsed(t+" / INITIAL STATE"),console.log("+ state",n.getState()),console.groupEnd(),n.subscribe((function(e,n){var r=n.action,o=n.payload,i=JSON.parse(JSON.stringify(e));console.groupCollapsed(t+" / ACTION => "+(r||"SET")),console.log("+ payload",o),console.log("+ state",i),console.groupEnd()}))),n}}}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(){m&&f&&(m=!1,f.length?p=f.concat(p):v=-1,p.length&&a())}function a(){if(!m){var e=o(i);m=!0;for(var t=p.length;t;){for(f=p,p=[];++v<t;)f&&f[v].run();v=-1,t=p.length}f=null,m=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===r||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var l,c,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{c="function"==typeof clearTimeout?clearTimeout:r}catch(e){c=r}}();var f,p=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new s(e,t)),1!==p.length||m||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.model,n=void 0===t?{}:t,r=e.actions,o=void 0===r?{}:r,i=e.middlewares,a=void 0===i?[]:i,s=e.autostart,u=void 0===s||s,l=e.callback,c=[],d=[],f=JSON.parse(JSON.stringify(n)),p="undefined"!=typeof window&&window.document&&window.document.createElement?requestAnimationFrame||setTimeout:function(e){return e()},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.autostart,r=void 0!==n&&n;e&&(e.call?(e.ref=e,d.push(e),r&&e(Object.assign({},f),{action:null,payload:null,haschanged:!0})):Object.keys(e).forEach((function(t){var n=e[t],o=function(t,n){n.action in e&&e[n.action](t,n)};o.ref=n,d.push(o),r&&o(Object.assign({},f),{action:t,payload:null,haschanged:!0})})))},v=function(e){d=d.filter((function(t){return t.ref!=e}))},_=function(e,t,n){var r=!1;if(e in o){var i=Object.assign({},f),a=o[e](i,t,h);a&&(f=Object.assign(f,a),r=!0)}if(c.shift(),!c.length){var s={action:e,payload:t,haschanged:r};d.forEach((function(e){return e(f,s)})),n(f,s)}},h={set:function(e){e(f),d.forEach((function(e){return e(f,{haschanged:!0})}))},when:function(e){return new Promise((function(t){m(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,(function e(n,r){var o=r.payload;t(Object.assign({},n,o)),v(e)})))}))},getState:function(){return Object.assign({},f)},dispatch:function(e,t){return new Promise((function(n){c.push({action:e,payload:t}),1==c.length&&p((function(){for(;c.length;)_(c[0].action,c[0].payload,n)}))}))},subscribe:m,unsubscribe:v,getActions:function(){return o},setActions:function(e){o=e}};return l&&(m((function(e,t){return t.haschanged?l(e,t):null})),u&&l(f)),a.forEach((function(e){return e(h)})),h}}])},function(e,t,n){"use strict";n.r(t);var r;var o="undefined"==typeof document?void 0:document,i=!!o&&"content"in o.createElement("template"),a=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function s(e){return e=e.trim(),i?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):a?function(e){return r||(r=o.createRange()).selectNode(o.body),r.createContextualFragment(e).childNodes[0]}(e):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function u(e,t){var n,r,o=e.nodeName,i=t.nodeName;return o===i||(n=o.charCodeAt(0),r=i.charCodeAt(0),n<=90&&r>=97?o===i.toUpperCase():r<=90&&n>=97&&i===o.toUpperCase())}function l(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var c={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}l(e,t,"selected")},INPUT:function(e,t){l(e,t,"checked"),l(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,o=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(r=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===r){if(a.hasAttribute("selected")){o=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=o}}};function d(){}function f(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var p=function(e){return function(t,n,r){if(r||(r={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var i=n;(n=o.createElement("html")).innerHTML=i}else n=s(n);var a=r.getNodeKey||f,l=r.onBeforeNodeAdded||d,p=r.onNodeAdded||d,m=r.onBeforeElUpdated||d,v=r.onElUpdated||d,_=r.onBeforeNodeDiscarded||d,h=r.onNodeDiscarded||d,y=r.onBeforeElChildrenUpdated||d,b=!0===r.childrenOnly,g=Object.create(null),E=[];function T(e){E.push(e)}function N(e,t,n){!1!==_(e)&&(t&&t.removeChild(e),h(e),function e(t,n){if(1===t.nodeType)for(var r=t.firstChild;r;){var o=void 0;n&&(o=a(r))?T(o):(h(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function x(e){p(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=a(t);if(r){var o=g[r];o&&u(t,o)?(t.parentNode.replaceChild(o,t),A(o,t)):x(t)}else x(t);t=n}}function A(t,n,r){var i=a(n);if(i&&delete g[i],!r){if(!1===m(t,n))return;if(e(t,n),v(t),!1===y(t,n))return}"TEXTAREA"!==t.nodeName?function(e,t){var n,r,i,s,d,f=t.firstChild,p=e.firstChild;e:for(;f;){for(s=f.nextSibling,n=a(f);p;){if(i=p.nextSibling,f.isSameNode&&f.isSameNode(p)){f=s,p=i;continue e}r=a(p);var m=p.nodeType,v=void 0;if(m===f.nodeType&&(1===m?(n?n!==r&&((d=g[n])?i===d?v=!1:(e.insertBefore(d,p),r?T(r):N(p,e,!0),p=d):v=!1):r&&(v=!1),(v=!1!==v&&u(p,f))&&A(p,f)):3!==m&&8!=m||(v=!0,p.nodeValue!==f.nodeValue&&(p.nodeValue=f.nodeValue))),v){f=s,p=i;continue e}r?T(r):N(p,e,!0),p=i}if(n&&(d=g[n])&&u(d,f))e.appendChild(d),A(d,f);else{var _=l(f);!1!==_&&(_&&(f=_),f.actualize&&(f=f.actualize(e.ownerDocument||o)),e.appendChild(f),x(f))}f=s,p=i}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=a(t))?T(n):N(t,e,!0),t=r}}(e,p,r);var h=c[e.nodeName];h&&h(e,t)}(t,n):c.TEXTAREA(t,n)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var r=a(n);r&&(g[r]=n),e(n),n=n.nextSibling}}(t);var O,S,w=t,R=w.nodeType,C=n.nodeType;if(!b)if(1===R)1===C?u(t,n)||(h(t),w=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(O=n.nodeName,(S=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==S?o.createElementNS(S,O):o.createElement(O)))):w=n;else if(3===R||8===R){if(C===R)return w.nodeValue!==n.nodeValue&&(w.nodeValue=n.nodeValue),w;w=n}if(w===n)h(t);else{if(n.isSameNode&&n.isSameNode(w))return;if(A(w,n,b),E)for(var j=0,M=E.length;j<M;j++){var L=g[E[j]];L&&N(L,L.parentNode,!1)}}return!b&&w!==t&&t.parentNode&&(w.actualize&&(w=w.actualize(t.ownerDocument||o)),t.parentNode.replaceChild(w,t)),w}}((function(e,t){var n,r,o,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=a.length-1;s>=0;s--)r=(n=a[s]).name,o=n.namespaceURI,i=n.value,o?(r=n.localName||r,e.getAttributeNS(o,r)!==i&&("xmlns"===n.prefix&&(r=n.name),e.setAttributeNS(o,r,i))):e.getAttribute(r)!==i&&e.setAttribute(r,i);for(var u=e.attributes,l=u.length-1;l>=0;l--)r=(n=u[l]).name,(o=n.namespaceURI)?(r=n.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r)}})),m=n(0),v=n.n(m);const _=e=>{(requestAnimationFrame||setTimeout)(e,1e3/60)},h=e=>{_(()=>_(e))},y=e=>t=>{t.split(/\s/).map(t=>e.classList.add(t))},b=e=>t=>{t.split(/\s/).map(t=>e.classList.remove(t))},g=e=>{for(let t in e)if(t in document.body.style)return e[t]},E=g({animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}),T=g({transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"}),N=()=>"xxxxxxxx".replace(/[xy]/g,e=>{const t=8*Math.random()|0;return("x"==e?t:3&t|8).toString(8)}),x=(e,t)=>{const n=N();return t.setAttribute("data-reactor-id",n),e[n]=t.outerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,""),e},A=(e,t)=>{const n=t+"-enter",r=t+"-enter-active";y(e)(`${n} ${r}`)},O=(e,t)=>{const n=t+"-enter",r=t+"-enter-active",o=t+"-enter-to",i=b(e),a=y(e),s=()=>{i(`${n} ${r} ${o}`),e.removeEventListener(T,s),e.removeEventListener(E,s)};e.addEventListener(T,s),e.addEventListener(E,s),h(()=>{a(o),i(n)})},S=(e,t)=>{const n=t+"-leave",r=t+"-leave-active",o=t+"-leave-to",i=b(e),a=y(e);let s=window.getComputedStyle(e).transitionProperty.split(",").length;const u=t=>{"transitionend"==t.type?t.target==e&&(s-=1,s<=1&&(i(`${r} ${o}`),e.removeEventListener(T,u),e.parentNode&&e.parentNode.removeChild(e))):(i(`${r} ${o}`),e.removeEventListener(E,u),e.parentNode&&e.parentNode.removeChild(e))};e.addEventListener(T,u),e.addEventListener(E,u),a(`${n} ${r}`),h(()=>{i(n),a(o)})},w=(e,t)=>{const n=1==e.nodeType?Array.prototype.slice.call(e.querySelectorAll("[data-animation]")):[],r=e.dataset&&e.dataset.animation?[e].concat(n):n;return r.forEach(e=>t(e,e.dataset.animation)),r.length>0};var R=({sodajs:e,models:t})=>{e.directive("repeat",{priority:10,link({scope:e,el:n,expression:r,getValue:o,compileNode:i}){let a,s,u;const l=r.replace(/\s+by\s+([^\s]+)$/,(e,t)=>(t&&(u=(t||"").trim()),"")),c=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(l);if(!c)return;if(c[1]&&c[2]){if(a=(c[1]||"").trim(),s=(c[2]||"").trim(),!a||!s)return}else c[3]&&c[4]&&c[5]&&(u=(c[3]||"").trim(),a=(c[4]||"").trim(),s=(c[5]||"").trim());u=u||"$index";const d=o(e,s)||[],f=r=>{const o=n.cloneNode(!0),s=Object.create(e);s[u]=r,s[a]=d[r];(function(e){const t=e.getAttribute("data-component")?[e]:[],n=Array.prototype.slice.call(e.querySelectorAll("[data-component]"));return t.concat(n)})(o).forEach(e=>{const n=N();e.setAttribute("data-model-id",n),t[n]=s}),o.removeAttribute(this._prefix+"repeat"),n.parentNode.insertBefore(o,n),i(o,s)};if("length"in d)for(var p=0;p<d.length;p++)f(p);else for(var p in d)d.hasOwnProperty(p)&&f(p);n.parentNode.removeChild(n),n.childNodes&&n.childNodes.length&&(n.innerHTML="")}})};function C(e){const t=document.body,{templates:n,html:r}=((e,t="div")=>{const n="[data-component]:not([data-reactor-id])",r=document.createElement(t);r.innerHTML=e;const o=Array.from(r.querySelectorAll(n));return{templates:Array.from(r.querySelectorAll("template")).reduce((e,t)=>e.concat(Array.from(t.content.querySelectorAll(n))),o).reverse().reduce(x,{}),html:r.innerHTML}})(t.innerHTML,"html"),o={},i={};return v.a.prefix("v-"),R({sodajs:v.a,models:o}),{mode:"production",templates:n,models:o,SST:i,update(e,t){if(e){const o=e.dataset.reactorId,a=n[o],s=Object.assign({},e.__model__,(r=t,JSON.parse(JSON.stringify(r)))),u=v()(a,s);p(e,u,k(e,t,i)),Object.assign({},e.__model__,s)}var r},observe(){const n=j(e);return t.innerHTML=v()(r,{}),n},setNewElement(e){x(n,e)}}}const j=e=>{const t=new MutationObserver(t=>t.forEach(M(e)));return t.observe(document.body,{childList:!0,subtree:!0}),t},M=e=>t=>{"childList"===t.type&&(t.addedNodes.length?e.onAdd(L()):t.removedNodes.length&&e.onRemove(t.removedNodes))},L=()=>Array.from(document.querySelectorAll("[data-component]")).reverse(),k=(e,t,n)=>({getNodeKey:e=>1===e.nodeType&&e.dataset.key,onBeforeElUpdated:r=>P(e,t,n,r),onBeforeElChildrenUpdated:(r,o)=>P(e,t,n,r),onNodeAdded(e){w(e,O)},onBeforeNodeAdded(e){w(e,A)},onBeforeNodeDiscarded:e=>!w(e,S)}),P=(e,t,n,r)=>{if(1===r.nodeType){if("static"in r.dataset)return!1;if(r!==e&&r.dataset.component&&r.__update__){const e=Object.assign(n,t);return r.__update__(e),Array.from(r.querySelectorAll("[data-component]")).forEach(t=>{t.dataset.component&&t.__update__&&t.__update__(e)}),!1}}};var $=n(1);const G="CustomEvent"in window&&"function"==typeof window.CustomEvent?(e,t)=>new CustomEvent(e,t):(e,t)=>{const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,!0,t),n},V=(e,t)=>function(n){const r=this,o=n.detail||{};e.__events[t].forEach(e=>{e.handler.apply(r,[n].concat(o.args))})},U=(e,t)=>{e.__events[t]&&e.__events[t].listener&&(e.removeEventListener(t,e.__events[t].listener,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),delete e.__events[t])},I=(e,t,n)=>function(r){const o=this,i=r.detail||{};let a=r.target;for(;a&&(a.matches(t)&&(r.delegateTarget=a,n.apply(o,[r].concat(i.args))),a!==e);)a=a.parentNode},D=(e,t,n)=>{e.dispatchEvent(G(t,{bubbles:!0,detail:n}))},F={},B={},H=(e,t)=>{B[e]=Object.assign({},B[e],t),F[e]&&F[e].forEach(e=>e(t))},z=e=>{F[e.name]=(F[e.name]||[]).filter(t=>t!=e.method),F[e.name].length||(delete F[e.name],delete B[e.name])};function q({name:e,element:t,view:n,component:r}){const o=r.module,i=J({name:e,element:t,module:o,view:n}),a=[],s=[];let u,l=new Promise(e=>u=e),c=()=>null;const d={name:e,injection:r.dependencies,elm:t,msg:i,publish:H,unsubscribe:z,__initialize(e){u(e),e.destroy(e=>{a.forEach(e=>z(e)),s.forEach(e=>t.removeEventListener(":destroy",e))})},main(e){l.then(()=>e().forEach(e=>e(d)))},render(e){n.update(t,e)},expose(n){t.__instances__[e].methods=n},update(e){e.apply?c=e:c(e)},destroy(e){s.push(e),t.addEventListener(":destroy",e)},on(e,n,r){((e,t,n,r)=>{if(e.__events=e.__events||{},e.__events[t]=e.__events[t]||[],!e.__events[t].length){const n=V(e,t);e.addEventListener(t,n,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),e.__events[t].listener=n}n.call?e.__events[t].push({handler:n,callback:n}):e.__events[t].push({handler:I(e,n,r),callback:r})})(t,e,n,r)},off(e,n){((e,t,n)=>{if(n&&e.__events[t]&&e.__events[t].length){var r=e.__events[t];e.__events[t]=e.__events[t].filter((function(e){return e.callback!=n})),e.__events[t].listener=r.listener,e.__events[t].length||U(e,t)}else U(e,t)})(t,e,n)},trigger(e,n,r){n.constructor===String?D(t.querySelector(n),e,{args:r}):D(t,e,{args:n})},emit(e,n){const r=Array.prototype.slice.call(arguments);D(t,r.shift(),{args:r})},get:(e,n)=>function(){const r=Array.prototype.slice.call(arguments),o=r.shift(),i=`[data-component*=${e}]`;if(n=n?i+n:i,Array.from(t.querySelectorAll(n)).forEach(t=>{const n=t.__instances__[e];n&&o in n.methods&&n.methods[o].apply(null,r)}),t.matches(n)){const n=t.__instances__[e];n&&o in n.methods&&n.methods[o].apply(null,r)}},subscribe(e,t){a.push({name:e,method:t}),((e,t)=>{F[e]=F[e]||[],F[e].push(t),e in B&&t(B[e])})(e,t)}};return d}const J=({element:e,name:t,module:n,view:r})=>{const o=n.view?n.view:e=>e,i=r.models[e.dataset.modelId],a=Object.assign({},n.model,i),s=t.charAt(0).toUpperCase()+t.substring(1),u="development"===r.mode?[Object($.log)("Component "+s)]:[],l=n.actions||{},c=Object($.pandora)({model:a,actions:l,middlewares:u,autostart:!1,callback(t){r.update(e,o(t))}});return n.model&&Object.keys(n.model).length&&r.update(e,o(a)),c},Z={};t.default={register(e,t,n){Z[e]={name:e,module:t,dependencies:n}},start(){const e=X();e.mode="production",e.observe()},devStart(){console.time("jails");const e=X();e.mode="development",e.observe(),console.timeEnd("jails")}};const X=()=>{const e=C({onAdd(t){t.filter(e=>!Boolean(e.__instances__)).forEach(t=>(({element:e,view:t,modules:n})=>{e.__instances__={},e.__model__={};const r=e.dataset.component.split(/\s/);e.dataset.reactorId||t.setNewElement(e),r.forEach(r=>{if(r in n&&!e.__instances__[r]){const o=n[r];h(n=>{const i=q({name:r,element:e,view:t,component:o});e.__instances__[r]={base:i,methods:{}},e.__update__=t=>{for(let n in e.__instances__)e.__instances__[n].base.update(t)},o.module.default(i),i.__initialize(i),delete i.__initialize})}})})({element:t,view:e,modules:Z}))},onRemove(e){e.forEach(e=>{if(1===e.nodeType){Array.from(e.querySelectorAll("[data-component]")).concat(e.dataset.component?e:[]).filter(e=>!document.body.contains(e)).forEach(e=>(({element:e})=>{D(e,":destroy");for(let t in e.__events)e.removeEventListener(t,e.__events[t].listener);delete e.__events,delete e.__instances__,delete e.__model__})({element:e}))}})}});return e}}])}));