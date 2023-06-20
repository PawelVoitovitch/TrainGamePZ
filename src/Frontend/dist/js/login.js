"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,l=t.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new w(n||[]);return s(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return E()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=u(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=u(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f={};function h(){}function y(){}function d(){}var e={},p=(i(e,n,function(){return this}),Object.getPrototypeOf),p=p&&p(p(x([]))),v=(p&&p!==t&&l.call(p,n)&&(e=p),d.prototype=h.prototype=Object.create(e));function g(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function m(a,c){var e;s(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=u(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&l.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function x(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(l.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:E}}function E(){return{value:void 0,done:!0}}return s(v,"constructor",{value:y.prototype=d,configurable:!0}),s(d,"constructor",{value:y,configurable:!0}),y.displayName=i(d,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},a.awrap=function(t){return{__await:t}},g(m.prototype),i(m.prototype,r,function(){return this}),a.AsyncIterator=m,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new m(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(v),i(v,o,"Generator"),i(v,n,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=x,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,b(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}var login=document.getElementById("login"),loginForm=document.querySelector(".main_login"),loginEl=document.querySelector(".loginEL"),errorLogin=document.querySelectorAll(".error-text-login"),emailLogin=document.getElementById("emailLogin"),passwordLogin=document.getElementById("passwordLogin"),btnLogin=document.querySelector(".sendLogin"),closeBtnLogin=document.querySelector(".closeBtnLogin"),url="http://localhost:8090",isOpen=!1,errorExist=!1,checkFieldNotNull=(login.addEventListener("click",function(){isOpen?(loginForm.style.visibility="hidden",loginEl.classList.remove("loginIsActive"),errorLogin[0].style.visibility="hidden",errorLogin[1].style.visibility="hidden",isOpen=!1,emailLogin.value="",passwordLogin.value=""):(loginForm.style.visibility="visible",errorExist?(errorLogin[0].style.visibility="visible",errorLogin[1].style.visibility="visible"):(errorLogin[0].style.visibility="hidden",errorLogin[1].style.visibility="hidden"),loginEl.classList.add("loginIsActive"),isOpen=!0)}),function(t,e,r){""===t.value?(errorLogin[e].textContent=r,errorLogin[e].style.visibility="visible"):errorLogin[e].style.visibility="hidden"}),isUsernameAvailable=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(url,"/user/isUsernameTaken/").concat(e));case 2:return r=t.sent,t.next=5,r.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),logUser=function(t){fetch("".concat(url,"/user/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){sessionStorage.setItem("token",t.token),sessionStorage.setItem("username",emailLogin.value),location.reload()}).catch(function(t){errorLogin[0].style.visibility="visible",errorLogin[0].textContent="Invalid data"})},checkUsernameAvailability=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,isUsernameAvailable(e);case 2:t.sent?(r={username:emailLogin.value,password:passwordLogin.value},logUser(r)):(errorLogin[0].textContent="User not exist!",errorLogin[0].style.visibility="visible");case 4:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}();btnLogin.addEventListener("click",function(){checkFieldNotNull(emailLogin,0,"Enter login"),checkFieldNotNull(passwordLogin,1,"Enter password");var t=document.querySelectorAll(".error-text-login");Array.from(t).some(function(t){return"visible"===t.style.visibility})||checkUsernameAvailability(emailLogin.value)}),closeBtnLogin.addEventListener("click",function(){loginForm.style.visibility="hidden",loginEl.classList.remove("loginIsActive"),errorLogin[0].style.visibility="hidden",errorLogin[1].style.visibility="hidden"});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJjb250ZXh0Iiwic3RhdGUiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtZXRob2QiLCJhcmciLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJDb250aW51ZVNlbnRpbmVsIiwicmVjb3JkIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiaW5mbyIsImRvbmUiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImZuIiwiY2FsbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwidGhpcyIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJyZXNvbHZlIiwicmVqZWN0IiwiaW52b2tlIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwibG9naW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9naW5Gb3JtIiwicXVlcnlTZWxlY3RvciIsImxvZ2luRWwiLCJlcnJvckxvZ2luIiwicXVlcnlTZWxlY3RvckFsbCIsImVtYWlsTG9naW4iLCJwYXNzd29yZExvZ2luIiwiY2xvc2VCdG5Mb2dpbiIsInVybCIsInN0eWxlIiwidmlzaWJpbGl0eSIsImNsYXNzTGlzdCIsImlzT3BlbiIsImVycm9yRXhpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwiaW5wdXQiLCJpbmQiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJjaGVja0ZpZWxkTm90TnVsbCIsImlzVXNlcm5hbWVBdmFpbGFibGUiLCJfcmVmIiwiX2NhbGxlZSIsInVzZXJuYW1lIiwiZGF0YSIsIl9jb250ZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJyZXNwb25zZSIsImpzb24iLCJfeCIsImxvZ1VzZXIiLCJ1c2VyRGF0YSIsImhlYWRlcnMiLCJDb250ZW50LVR5cGUiLCJib2R5IiwiSlNPTiIsInNlc3Npb25TdG9yYWdlIiwidG9rZW4iLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjaGVja1VzZXJuYW1lQXZhaWxhYmlsaXR5IiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsInN0cmluZ2lmeSIsInBhc3N3b3JkIiwiX3gyIiwiYnRuTG9naW4iLCJzb21lIiwiaXNUYWtlbiJdLCJtYXBwaW5ncyI6IjZSQUNBQSxvQkFBQSxXQUFBLE9BQUFDLENBQUEsRUFBQSxJQUFBQSxFQUFBLEdBQUFDLEVBQUFDLE9BQUFDLFVBQUFDLEVBQUFILEVBQUFJLGVBQUFDLEVBQUFKLE9BQUFJLGdCQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQUFGLEVBQUFDLEdBQUFDLEVBQUFDLEtBQUEsRUFBQUMsRUFBQSxZQUFBLE9BQUFDLE9BQUFBLE9BQUEsR0FBQUMsRUFBQUYsRUFBQUcsVUFBQSxhQUFBQyxFQUFBSixFQUFBSyxlQUFBLGtCQUFBQyxFQUFBTixFQUFBTyxhQUFBLGdCQUFBLFNBQUFDLEVBQUFaLEVBQUFDLEVBQUFFLEdBQUEsT0FBQVIsT0FBQUksZUFBQUMsRUFBQUMsRUFBQSxD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QXFCNUNDLGtCQXBCR2QsY0FBQSxFQUFBLGdCQUFBLEVBR0osSUFBTXFDLEVBQUFBLFNBQUFBLGlCQUF5QixtQkFBQSxFQUFBbEQsTUFBQUEsS0FBQUEsQ0FBQSxFQUFBMEQsS0FxQjdCLFNBQUNySCxHQXJCOENzSCxNQUFBLFlBQUFBLEVBQUFuQixNQUFBdkIsVUFBQSxDQUFBLEdBeUIvQ2lDLDBCQXpCK0N0QyxXQUFBbEosS0FBQSxDQTJCakQsQ0FBQyxFQUVEb0osY0ExQktPLGlCQUFVLFFBQUEsV0EyQmRkLFVBQVVTLE1BMUJUTixXQUFjZ0IsU0EyQmZqQixRQUFRUyxVQTFCUFIsT0FBY00sZUFBTUMsRUEyQnJCUCxXQTFCQyxHQUFBTSxNQUFNQyxXQUFBLFNBMkJQUCxXQTFCTzhCLEdBQUFBLE1BQVF2QixXQUFHLFFBMkJuQixDQUFDIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fbG9naW5cIik7XHJcbmNvbnN0IGxvZ2luRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luRUxcIik7XHJcbmNvbnN0IGVycm9yTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVycm9yLXRleHQtbG9naW5cIik7XHJcbmNvbnN0IGVtYWlsTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsTG9naW5cIik7XHJcbmNvbnN0IHBhc3N3b3JkTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkTG9naW5cIik7XHJcbmNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZW5kTG9naW5cIik7XHJcbmNvbnN0IGNsb3NlQnRuTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlQnRuTG9naW5cIik7XHJcbmNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDkwXCI7XHJcblxyXG5sZXQgaXNPcGVuID0gZmFsc2U7XHJcbmxldCBlcnJvckV4aXN0ID0gZmFsc2U7XHJcblxyXG5sb2dpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdGlmICghaXNPcGVuKSB7XHJcblx0XHRsb2dpbkZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cdFx0aWYgKGVycm9yRXhpc3QpIHtcclxuXHRcdFx0ZXJyb3JMb2dpblswXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHRcdGVycm9yTG9naW5bMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZXJyb3JMb2dpblswXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdFx0ZXJyb3JMb2dpblsxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdH1cclxuXHRcdGxvZ2luRWwuY2xhc3NMaXN0LmFkZChcImxvZ2luSXNBY3RpdmVcIik7XHJcblx0XHRpc09wZW4gPSB0cnVlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRsb2dpbkZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRsb2dpbkVsLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dpbklzQWN0aXZlXCIpO1xyXG5cdFx0ZXJyb3JMb2dpblswXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdGVycm9yTG9naW5bMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRpc09wZW4gPSBmYWxzZTtcclxuXHRcdGVtYWlsTG9naW4udmFsdWUgPSBcIlwiO1xyXG5cdFx0cGFzc3dvcmRMb2dpbi52YWx1ZSA9IFwiXCI7XHJcblx0fVxyXG59KTtcclxuXHJcbmNvbnN0IGNoZWNrRmllbGROb3ROdWxsID0gKGlucHV0LCBpbmQsIHRleHQpID0+IHtcclxuXHRpZiAoaW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdGVycm9yTG9naW5baW5kXS50ZXh0Q29udGVudCA9IHRleHQ7XHJcblx0XHRlcnJvckxvZ2luW2luZF0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRlcnJvckxvZ2luW2luZF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgaXNVc2VybmFtZUF2YWlsYWJsZSA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS91c2VyL2lzVXNlcm5hbWVUYWtlbi8ke3VzZXJuYW1lfWApO1xyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBsb2dVc2VyID0gKHVzZXJEYXRhKSA9PiB7XHJcblx0ZmV0Y2goYCR7dXJsfS91c2VyL2xvZ2luYCwge1xyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLnRva2VuKTtcclxuXHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIGVtYWlsTG9naW4udmFsdWUpO1xyXG5cdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRlcnJvckxvZ2luWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRcdFx0ZXJyb3JMb2dpblswXS50ZXh0Q29udGVudCA9IFwiSW52YWxpZCBkYXRhXCI7XHJcblx0XHR9KTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrVXNlcm5hbWVBdmFpbGFiaWxpdHkgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuXHRjb25zdCBpc1Rha2VuID0gYXdhaXQgaXNVc2VybmFtZUF2YWlsYWJsZSh1c2VybmFtZSk7XHJcblxyXG5cdGlmICghaXNUYWtlbikge1xyXG5cdFx0ZXJyb3JMb2dpblswXS50ZXh0Q29udGVudCA9IFwiVXNlciBub3QgZXhpc3QhXCI7XHJcblx0XHRlcnJvckxvZ2luWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgdXNlckRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiBlbWFpbExvZ2luLnZhbHVlLFxyXG5cdFx0XHRwYXNzd29yZDogcGFzc3dvcmRMb2dpbi52YWx1ZSxcclxuXHRcdH07XHJcblx0XHRsb2dVc2VyKHVzZXJEYXRhKTtcclxuXHR9XHJcbn07XHJcblxyXG5idG5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdGNoZWNrRmllbGROb3ROdWxsKGVtYWlsTG9naW4sIDAsIFwiRW50ZXIgbG9naW5cIik7XHJcblx0Y2hlY2tGaWVsZE5vdE51bGwocGFzc3dvcmRMb2dpbiwgMSwgXCJFbnRlciBwYXNzd29yZFwiKTtcclxuXHJcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lcnJvci10ZXh0LWxvZ2luXCIpO1xyXG5cdGNvbnN0IGhhc0Vycm9ycyA9IEFycmF5LmZyb20oZXJyb3JzKS5zb21lKFxyXG5cdFx0KGVycm9yKSA9PiBlcnJvci5zdHlsZS52aXNpYmlsaXR5ID09PSBcInZpc2libGVcIlxyXG5cdCk7XHJcblxyXG5cdGlmICghaGFzRXJyb3JzKSB7XHJcblx0XHRjaGVja1VzZXJuYW1lQXZhaWxhYmlsaXR5KGVtYWlsTG9naW4udmFsdWUpO1xyXG5cdH1cclxufSk7XHJcblxyXG5jbG9zZUJ0bkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0bG9naW5Gb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdGxvZ2luRWwuY2xhc3NMaXN0LnJlbW92ZShcImxvZ2luSXNBY3RpdmVcIik7XHJcblx0ZXJyb3JMb2dpblswXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRlcnJvckxvZ2luWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59KTtcclxuIl19
