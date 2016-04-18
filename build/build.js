!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(11)},function(t,e,n){"use strict";var r=n(5),i=function(){function t(t,e){this.method=t,this.url=e,this.xhr=new XMLHttpRequest}return t.prototype.start=function(){var t=this,e=new r.Promise(function(e,n){t.xhr.onreadystatechange=function(){var r=t.xhr.readyState;r===XMLHttpRequest.DONE&&(200===t.xhr.status||304===t.xhr.status?e(t.xhr.responseText):n())}});return this.xhr.open(this.method,this.url,!0),this.xhr.send(null),e},t}();e.Ajax=i},function(t,e,n){"use strict";function r(t,e,n){void 0===e&&(e=document.body),t.addEventListener("mouseover",function(){var t=this,r=this.href.match(/.*#r([0-9]*).*/);if(r&&!(r.length<2)){var a=r[1],u=function(r){function i(){o&&e.removeChild(o),o=null,this.removeAttribute("hovering"),this.removeEventListener("mouseout",i)}var o;if(r){if(o=r.cloneNode(!0),o.removeAttribute("id"),/threadpost/.test(o.className)){o.className+=" reply";var s=o.children[0],a=s.children,u=a[a.length-2];"span"===u.tagName.toLowerCase()&&s.removeChild(u)}o.className+=" "+n.floatingReply;var c=t.getBoundingClientRect();o.setAttribute("style","left: "+Math.round(c.left+c.width)+"px; top: "+Math.round(c.top)+"px;"),e.appendChild(o)}t.addEventListener("mouseout",i)},c=document.getElementById("r"+a);if(!c){var l=this.href.match(/.res=([0-9]*).*/);if(!l||2!==l.length)return;var f=l[1];if(o[f]&&(c=o[f].getElementById("r"+a)));else if(!s[f]){s[f]=!0,this.setAttribute("style","cursor: wait;");var h=new i.Ajax("get",this.href);h.start().then(function(e){var n=document.implementation,r=n.createHTMLDocument("Temp"),i=document.createElement("div");i.innerHTML=e,r.body.appendChild(i),o[f]=r,delete s[f],t.removeAttribute("style"),t.getAttribute("hovering")&&u(r.getElementById("r"+a))})}}u(c),this.setAttribute("hovering","true")}})}var i=n(1),o={},s={};e.bindReply=r},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,"#_1Gvhc79juA5sb4C08tV0O6{position:fixed;top:40%;right:0}#_1Gvhc79juA5sb4C08tV0O6 .lpiHM_8w3wI9bRQ09DeVe{pointer-events:none;cursor:default;color:gray}#_1Gvhc79juA5sb4C08tV0O6 .atwt7aAFftGjIKD_qrDiT{color:BBB;text-decoration:none;border-bottom:2px solid silver;margin-bottom:6px}#_1Gvhc79juA5sb4C08tV0O6 ._1Qto2Z9EDQzTa_d6__yOY0{position:fixed;border:2px solid #000;box-shadow:2px 2px 2px 2px rgba(0,0,0,.9)}#_2lPYsYprqH86CEBTnXKsVx,#_3SkGttlcU2LH0mjfUPtSF2,#qg_D5nh_Xjf0J21kOgTfW{text-decoration:none}",""]),e.locals={komicaHelper:"_1Gvhc79juA5sb4C08tV0O6",disabledAnchor:"lpiHM_8w3wI9bRQ09DeVe",threadButtons:"atwt7aAFftGjIKD_qrDiT",floatingReply:"_1Qto2Z9EDQzTa_d6__yOY0",update:"_3SkGttlcU2LH0mjfUPtSF2",expand:"_2lPYsYprqH86CEBTnXKsVx",contract:"qg_D5nh_Xjf0J21kOgTfW"}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){var r;(function(t,i,o){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
(function(){"use strict";function s(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return"function"==typeof t}function u(t){Q=t}function c(t){z=t}function l(){return function(){t.nextTick(v)}}function f(){return function(){F(v)}}function h(){var t=0,e=new tt(v),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function d(){var t=new MessageChannel;return t.port1.onmessage=v,function(){t.port2.postMessage(0)}}function p(){return function(){setTimeout(v,1)}}function v(){for(var t=0;W>t;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}W=0}function m(){try{var t=n(15);return F=t.runOnLoop||t.runOnContext,f()}catch(e){return p()}}function y(t,e){var n=this,r=n._state;if(r===at&&!t||r===ut&&!e)return this;var i=new this.constructor(b),o=n._result;if(r){var s=arguments[r-1];z(function(){I(r,i,s,o)})}else M(n,i,t,e);return i}function g(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(b);return L(n,t),n}function b(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function x(t){try{return t.then}catch(e){return ct.error=e,ct}}function A(t,e,n,r){try{t.call(e,n,r)}catch(i){return i}}function E(t,e,n){z(function(t){var r=!1,i=A(n,e,function(n){r||(r=!0,e!==n?L(t,n):k(t,n))},function(e){r||(r=!0,H(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,H(t,i))},t)}function T(t,e){e._state===at?k(t,e._result):e._state===ut?H(t,e._result):M(e,void 0,function(e){L(t,e)},function(e){H(t,e)})}function j(t,e,n){e.constructor===t.constructor&&n===it&&constructor.resolve===ot?T(t,e):n===ct?H(t,ct.error):void 0===n?k(t,e):a(n)?E(t,e,n):k(t,e)}function L(t,e){t===e?H(t,_()):s(e)?j(t,e,x(e)):k(t,e)}function S(t){t._onerror&&t._onerror(t._result),C(t)}function k(t,e){t._state===st&&(t._result=e,t._state=at,0!==t._subscribers.length&&z(C,t))}function H(t,e){t._state===st&&(t._state=ut,t._result=e,z(S,t))}function M(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+at]=n,i[o+ut]=r,0===o&&t._state&&z(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,i,o=t._result,s=0;s<e.length;s+=3)r=e[s],i=e[s+n],r?I(n,r,i,o):i(o);t._subscribers.length=0}}function O(){this.error=null}function B(t,e){try{return t(e)}catch(n){return lt.error=n,lt}}function I(t,e,n,r){var i,o,s,u,c=a(n);if(c){if(i=B(n,r),i===lt?(u=!0,o=i.error,i=null):s=!0,e===i)return void H(e,w())}else i=r,s=!0;e._state!==st||(c&&s?L(e,i):u?H(e,o):t===at?k(e,i):t===ut&&H(e,i))}function q(t,e){try{e(function(e){L(t,e)},function(e){H(t,e)})}catch(n){H(t,n)}}function D(t){return new mt(this,t).promise}function N(t){function e(t){L(i,t)}function n(t){H(i,t)}var r=this,i=new r(b);if(!K(t))return H(i,new TypeError("You must pass an array to race.")),i;for(var o=t.length,s=0;i._state===st&&o>s;s++)M(r.resolve(t[s]),void 0,e,n);return i}function P(t){var e=this,n=new e(b);return H(n,t),n}function R(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function G(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function J(t){this._id=pt++,this._state=void 0,this._result=void 0,this._subscribers=[],b!==t&&("function"!=typeof t&&R(),this instanceof J?q(this,t):G())}function U(t,e){this._instanceConstructor=t,this.promise=new t(b),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&k(this.promise,this._result))):H(this.promise,this._validationError())}function V(){var t;if("undefined"!=typeof i)t=i;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=vt)}var Y;Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var F,Q,X,K=Y,W=0,z=function(t,e){rt[W]=t,rt[W+1]=e,W+=2,2===W&&(Q?Q(v):X())},Z="undefined"!=typeof window?window:void 0,$=Z||{},tt=$.MutationObserver||$.WebKitMutationObserver,et="undefined"!=typeof t&&"[object process]"==={}.toString.call(t),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3);X=et?l():tt?h():nt?d():void 0===Z?m():p();var it=y,ot=g,st=void 0,at=1,ut=2,ct=new O,lt=new O,ft=D,ht=N,dt=P,pt=0,vt=J;J.all=ft,J.race=ht,J.resolve=ot,J.reject=dt,J._setScheduler=u,J._setAsap=c,J._asap=z,J.prototype={constructor:J,then:it,"catch":function(t){return this.then(null,t)}};var mt=U;U.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},U.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===st&&t>n;n++)this._eachEntry(e[n],n)},U.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===ot){var i=x(t);if(i===it&&t._state!==st)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===vt){var o=new n(b);j(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},U.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===st&&(this._remaining--,t===ut?H(r,n):this._result[e]=n),0===this._remaining&&k(r,this._result)},U.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,function(t){n._settledAt(at,e,t)},function(t){n._settledAt(ut,e,t)})};var yt=V,gt={Promise:vt,polyfill:yt};n(13).amd?(r=function(){return gt}.call(e,n,e,o),!(void 0!==r&&(o.exports=r))):"undefined"!=typeof o&&o.exports?o.exports=gt:"undefined"!=typeof this&&(this.ES6Promise=gt),yt()}).call(this)}).call(e,n(8),function(){return this}(),n(14)(t))},function(t,e,n){var r=n(7);t.exports=function(t){var e=[],n=t||{};return function(t,n,i,o){e.push("<div"+r.attr("id",i,!0,!0)+'><a href="#"'+r.attr("id",o,!0,!0)+'>更新</a><br><a href="#"'+r.attr("id",n,!0,!0)+'>放大所有圖片</a><br><a href="#"'+r.attr("id",t,!0,!0)+">縮小所有圖片</a></div>")}.call(this,"contract"in n?n.contract:"undefined"!=typeof contract?contract:void 0,"expand"in n?n.expand:"undefined"!=typeof expand?expand:void 0,"komicaHelper"in n?n.komicaHelper:"undefined"!=typeof komicaHelper?komicaHelper:void 0,"update"in n?n.update:"undefined"!=typeof update?update:void 0),e.join("")}},function(t,e,n){"use strict";function r(t){return null!=t&&""!==t}function i(t){return(Array.isArray(t)?t.map(i):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(r).join(" ")}function o(t){return a[t]||t}function s(t){var e=String(t).replace(u,o);return e===""+t?t:e}e.merge=function c(t,e){if(1===arguments.length){for(var n=t[0],i=1;i<t.length;i++)n=c(n,t[i]);return n}var o=t["class"],s=e["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),t["class"]=o.concat(s).filter(r));for(var a in e)"class"!=a&&(t[a]=e[a]);return t},e.joinClasses=i,e.cls=function(t,n){for(var r=[],o=0;o<t.length;o++)n&&n[o]?r.push(e.escape(i([t[o]]))):r.push(i(t[o]));var s=i(r);return s.length?' class="'+s+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,r,i){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(i?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var r=[],o=Object.keys(t);if(o.length)for(var s=0;s<o.length;++s){var a=o[s],u=t[a];"class"==a?(u=i(u))&&r.push(" "+a+'="'+u+'"'):r.push(e.attr(a,u,!1,n))}return r.join("")};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},u=/[&<>"]/g;e.escape=s,e.rethrow=function l(t,e,r,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||i))throw t.message+=" on line "+r,t;try{i=i||n(16).readFileSync(e,"utf8")}catch(o){l(t,null,r)}var s=3,a=i.split("\n"),u=Math.max(r-s,0),c=Math.min(a.length,r+s),s=a.slice(u,c).map(function(t,e){var n=e+u+1;return(n==r?"  > ":"    ")+n+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+r+"\n"+s+"\n\n"+t.message,t},e.DebugItem=function(t,e){this.lineno=t,this.filename=e}},function(t,e){function n(){c=!1,s.length?u=s.concat(u):l=-1,u.length&&r()}function r(){if(!c){var t=setTimeout(n);c=!0;for(var e=u.length;e;){for(s=u,u=[];++l<e;)s&&s[l].run();l=-1,e=u.length}s=null,c=!1,clearTimeout(t)}}function i(t,e){this.fun=t,this.array=e}function o(){}var s,a=t.exports={},u=[],c=!1,l=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new i(t,e)),1!==u.length||c||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=o,a.addListener=o,a.once=o,a.off=o,a.removeListener=o,a.removeAllListeners=o,a.emit=o,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e){"use strict";function n(t){for(var e=0;e<r.length;e++){var n=r[e];if(n.match.test(t))return n}return r[0]}var r=[{match:/default/,quote:/^((?!page_num).)*#r[0-9]*/},{match:/http:\/\/.*\.mykomica.org.*/,quote:/.*#r[0-9]*/}];e.getConfigByURL=n},function(t,e){"use strict";function n(t){var e=document.createElement("button");e.innerHTML="放大";var n=t.parentNode;n.parentNode.insertBefore(e,n.nextSibling);var r=!1,i=t.getAttribute("style");return e.addEventListener("click",function(o){function s(){t.setAttribute("style","width: 100%;"),e.innerHTML="縮小"}function a(){r=!0,e.removeAttribute("disabled"),t.removeEventListener("load",a),s()}o.preventDefault(),"放大"===e.innerHTML?r?s():(e.innerHTML="載入中...",e.setAttribute("disabled",""),t.addEventListener("load",a),t.src=n.href):"縮小"===e.innerHTML&&(t.setAttribute("style",i),e.innerHTML="放大")}),e}e.bindImg=n},function(t,e,n){"use strict";function r(t,e,n){var r=document.createElement(t);r.innerHTML=e,n.appendChild(r)}function i(){for(var t=document.getElementsByClassName("qlink"),e=0;e<t.length;e++){var n=t[e];b.quote.test(n.href)&&s.bindReply(n,v,h)}for(var e=0;e<E.length;e++){var r=E[e];A.push(u.bindImg(r))}}var o=n(12),s=n(2),a=n(9),u=n(10),c=window.location.href,l=n(3),f=l[0][1],h=l.locals,d=n(6)(h),p=document.body;r("style",f,p),r("div",d,p);var v=document.getElementById(h.komicaHelper),m=document.getElementById(h.update),y=document.getElementById(h.expand),g=document.getElementById(h.contract),b=a.getConfigByURL(c),_=/\?res=/.test(c),w=o.createUpdateCallback(c,_,document,v,b,h),x=0,A=[],E=document.getElementsByClassName("img");m.addEventListener("click",function(t){var e=this;t.preventDefault(),/disabledAnchor/.test(this.className)?console.log("waiting"):(this.className+=" "+h.disabledAnchor,this.innerHTML="更新中..",x&&clearTimeout(x),w().then(function(t){var n=e.className.split(" ");return n.splice(n.length-1,1),e.className=n.join(" "),new Promise(function(n){t?(e.innerHTML="更新(+"+t+")",x=setTimeout(n,5e3)):n()})}).then(function(){_||i(),e.innerHTML="更新"}))}),i(),y.addEventListener("click",function(t){t.preventDefault();for(var e=0;e<E.length;e++){var n=A[e];"放大"===n.innerHTML&&n.click()}}),g.addEventListener("click",function(t){t.preventDefault();for(var e=0;e<E.length;e++){var n=A[e];"縮小"===n.innerHTML&&n.click()}})},function(t,e,n){"use strict";function r(t,e,n,r,s,a){function u(t){h.innerHTML=t,d=f.getElementById("threads"),p=n.getElementById("threads"),v=d.children,m=p.children}void 0===r&&(r=document.body);var c=new i.Ajax("get",t),l=n.implementation,f=l.createHTMLDocument("Temp"),h=n.createElement("div");f.body.appendChild(h);var d,p,v,m;return e?function(){return c.start().then(function(t){u(t);for(var e=v.length-m.length,i=m[m.length-2],c=v.length-2,l=0;c>=0&&i.id!==v[c].id;c--,l++){p.insertBefore(v[c],m[m.length-1-l]);var f=n.querySelectorAll(v[c].id+" .qlink");if(f)for(var h=0;h<f.length;h++){var d=f[h];s.quote.test(d.href)&&o.bindReply(d,r,a)}}return new Promise(function(t){t(e)})},function(){return console.log("rejected")})}:function(){return c.start().then(function(t){u(t),p.innerHTML=d.innerHTML;for(var e=document.getElementsByClassName("qlink"),n=0;n<e.length;n++){var i=e[n];s.quote.test(i.href)&&o.bindReply(i,r,a)}return new Promise(function(t){t(0)})},function(){return console.log("rejected")})}}var i=n(1),o=n(2);e.createUpdateCallback=r},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){},function(t,e){}]);