"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,p=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof f?e:f,e=Object.create(e.prototype),n=new L(n||[]);return p(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return E()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),s;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}(r,a);if(r){if(r===s)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=l(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===s)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var s={};function f(){}function h(){}function d(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(b([]))),v=(y&&y!==t&&u.call(y,n)&&(e=y),d.prototype=f.prototype=Object.create(e));function m(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function g(a,c){var e;p(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=l(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function b(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:E}}function E(){return{value:void 0,done:!0}}return p(v,"constructor",{value:h.prototype=d,configurable:!0}),p(d,"constructor",{value:h,configurable:!0}),h.displayName=i(d,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},a.awrap=function(t){return{__await:t}},m(g.prototype),i(g.prototype,r,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new g(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(v),i(v,o,"Generator"),i(v,n,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=b,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,x(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:b(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}var playerNameInput=document.getElementById("playerNameJoin"),gameIdInput=document.getElementById("inviteLink"),btnJoin=document.querySelector(".joinToGame");btnJoin.addEventListener("click",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r,n,o,i;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),r=playerNameInput.value,n=gameIdInput.value,console.log(r),console.log(n),""!==n||""!==r?t.next=12:(popupText.textContent="Set the game ID and player name",popupText.style.fontSize="1.5rem",popupBtn.addEventListener("click",function(){popupAlert.classList.remove("showAlertPopup")}),popupAlert.classList.add("showAlertPopup"),t.next=38);break;case 12:""!==r||""===n?t.next=18:(popupText.textContent="Set the player name",popupBtn.addEventListener("click",function(){popupAlert.classList.remove("showAlertPopup")}),popupAlert.classList.add("showAlertPopup"),t.next=38);break;case 18:""!==n||""===r?t.next=24:(popupText.textContent="Set the game ID",popupBtn.addEventListener("click",function(){popupAlert.classList.remove("showAlertPopup")}),popupAlert.classList.add("showAlertPopup"),t.next=38);break;case 24:return t.next=26,fetch("".concat(url,"/join"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({player:r,gameId:n})});case 26:if((o=t.sent).ok)return t.next=30,o.json();t.next=37;break;case 30:i=t.sent,console.log("Dołączyłeś do gry ".concat(i.id," jako ").concat(r)),popupText.textContent="Joined to game",popupBtn.addEventListener("click",function(){window.location.href="/lobby.html?gameId=".concat(i.id),hidePopup(),popupAlert.classList.remove("showAlertPopup")}),popupAlert.classList.add("showAlertPopup"),t.next=38;break;case 37:409===o.status?(popupText.textContent="Game full",popupBtn.addEventListener("click",function(){popupAlert.classList.remove("showAlertPopup")})):(popupText.textContent="Incorrect game id",popupBtn.addEventListener("click",function(){popupAlert.classList.remove("showAlertPopup"),gameIdInput.value=""})),popupAlert.classList.add("showAlertPopup");case 38:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW5Ub0dhbWUuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsImNvbnRleHQiLCJzdGF0ZSIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ldGhvZCIsImFyZyIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsIkNvbnRpbnVlU2VudGluZWwiLCJyZWNvcmQiLCJ0cnlDYXRjaCIsInR5cGUiLCJpbmZvIiwiZG9uZSIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZm4iLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJ0aGlzIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInJlc29sdmUiLCJyZWplY3QiLCJpbnZva2UiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsImNhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJwbGF5ZXJOYW1lSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2FtZUlkSW5wdXQiLCJidG5Kb2luIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVmIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJwbGF5ZXJOYW1lIiwiZ2FtZUlkIiwiZ2FtZSIsInBvcHVwVGV4dCIsInN0eWxlIiwiZm9udFNpemUiLCJfY29udGV4dCIsInBvcHVwQnRuIiwicG9wdXBBbGVydCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiZmV0Y2giLCJjb25jYXQiLCJ1cmwiLCJoZWFkZXJzIiwiQ29udGVudC1UeXBlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwbGF5ZXIiLCJyZXNwb25zZSIsImpzb24iLCJsb2ciLCJpZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhpZGVQb3B1cCIsInJlbW92ZSIsInN0YXR1cyIsIl9jYWxsZWUiLCJfeCJdLCJtYXBwaW5ncyI6IjZSQUNBQSxvQkFBQSxXQUFBLE9BQUFDLENBQUEsRUFBQSxJQUFBQSxFQUFBLEdBQUFDLEVBQUFDLE9BQUFDLFVBQUFDLEVBQUFILEVBQUFJLGVBQUFDLEVBQUFKLE9BQUFJLGdCQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQUFGLEVBQUFDLEdBQUFDLEVBQUFDLEtBQUEsRUFBQUMsRUFBQSxZQUFBLE9BQUFDLE9BQUFBLE9BQUEsR0FBQUMsRUFBQUYsRUFBQUcsVUFBQSxhQUFBQyxFQUFBSixFQUFBSyxlQUFBLGtCQUFBQyxFQUFBTixFQUFBTyxhQUFBLGdCQUFBLFNBQUFDLEVBQUFaLEVBQUFDLEVBQUFFLEdBQUEsT0FBQVIsT0FBQUksZUFBQUMsRUFBQUMsRUFBQSxDQUFBRSxNQUFBQSxFQUFBVSxXQUFBLENBQUEsRUFBQUMsYUFBQSxDQUFBLEVBQUFDLFNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQWYsRUFBQUMsRUFBQSxDQUFBLElBQUFXLEVBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxNQUFBSSxHQUFBSixFQUFBLFNBQUFaLEVBQUFDLEVBQUFFLEdBQUEsT0FBQUgs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QUFBLEdBQUEsTUFBQSxLQUFBLEdBQ2J1SSxNQUFyQnJCLEVBQVVzQixRQXlCVjNCLFVBeEJDUSxZQUFBLFlBeUJESixTQXhCREMsaUJBQVdDLFFBQWMsV0F5QnZCRCxXQXpCeUNGLFVBQUF1QixPQUFBLGdCQUFBLENBMEIxQyxDQUFDLElBR0QxQixVQTdCMENRLFlBRWZFLG9CQTRCM0JOLFNBM0JBbEksaUJBQWMsUUFBQSxXQTRCYm1JLFdBM0JETyxVQUFTYyxPQUFBLGdCQUFBLEVBNEJSckMsWUEzQkE3SSxNQUFBLEVBNEJELENBQUMsR0FDRDZKLFdBM0JBUyxVQUFXRSxJQUFBQSxnQkFBVSxFQTRCckIsS0FBQSxHQUFBLElBQUEsTUFBQSxPQUFBYixFQUFBeEMsS0FBQSxDQUFBLENBQUEsRUFBQWlFLENBQUEsQ0FBQSxDQUVGLENBQUEsRUFBQSxPQUFBLFNBQUFDLEdBQUEsT0FBQXBDLEVBQUFSLE1BQUFsRixLQUFBaUYsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBIiwiZmlsZSI6ImpvaW5Ub0dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbGF5ZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllck5hbWVKb2luXCIpO1xyXG5jb25zdCBnYW1lSWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52aXRlTGlua1wiKTtcclxuY29uc3QgYnRuSm9pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuam9pblRvR2FtZVwiKTtcclxuXHJcbmJ0bkpvaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XHJcblx0bGV0IGdhbWVJZCA9IGdhbWVJZElucHV0LnZhbHVlO1xyXG5cdGNvbnNvbGUubG9nKHBsYXllck5hbWUpO1xyXG5cdGNvbnNvbGUubG9nKGdhbWVJZCk7XHJcblxyXG5cdGlmIChnYW1lSWQgPT09IFwiXCIgJiYgcGxheWVyTmFtZSA9PT0gXCJcIikge1xyXG5cdFx0cG9wdXBUZXh0LnRleHRDb250ZW50ID0gYFNldCB0aGUgZ2FtZSBJRCBhbmQgcGxheWVyIG5hbWVgO1xyXG5cdFx0cG9wdXBUZXh0LnN0eWxlLmZvbnRTaXplID0gXCIxLjVyZW1cIjtcclxuXHRcdHBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdHBvcHVwQWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dBbGVydFBvcHVwXCIpO1xyXG5cdFx0fSk7XHJcblx0XHRwb3B1cEFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJzaG93QWxlcnRQb3B1cFwiKTtcclxuXHR9IGVsc2UgaWYgKHBsYXllck5hbWUgPT09IFwiXCIgJiYgZ2FtZUlkICE9PSBcIlwiKSB7XHJcblx0XHRwb3B1cFRleHQudGV4dENvbnRlbnQgPSBgU2V0IHRoZSBwbGF5ZXIgbmFtZWA7XHJcblx0XHRwb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRwb3B1cEFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93QWxlcnRQb3B1cFwiKTtcclxuXHRcdH0pO1xyXG5cdFx0cG9wdXBBbGVydC5jbGFzc0xpc3QuYWRkKFwic2hvd0FsZXJ0UG9wdXBcIik7XHJcblx0fSBlbHNlIGlmIChnYW1lSWQgPT09IFwiXCIgJiYgcGxheWVyTmFtZSAhPT0gXCJcIikge1xyXG5cdFx0cG9wdXBUZXh0LnRleHRDb250ZW50ID0gYFNldCB0aGUgZ2FtZSBJRGA7XHJcblx0XHRwb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRwb3B1cEFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93QWxlcnRQb3B1cFwiKTtcclxuXHRcdH0pO1xyXG5cdFx0cG9wdXBBbGVydC5jbGFzc0xpc3QuYWRkKFwic2hvd0FsZXJ0UG9wdXBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9qb2luYCwge1xyXG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRwbGF5ZXI6IHBsYXllck5hbWUsXHJcblx0XHRcdFx0Z2FtZUlkOiBnYW1lSWQsXHJcblx0XHRcdH0pLFxyXG5cdFx0fSk7XHJcblx0XHRpZiAocmVzcG9uc2Uub2spIHtcclxuXHRcdFx0Y29uc3QgZ2FtZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0Y29uc29sZS5sb2coYERvxYLEhWN6ecWCZcWbIGRvIGdyeSAke2dhbWUuaWR9IGpha28gJHtwbGF5ZXJOYW1lfWApO1xyXG5cdFx0XHRwb3B1cFRleHQudGV4dENvbnRlbnQgPSBcIkpvaW5lZCB0byBnYW1lXCI7XHJcblx0XHRcdHBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2xvYmJ5Lmh0bWw/Z2FtZUlkPSR7Z2FtZS5pZH1gO1xyXG5cdFx0XHRcdGhpZGVQb3B1cCgpO1xyXG5cdFx0XHRcdHBvcHVwQWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dBbGVydFBvcHVwXCIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cG9wdXBBbGVydC5jbGFzc0xpc3QuYWRkKFwic2hvd0FsZXJ0UG9wdXBcIik7XHJcblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA5KSB7XHJcblx0XHRcdHBvcHVwVGV4dC50ZXh0Q29udGVudCA9IGBHYW1lIGZ1bGxgO1xyXG5cdFx0XHRwb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHBvcHVwQWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dBbGVydFBvcHVwXCIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cG9wdXBBbGVydC5jbGFzc0xpc3QuYWRkKFwic2hvd0FsZXJ0UG9wdXBcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwb3B1cFRleHQudGV4dENvbnRlbnQgPSBcIkluY29ycmVjdCBnYW1lIGlkXCI7XHJcblx0XHRcdHBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0cG9wdXBBbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd0FsZXJ0UG9wdXBcIik7XHJcblx0XHRcdFx0Z2FtZUlkSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cG9wdXBBbGVydC5jbGFzc0xpc3QuYWRkKFwic2hvd0FsZXJ0UG9wdXBcIik7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIl19
