function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function n(){n=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new _(r||[]);return i(a,"_invoke",{value:O(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",v="executing",m="completed",y={};function g(){}function w(){}function E(){}var b={};f(b,c,(function(){return this}));var x=Object.getPrototypeOf,C=x&&x(x(N([])));C&&C!==r&&o.call(C,c)&&(b=C);var L=E.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(r,i,a,c){var u=h(t[r],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var r;i(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}})}function O(e,n,r){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=h(e,n,r);if("normal"===l.type){if(o=r.done?m:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function T(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=E,i(L,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},j(A.prototype),f(A.prototype,u,(function(){return this})),e.AsyncIterator=A,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new A(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),f(L,l,"Generator"),f(L,c,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function r(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o={},i={};function a(t){return new Function("d","return {"+t.map((function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function c(t){var e=Object.create(null),n=[];return t.forEach((function(t){for(var r in t)r in e||n.push(e[r]=r)})),n}function u(t,e){var n=t+"",r=n.length;return r<e?new Array(e-r+1).join(0)+n:n}function l(t){var e,n=t.getUTCHours(),r=t.getUTCMinutes(),o=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((e=t.getUTCFullYear())<0?"-"+u(-e,6):e>9999?"+"+u(e,6):u(e,4))+"-"+u(t.getUTCMonth()+1,2)+"-"+u(t.getUTCDate(),2)+(i?"T"+u(n,2)+":"+u(r,2)+":"+u(o,2)+"."+u(i,3)+"Z":o?"T"+u(n,2)+":"+u(r,2)+":"+u(o,2)+"Z":r||n?"T"+u(n,2)+":"+u(r,2)+"Z":"")}var f=function(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function r(t,e){var r,a=[],c=t.length,u=0,l=0,f=c<=0,s=!1;function h(){if(f)return i;if(s)return s=!1,o;var e,r,a=u;if(34===t.charCodeAt(a)){for(;u++<c&&34!==t.charCodeAt(u)||34===t.charCodeAt(++u););return(e=u)>=c?f=!0:10===(r=t.charCodeAt(u++))?s=!0:13===r&&(s=!0,10===t.charCodeAt(u)&&++u),t.slice(a+1,e-1).replace(/""/g,'"')}for(;u<c;){if(10===(r=t.charCodeAt(e=u++)))s=!0;else if(13===r)s=!0,10===t.charCodeAt(u)&&++u;else if(r!==n)continue;return t.slice(a,e)}return f=!0,t.slice(a,c)}for(10===t.charCodeAt(c-1)&&--c,13===t.charCodeAt(c-1)&&--c;(r=h())!==i;){for(var d=[];r!==o&&r!==i;)d.push(r),r=h();e&&null==(d=e(d,l++))||a.push(d)}return a}function u(e,n){return e.map((function(e){return n.map((function(t){return s(e[t])})).join(t)}))}function f(e){return e.map(s).join(t)}function s(t){return null==t?"":t instanceof Date?l(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,o,i=r(t,(function(t,r){if(n)return n(t,r-1);o=t,n=e?function(t,e){var n=a(t);return function(r,o){return e(n(r),o,t)}}(t,e):a(t)}));return i.columns=o||[],i},parseRows:r,format:function(e,n){return null==n&&(n=c(e)),[n.map(s).join(t)].concat(u(e,n)).join("\n")},formatBody:function(t,e){return null==e&&(e=c(t)),u(t,e).join("\n")},formatRows:function(t){return t.map(f).join("\n")},formatRow:f,formatValue:s}}(",").parse,s={key:null,direction:"ascending"},h=function(){var t,r=(t=n().mark((function t(e){var r,o,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return r=t.sent,t.next=5,r.text();case 5:return o=t.sent,i=f(o),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}(),d=function(t){var e=Object.keys(t[0]),n=document.createElement("table");n.classList.add("responsive-table");var r=document.createElement("thead"),o=document.createElement("tr");e.forEach((function(e){var r=document.createElement("th");r.textContent=e,r.addEventListener("click",(function(){return p(e,t,n)})),o.appendChild(r)})),r.appendChild(o),n.appendChild(r);var i=document.createElement("tbody");t.forEach((function(t){var e=document.createElement("tr");Object.values(t).forEach((function(t){var n=document.createElement("td");n.textContent=t,isNaN(t)||""===t.trim()?n.classList.add("text"):n.classList.add("numeric"),e.appendChild(n)})),i.appendChild(e)})),n.appendChild(i),y(n)},p=function(t,e,n){var o=n.querySelector("thead").querySelectorAll("th");o.forEach((function(t){t.classList.remove("sorted-ascending","sorted-descending")})),s.key===t?s.direction="ascending"===s.direction?"descending":"ascending":(s.key=t,s.direction="ascending");var i=r(e).sort((function(e,n){var r=e[t],o=n[t];return r<o?"ascending"===s.direction?-1:1:r>o?"ascending"===s.direction?1:-1:0}));o.forEach((function(e){e.textContent.trim()===t&&("ascending"===s.direction?e.classList.add("sorted-ascending"):e.classList.add("sorted-descending"))})),d(i)},v=function(){var t=document.querySelector("#table-container table");t.classList.add("stacking"),y(t)},m=function(t,e){if(!t||0===t.length)return null;var n,o=Object.keys(t[0]);n=e?o.map((function(e){return[e].concat(r(t.map((function(t){return t[e]}))))})):t.map((function(t){return o.map((function(e){return t[e]}))}));var i=document.createElement("table");i.classList.add("responsive-table");var a=document.createElement("thead"),c=document.createElement("tr");e?n[0].forEach((function(t){var e=document.createElement("th");e.textContent=t,c.appendChild(e)})):o.forEach((function(t){var e=document.createElement("th");e.textContent=t,c.appendChild(e)})),a.appendChild(c),i.appendChild(a);var u=document.createElement("tbody");(e?n.slice(1):t.map((function(t){return o.map((function(e){return t[e]}))}))).forEach((function(t){var e=document.createElement("tr");t.forEach((function(t){var n=document.createElement("td");n.textContent=t,e.appendChild(n)})),u.appendChild(e)})),i.appendChild(u),y(i)},y=function(t){document.getElementById("table-container").innerHTML="",document.getElementById("table-container").appendChild(t)};export{m as ApplyFlipping,v as ApplyStacking,d as CreateTable,h as LoadCSV};
//# sourceMappingURL=index.esm.js.map
