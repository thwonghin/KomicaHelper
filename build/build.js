!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(9)},function(t,e){"use strict";function n(t,e){for(var n=t.childNodes,r=0;r<n.length;r++)n[r].addEventListener("mouseover",function(){function t(){i&&e.removeChild(i),i=null,this.removeEventListener("mouseout",t)}var n=this.outerHTML.match(/.*href="#r([0-9]*).*/);if(n&&!(n.length<2)){var r=n[1],o=document.getElementById("r"+r);if(o){var i=o.cloneNode(!0);i.id="",i.className+=" floatingReply";var s=this.getBoundingClientRect();i.setAttribute("style","left: "+Math.round(s.left+s.width)+"px; top: "+Math.round(s.top)+"px;"),e.appendChild(i),this.addEventListener("mouseout",t)}}})}e.bindReply=n},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,"#_3Maw8mdHuJ8XjVUhAyIbt8 .noDecor{text-decoration:none}#_3Maw8mdHuJ8XjVUhAyIbt8 .updateButtons{position:fixed;top:40%;right:0}#_3Maw8mdHuJ8XjVUhAyIbt8 .disabledAnchor{pointer-events:none;cursor:default;color:gray}#_3Maw8mdHuJ8XjVUhAyIbt8 .threadButtons{color:BBB;text-decoration:none;border-bottom:2px solid silver;margin-bottom:6px}#_3Maw8mdHuJ8XjVUhAyIbt8 .floatingReply{position:fixed;border:2px solid #000;box-shadow:2px 2px 2px 2px rgba(0,0,0,.9)}",""]),e.locals={komica_helper:"_3Maw8mdHuJ8XjVUhAyIbt8"}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){var r;(function(t,o,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
(function(){"use strict";function s(t){return"function"==typeof t||"object"==typeof t&&null!==t}function u(t){return"function"==typeof t}function a(t){K=t}function c(t){Q=t}function l(){return function(){t.nextTick(v)}}function f(){return function(){Y(v)}}function h(){var t=0,e=new tt(v),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function d(){var t=new MessageChannel;return t.port1.onmessage=v,function(){t.port2.postMessage(0)}}function p(){return function(){setTimeout(v,1)}}function v(){for(var t=0;G>t;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}G=0}function m(){try{var t=n(13);return Y=t.runOnLoop||t.runOnContext,f()}catch(e){return p()}}function y(t,e){var n=this,r=n._state;if(r===ut&&!t||r===at&&!e)return this;var o=new this.constructor(w),i=n._result;if(r){var s=arguments[r-1];Q(function(){B(r,o,s,i)})}else L(n,o,t,e);return o}function g(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(w);return M(n,t),n}function w(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function x(t){try{return t.then}catch(e){return ct.error=e,ct}}function A(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function j(t,e,n){Q(function(t){var r=!1,o=A(n,e,function(n){r||(r=!0,e!==n?M(t,n):O(t,n))},function(e){r||(r=!0,k(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,k(t,o))},t)}function E(t,e){e._state===ut?O(t,e._result):e._state===at?k(t,e._result):L(e,void 0,function(e){M(t,e)},function(e){k(t,e)})}function S(t,e,n){e.constructor===t.constructor&&n===ot&&constructor.resolve===it?E(t,e):n===ct?k(t,ct.error):void 0===n?O(t,e):u(n)?j(t,e,n):O(t,e)}function M(t,e){t===e?k(t,_()):s(e)?S(t,e,x(e)):O(t,e)}function T(t){t._onerror&&t._onerror(t._result),H(t)}function O(t,e){t._state===st&&(t._result=e,t._state=ut,0!==t._subscribers.length&&Q(H,t))}function k(t,e){t._state===st&&(t._state=at,t._result=e,Q(T,t))}function L(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+ut]=n,o[i+at]=r,0===i&&t._state&&Q(H,t)}function H(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?B(n,r,o,i):o(i);t._subscribers.length=0}}function I(){this.error=null}function C(t,e){try{return t(e)}catch(n){return lt.error=n,lt}}function B(t,e,n,r){var o,i,s,a,c=u(n);if(c){if(o=C(n,r),o===lt?(a=!0,i=o.error,o=null):s=!0,e===o)return void k(e,b())}else o=r,s=!0;e._state!==st||(c&&s?M(e,o):a?k(e,i):t===ut?O(e,o):t===at&&k(e,o))}function J(t,e){try{e(function(e){M(t,e)},function(e){k(t,e)})}catch(n){k(t,n)}}function N(t){return new mt(this,t).promise}function P(t){function e(t){M(o,t)}function n(t){k(o,t)}var r=this,o=new r(w);if(!z(t))return k(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,s=0;o._state===st&&i>s;s++)L(r.resolve(t[s]),void 0,e,n);return o}function R(t){var e=this,n=new e(w);return k(n,t),n}function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function X(t){this._id=pt++,this._state=void 0,this._result=void 0,this._subscribers=[],w!==t&&("function"!=typeof t&&U(),this instanceof X?J(this,t):q())}function D(t,e){this._instanceConstructor=t,this.promise=new t(w),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&O(this.promise,this._result))):k(this.promise,this._validationError())}function V(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=vt)}var F;F=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Y,K,W,z=F,G=0,Q=function(t,e){rt[G]=t,rt[G+1]=e,G+=2,2===G&&(K?K(v):W())},Z="undefined"!=typeof window?window:void 0,$=Z||{},tt=$.MutationObserver||$.WebKitMutationObserver,et="undefined"!=typeof t&&"[object process]"==={}.toString.call(t),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3);W=et?l():tt?h():nt?d():void 0===Z?m():p();var ot=y,it=g,st=void 0,ut=1,at=2,ct=new I,lt=new I,ft=N,ht=P,dt=R,pt=0,vt=X;X.all=ft,X.race=ht,X.resolve=it,X.reject=dt,X._setScheduler=a,X._setAsap=c,X._asap=Q,X.prototype={constructor:X,then:ot,"catch":function(t){return this.then(null,t)}};var mt=D;D.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},D.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===st&&t>n;n++)this._eachEntry(e[n],n)},D.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===it){var o=x(t);if(o===ot&&t._state!==st)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===vt){var i=new n(w);S(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},D.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===st&&(this._remaining--,t===at?k(r,n):this._result[e]=n),0===this._remaining&&O(r,this._result)},D.prototype._willSettleAt=function(t,e){var n=this;L(t,void 0,function(t){n._settledAt(ut,e,t)},function(t){n._settledAt(at,e,t)})};var yt=V,gt={Promise:vt,polyfill:yt};n(11).amd?(r=function(){return gt}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=gt:"undefined"!=typeof this&&(this.ES6Promise=gt),yt()}).call(this)}).call(e,n(7),function(){return this}(),n(12)(t))},function(t,e,n){var r=n(6);t.exports=function(t){var e=[],n=t||{};return function(t){e.push("<div"+r.attr("id",t,!0,!0)+'><a href="#" class="updateButtons noDecor">更新</a></div>')}.call(this,"komica_helper"in n?n.komica_helper:"undefined"!=typeof komica_helper?komica_helper:void 0),e.join("")}},function(t,e,n){"use strict";function r(t){return null!=t&&""!==t}function o(t){return(Array.isArray(t)?t.map(o):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(r).join(" ")}function i(t){return u[t]||t}function s(t){var e=String(t).replace(a,i);return e===""+t?t:e}e.merge=function c(t,e){if(1===arguments.length){for(var n=t[0],o=1;o<t.length;o++)n=c(n,t[o]);return n}var i=t["class"],s=e["class"];(i||s)&&(i=i||[],s=s||[],Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]),t["class"]=i.concat(s).filter(r));for(var u in e)"class"!=u&&(t[u]=e[u]);return t},e.joinClasses=o,e.cls=function(t,n){for(var r=[],i=0;i<t.length;i++)n&&n[i]?r.push(e.escape(o([t[i]]))):r.push(o(t[i]));var s=o(r);return s.length?' class="'+s+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,r,o){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(o?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var r=[],i=Object.keys(t);if(i.length)for(var s=0;s<i.length;++s){var u=i[s],a=t[u];"class"==u?(a=o(a))&&r.push(" "+u+'="'+a+'"'):r.push(e.attr(u,a,!1,n))}return r.join("")};var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},a=/[&<>"]/g;e.escape=s,e.rethrow=function l(t,e,r,o){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||o))throw t.message+=" on line "+r,t;try{o=o||n(14).readFileSync(e,"utf8")}catch(i){l(t,null,r)}var s=3,u=o.split("\n"),a=Math.max(r-s,0),c=Math.min(u.length,r+s),s=u.slice(a,c).map(function(t,e){var n=e+a+1;return(n==r?"  > ":"    ")+n+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+r+"\n"+s+"\n\n"+t.message,t},e.DebugItem=function(t,e){this.lineno=t,this.filename=e}},function(t,e){function n(){c=!1,s.length?a=s.concat(a):l=-1,a.length&&r()}function r(){if(!c){var t=setTimeout(n);c=!0;for(var e=a.length;e;){for(s=a,a=[];++l<e;)s&&s[l].run();l=-1,e=a.length}s=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var s,u=t.exports={},a=[],c=!1,l=-1;u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new o(t,e)),1!==a.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=i,u.addListener=i,u.once=i,u.off=i,u.removeListener=i,u.removeAllListeners=i,u.emit=i,u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(4),o=function(){function t(t,e){this.method=t,this.url=e,this.xhr=new XMLHttpRequest}return t.prototype.start=function(){var t=this,e=new r.Promise(function(e,n){t.xhr.onreadystatechange=function(){var r=t.xhr.readyState;r===XMLHttpRequest.DONE&&(200===t.xhr.status||304===t.xhr.status?e(t.xhr.responseText):n())}});return this.xhr.open(this.method,this.url,!0),this.xhr.send(null),e},t}();e.Ajax=o},function(t,e,n){"use strict";function r(t,e,n){var r=document.createElement(t);r.innerHTML=e,n.appendChild(r)}var o=n(10),i=n(1),s=window.location.href,u=n(2),a=u[0][1],c=n(5)(u.locals),l=document.body;r("style",a,l),r("div",c,l);var f=document.getElementById(u.locals.komica_helper),h=f.children[0],d=o.createUpdateCallback(s,/pixmicat\.php/.test(s),document,f),p=0;h.addEventListener("click",function(t){var e=this;t.preventDefault(),/disabledAnchor/.test(this.className)?console.log("waiting"):(this.className+=" disabledAnchor",this.innerHTML="更新中..",p&&clearTimeout(p),d().then(function(t){var n=e.className.split(" ");return n.splice(n.length-1,1),e.className=n.join(" "),new Promise(function(n){t?(e.innerHTML="更新(+"+t+")",p=setTimeout(n,5e3)):n()})}).then(function(){e.innerHTML="更新"}))});for(var v=document.getElementsByClassName("resquote"),m=0;m<v.length;m++)i.bindReply(v[m],f)},function(t,e,n){"use strict";function r(t,e,n,r){function s(t){l.innerHTML=t,f=c.getElementById("threads"),h=n.getElementById("threads"),d=f.children,p=h.children}var u=new o.Ajax("get",t),a=n.implementation,c=a.createHTMLDocument("Temp"),l=n.createElement("div");c.body.appendChild(l);var f,h,d,p;return e?function(){return u.start().then(function(t){s(t);for(var e=d.length-p.length,o=p[p.length-2],u=d.length-2,a=0;u>=0&&o.id!==d[u].id;u--,a++){h.insertBefore(d[u],p[p.length-1-a]);var c=n.querySelectorAll(d[u].id+" .resquote");if(c)for(var l=0;l<c.length;l++)i.bindReply(c[l],r)}return new Promise(function(t){t(e)})},function(){return console.log("rejected")})}:function(){return u.start().then(function(t){s(t),h.innerHTML=f.innerHTML;for(var e=document.getElementsByClassName("resquote"),n=0;n<e.length;n++)i.bindReply(e[n],r);return new Promise(function(t){t(0)})},function(){return console.log("rejected")})}}var o=n(8),i=n(1);e.createUpdateCallback=r},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){},function(t,e){}]);