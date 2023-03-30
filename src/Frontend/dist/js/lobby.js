"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,l=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),n=new L(n||[]);return l(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return _()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=s(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=s(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f={};function p(){}function h(){}function y(){}var e={},d=(i(e,n,function(){return this}),Object.getPrototypeOf),d=d&&d(d(x([]))),v=(d&&d!==t&&u.call(d,n)&&(e=d),y.prototype=p.prototype=Object.create(e));function m(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function g(a,c){var e;l(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=s(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:_}}function _(){return{value:void 0,done:!0}}return l(v,"constructor",{value:h.prototype=y,configurable:!0}),l(y,"constructor",{value:h,configurable:!0}),h.displayName=i(y,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,i(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},a.awrap=function(t){return{__await:t}},m(g.prototype),i(g.prototype,r,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new g(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(v),i(v,o,"Generator"),i(v,n,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=x,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,b(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}var container=document.querySelector(".boxLeft_users"),button=document.querySelector(".start_game"),leaveBtn=document.querySelector(".leave_game"),players1=document.getElementById("players"),popup=document.querySelector(".alertPopup"),popupText=document.querySelector(".alertPopup_text"),popupButton=document.querySelector(".alertPopup_btn"),tableID=document.querySelector(".boxLeft_title"),urlParams=new URLSearchParams(window.location.search),gameId=urlParams.get("gameId"),inviteLink=document.getElementById("inviteLink"),url="http://localhost:8090/game";function getPlayers(t){return _getPlayers.apply(this,arguments)}function _getPlayers(){return(_getPlayers=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r,n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(url,"/").concat(e,"/players"));case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Network response was not ok");case 6:return t.next=8,r.json();case 8:return(n=t.sent).forEach(function(t){var e=document.createElement("div");e.classList.add("boxLeft_users-user"),e.innerHTML='<span class="mdi mdi-train-car-box icon '.concat(t.playerColor,'"></span><p class="text">').concat(t.login,"</p>"),container.appendChild(e)}),console.log(n),4===n.length?(button.classList.add("start"),button.addEventListener("click",function(){window.location.href="/game.html?gameId=".concat(e)})):n.length<4&&button.addEventListener("click",function(){popup.classList.add("showAlertPopup"),popupText.textContent="Not enough players",popupButton.addEventListener("click",function(){popup.classList.remove("showAlertPopup")})}),t.abrupt("return",n);case 15:t.prev=15,t.t0=t.catch(0),console.error("Error:",t.t0);case 18:case"end":return t.stop()}},t,null,[[0,15]])}))).apply(this,arguments)}tableID.textContent=gameId,getPlayers(inviteLink.textContent=gameId);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYmJ5LmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJjb250ZXh0Iiwic3RhdGUiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtZXRob2QiLCJhcmciLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJDb250aW51ZVNlbnRpbmVsIiwicmVjb3JkIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiaW5mbyIsImRvbmUiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImZuIiwiY2FsbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwidGhpcyIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJyZXNvbHZlIiwicmVqZWN0IiwiaW52b2tlIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwibGVhdmVCdG4iLCJwbGF5ZXJzMSIsImdldEVsZW1lbnRCeUlkIiwicG9wdXAiLCJwb3B1cFRleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInRhYmxlSUQiLCJ0ZXh0Q29udGVudCIsImdhbWVJZCIsInJlc3BvbnNlIiwicGxheWVycyIsIl9jb250ZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJ1cmwiLCJnZXRQbGF5ZXJzIiwiX2dldFBsYXllcnMiLCJqc29uIiwibmV3VXNlciIsIl9jYWxsZWUkIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicGxheWVyIiwicGxheWVyQ29sb3IiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiaHJlZiIsInBvcHVwQnV0dG9uIiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJfY2FsbGVlIiwiaW52aXRlTGluayJdLCJtYXBwaW5ncyI6IjZSQUNBQSxvQkFBQSxXQUFBLE9BQUFDLENBQUEsRUFBQSxJQUFBQSxFQUFBLEdBQUFDLEVBQUFDLE9BQUFDLFVBQUFDLEVBQUFILEVBQUFJLGVBQUFDLEVBQUFKLE9BQUFJLGdCQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQUFGLEVBQUFDLEdBQUFDLEVBQUFDLEtBQUEsRUFBQUMsRUFBQSxZQUFBLE9BQUFDLE9BQUFBLE9BQUEsR0FBQUMsRUFBQUYsRUFBQUcsVUFBQSxhQUFBQyxFQUFBSixFQUFBSyxlQUFBLGtCQUFBQyxFQUFBTixFQUFBTyxhQUFBLGdCQUFBLFNBQUFDLEVBQUFaLEVBQUFDLEVBQUFFLEdBQUEsT0FBQVIsT0FBQUksZUFBQUMsRUFBQUMsRUFBQSxDQUFBRSxNQUFBQSxFQUFBVSxXQUFBLENBQUEsRUFBQUMsYUFBQSxDQUFBLEVBQUFDLFNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQWYsRUFBQUMsRUFBQSxDQUFBLElBQUFXLEVBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxNQUFBSSxHQUFBSixFQUFBLFNBQUFaLEVBQUFDLEVBQUFFLEdBQUEsT0FBQUgsRUFBQUMsR0FBQUUsQ0FBQSxDQUFB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QUFBLEVBQUEsSUFBQSxDQUFBLENBcUJ2QixDQUFBLEdBQUF4QyxNQUFBbEYsS0FBQWlGLFNBQUEsQ0FBQSxDQXhDRGMsUUFBTUUsWUFBa0JBLE9BMEN4Qk8sV0F6Q0FtQixXQUFNQSxZQUFxQjFCLE1Bc0J4QlgiLCJmaWxlIjoibG9iYnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveExlZnRfdXNlcnNcIik7XHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRfZ2FtZVwiKTtcclxuY29uc3QgbGVhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlYXZlX2dhbWVcIik7XHJcbmNvbnN0IHBsYXllcnMxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJzXCIpO1xyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRQb3B1cFwiKTtcclxuY29uc3QgcG9wdXBUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGVydFBvcHVwX3RleHRcIik7XHJcbmNvbnN0IHBvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGVydFBvcHVwX2J0blwiKTtcclxuY29uc3QgdGFibGVJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94TGVmdF90aXRsZVwiKTtcclxuXHJcbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbmNvbnN0IGdhbWVJZCA9IHVybFBhcmFtcy5nZXQoXCJnYW1lSWRcIik7XHJcbmNvbnN0IGludml0ZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludml0ZUxpbmtcIik7XHJcblxyXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA5MC9nYW1lXCI7XHJcblxyXG50YWJsZUlELnRleHRDb250ZW50ID0gZ2FtZUlkO1xyXG5pbnZpdGVMaW5rLnRleHRDb250ZW50ID0gZ2FtZUlkO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVycyhnYW1lSWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9LyR7Z2FtZUlkfS9wbGF5ZXJzYCk7XHJcblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHBsYXllcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG5cdFx0XHRjb25zdCBuZXdVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0bmV3VXNlci5jbGFzc0xpc3QuYWRkKFwiYm94TGVmdF91c2Vycy11c2VyXCIpO1xyXG5cdFx0XHRuZXdVc2VyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1kaSBtZGktdHJhaW4tY2FyLWJveCBpY29uICR7cGxheWVyLnBsYXllckNvbG9yfVwiPjwvc3Bhbj48cCBjbGFzcz1cInRleHRcIj4ke3BsYXllci5sb2dpbn08L3A+YDtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1VzZXIpO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhwbGF5ZXJzKTtcclxuXHRcdGlmIChwbGF5ZXJzLmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcInN0YXJ0XCIpO1xyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZ2FtZS5odG1sP2dhbWVJZD0ke2dhbWVJZH1gO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAocGxheWVycy5sZW5ndGggPCA0KSB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJzaG93QWxlcnRQb3B1cFwiKTtcclxuXHRcdFx0XHRwb3B1cFRleHQudGV4dENvbnRlbnQgPSBcIk5vdCBlbm91Z2ggcGxheWVyc1wiO1xyXG5cdFx0XHRcdHBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd0FsZXJ0UG9wdXBcIik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBsYXllcnM7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG5cdH1cclxufVxyXG5cclxuZ2V0UGxheWVycyhnYW1lSWQpO1xyXG4iXX0=
