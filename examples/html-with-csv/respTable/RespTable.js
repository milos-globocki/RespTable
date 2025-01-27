/**
 * RespTable Open Source Library
 */

function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function n(){n=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new k(r||[]);return a(i,"_invoke",{value:O(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",v="executing",m="completed",y={};function g(){}function E(){}function b(){}var w={};f(w,c,(function(){return this}));var C=Object.getPrototypeOf,L=C&&C(C(_([])));L&&L!==r&&o.call(L,c)&&(w=L);var x=b.prototype=g.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(r,a,i,c){var u=d(t[r],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var r;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(a,a):a()}})}function O(e,n,r){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=S(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=d(e,n,r);if("normal"===l.type){if(o=r.done?m:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function S(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=d(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function _(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return E.prototype=b,a(x,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:E,configurable:!0}),E.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},j(A.prototype),f(A.prototype,u,(function(){return this})),e.AsyncIterator=A,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new A(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(x),f(x,l,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function r(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o={},i={};function c(t){return new Function("d","return {"+t.map((function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function u(t){var e=Object.create(null),n=[];return t.forEach((function(t){for(var r in t)r in e||n.push(e[r]=r)})),n}function l(t,e){var n=t+"",r=n.length;return r<e?new Array(e-r+1).join(0)+n:n}function f(t){var e,n=t.getUTCHours(),r=t.getUTCMinutes(),o=t.getUTCSeconds(),a=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((e=t.getUTCFullYear())<0?"-"+l(-e,6):e>9999?"+"+l(e,6):l(e,4))+"-"+l(t.getUTCMonth()+1,2)+"-"+l(t.getUTCDate(),2)+(a?"T"+l(n,2)+":"+l(r,2)+":"+l(o,2)+"."+l(a,3)+"Z":o?"T"+l(n,2)+":"+l(r,2)+":"+l(o,2)+"Z":r||n?"T"+l(n,2)+":"+l(r,2)+"Z":"")}var s=function(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function r(t,e){var r,a=[],c=t.length,u=0,l=0,f=c<=0,s=!1;function d(){if(f)return i;if(s)return s=!1,o;var e,r,a=u;if(34===t.charCodeAt(a)){for(;u++<c&&34!==t.charCodeAt(u)||34===t.charCodeAt(++u););return(e=u)>=c?f=!0:10===(r=t.charCodeAt(u++))?s=!0:13===r&&(s=!0,10===t.charCodeAt(u)&&++u),t.slice(a+1,e-1).replace(/""/g,'"')}for(;u<c;){if(10===(r=t.charCodeAt(e=u++)))s=!0;else if(13===r)s=!0,10===t.charCodeAt(u)&&++u;else if(r!==n)continue;return t.slice(a,e)}return f=!0,t.slice(a,c)}for(10===t.charCodeAt(c-1)&&--c,13===t.charCodeAt(c-1)&&--c;(r=d())!==i;){for(var h=[];r!==o&&r!==i;)h.push(r),r=d();e&&null==(h=e(h,l++))||a.push(h)}return a}function a(e,n){return e.map((function(e){return n.map((function(t){return s(e[t])})).join(t)}))}function l(e){return e.map(s).join(t)}function s(t){return null==t?"":t instanceof Date?f(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,o,a=r(t,(function(t,r){if(n)return n(t,r-1);o=t,n=e?function(t,e){var n=c(t);return function(r,o){return e(n(r),o,t)}}(t,e):c(t)}));return a.columns=o||[],a},parseRows:r,format:function(e,n){return null==n&&(n=u(e)),[n.map(s).join(t)].concat(a(e,n)).join("\n")},formatBody:function(t,e){return null==e&&(e=u(t)),a(t,e).join("\n")},formatRows:function(t){return t.map(l).join("\n")},formatRow:l,formatValue:s}}(",").parse,d={key:null,direction:"ascending"},h=function(){var t,r=(t=n().mark((function t(e){var r,o,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return r=t.sent,t.next=5,r.text();case 5:return o=t.sent,(a=s(o)).forEach((function(t){Object.keys(t).forEach((function(e){""===t[e]&&(t[e]="/")}))})),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}(),p=function(t){var e=document.createElement("table");e.classList.add("responsive-table");var n=Object.keys(t[0]),r=document.createElement("thead"),o=document.createElement("tr");n.forEach((function(n){var r=document.createElement("th");r.textContent=n,r.addEventListener("click",(function(){return m(n,t,e)})),o.appendChild(r)})),r.appendChild(o),e.appendChild(r);var a=document.createElement("tbody");return t.forEach((function(t){var e=document.createElement("tr");Object.values(t).forEach((function(t){var n=document.createElement("td");n.textContent=t,n.classList.add(isNaN(t)&&"/"!==t?"text":"numeric"),e.appendChild(n)})),a.appendChild(e)})),e.appendChild(a),e},v=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=document.getElementById("table-container");o.innerHTML="";var i=document.createElement("input");e&&(i.type="text",i.placeholder="Search...",i.classList.add("table-search"),o.appendChild(i));var c=document.createElement("div");c.id="table-content",o.appendChild(c);var u=p(t);c.appendChild(u),n&&y(),e&&i.addEventListener("input",(function(e){var o=e.target.value.toLowerCase(),i=t.filter((function(t){return Object.values(t).some((function(t){return t.toString().toLowerCase().includes(o)}))}));if(c.innerHTML="",0===i.length){var u=document.createElement("div");u.classList.add("no-results"),u.textContent="No results found.",c.appendChild(u)}else{var l=p(i);c.appendChild(l),n?y():a&&g(i,r)}}))},m=function(t,e,n){var o=n.querySelectorAll("th");o.forEach((function(t){t.classList.remove("sorted-ascending","sorted-descending")})),d.key===t?d.direction="ascending"===d.direction?"descending":"ascending":(d.key=t,d.direction="ascending");var a=r(e).sort((function(e,n){var r=e[t],o=n[t],a=parseFloat(r),i=parseFloat(o);return isNaN(a)||isNaN(i)?"ascending"===d.direction?r.localeCompare(o):o.localeCompare(r):"ascending"===d.direction?a-i:i-a})),i=n.querySelector("tbody");i.innerHTML="",a.forEach((function(t){var e=document.createElement("tr");Object.values(t).forEach((function(t){var n=document.createElement("td");n.textContent=t,e.appendChild(n)})),i.appendChild(e)})),o.forEach((function(e){e.textContent.trim()===t&&e.classList.add("ascending"===d.direction?"sorted-ascending":"sorted-descending")}))},y=function(){var t=document.querySelector("#table-container table"),e=t.querySelectorAll("th"),n=t.querySelectorAll("tbody tr");t.classList.add("stacking"),n.forEach((function(t){t.querySelectorAll("td").forEach((function(t,n){var r=e[n].textContent.trim();t.setAttribute("data-label",r)}))})),E()},g=function(t,e){if(!t||0===t.length)return null;var n,o=Object.keys(t[0]);n=e?o.map((function(e){return[e].concat(r(t.map((function(t){return t[e]}))))})):t.map((function(t){return o.map((function(e){return t[e]}))}));var a=document.createElement("table");a.classList.add("responsive-table");var i=document.createElement("thead"),c=document.createElement("tr");e?n[0].forEach((function(t){var e=document.createElement("th");e.textContent=t,c.appendChild(e)})):o.forEach((function(t){var e=document.createElement("th");e.textContent=t,c.appendChild(e)})),i.appendChild(c),a.appendChild(i);var u=document.createElement("tbody");(e?n.slice(1):t.map((function(t){return o.map((function(e){return t[e]}))}))).forEach((function(t){var e=document.createElement("tr");t.forEach((function(t){var n=document.createElement("td");n.textContent=t,e.appendChild(n)})),u.appendChild(e)})),a.appendChild(u),E()},E=function(t){var e=Array.from(document.getElementById("table-content").getElementsByClassName("responsive-table"));console.log(e)};export{g as ApplyFlipping,y as ApplyStacking,v as CreateTable,h as LoadCSV};
//# sourceMappingURL=RespTable.js.map
