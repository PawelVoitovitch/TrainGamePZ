"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var i={},t=Object.prototype,u=t.hasOwnProperty,l=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,a,i,c,e=e&&e.prototype instanceof y?e:y,e=Object.create(e.prototype),n=new L(n||[]);return l(e,"_invoke",{value:(o=t,a=r,i=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return E()}for(i.method=t,i.arg=e;;){var r=i.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=s(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,i);if(r){if(r===f)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===c)throw c="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c="executing";r=s(o,a,i);if("normal"===r.type){if(c=i.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:i.done}}"throw"===r.type&&(c="completed",i.method="throw",i.arg=r.arg)}})}),e}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var f={};function y(){}function h(){}function p(){}var e={},d=(a(e,n,function(){return this}),Object.getPrototypeOf),d=d&&d(d(b([]))),m=(d&&d!==t&&u.call(d,n)&&(e=d),p.prototype=y.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function g(i,c){var e;l(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var a,t=s(i[t],i,r);if("throw"!==t.type)return(r=(a=t.arg).value)&&"object"==_typeof(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function b(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:E}}function E(){return{value:void 0,done:!0}}return l(m,"constructor",{value:h.prototype=p,configurable:!0}),l(p,"constructor",{value:h,configurable:!0}),h.displayName=a(p,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},i.awrap=function(t){return{__await:t}},v(g.prototype),a(g.prototype,r,function(){return this}),i.AsyncIterator=g,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new g(c(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},v(m),a(m,o,"Generator"),a(m,n,function(){return this}),a(m,"toString",function(){return"[object Generator]"}),i.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=b,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return a.type="throw",a.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,x(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:b(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},i}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=c.apply(t,i);function o(t){asyncGeneratorStep(n,e,r,o,a,"next",t)}function a(t){asyncGeneratorStep(n,e,r,o,a,"throw",t)}o(void 0)})}}var rivalsSection=document.querySelector(".rivalsPoint"),oponentsName=document.querySelectorAll(".oponentName"),yourName=document.querySelector(".yourName"),playerNameFromURL=urlParams.get("playerName"),playerName=atob(playerNameFromURL),trainsQuantity=document.querySelectorAll(".oponentsTrainsQuantity"),destinationQuantity=document.querySelectorAll(".destinationQuantity"),trainCardQuantity=document.querySelectorAll(".trainCardQuantity"),oponentPoints=document.querySelectorAll(".oponentPoints"),playerPoints=document.querySelector(".points"),playerTrains=document.querySelector(".trainsQuantity"),playersBox=document.querySelectorAll(".playersBox"),myBox=document.querySelector(".myBox"),trainsCard=document.querySelectorAll(".cardsQuantity"),trainCards=(yourName.textContent=playerName,["BLUE","BLACK","GREEN","ORANGE","PINK","RAINBOW","RED","WHITE","YELLOW"]);function setOponentData(t,e){oponentsName[e].textContent=t.login,trainsQuantity[e].textContent=t.trains,destinationQuantity[e].textContent=t.ticketCards.length,trainCardQuantity[e].textContent=t.trainCards.length,oponentPoints[e].textContent=t.points,playersBox[e].classList.add(t.playerColor)}function setMyData(t){playerPoints.textContent=t.points,playerTrains.textContent=t.trains,myBox.classList.add(t.playerColor);var n=t.trainCards.reduce(function(t,e){return t[e]||(t[e]=0),t[e]++,t},{});trainCards.forEach(function(t,e){var r=n[t]||0;trainsCard[e].textContent=r,cardsQuantity[t]=r})}function loadGame(){return _loadGame.apply(this,arguments)}function _loadGame(){return(_loadGame=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,r;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,getPlayers(gameId);case 2:e=t.sent,r=0,e.forEach(function(t){t.login!==playerName?(setOponentData(t,r),r++):setMyData(t)});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}loadGame();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldFVzZXJzLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJjb250ZXh0Iiwic3RhdGUiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtZXRob2QiLCJhcmciLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJDb250aW51ZVNlbnRpbmVsIiwicmVjb3JkIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiaW5mbyIsImRvbmUiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImZuIiwiY2FsbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwidGhpcyIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJyZXNvbHZlIiwicmVqZWN0IiwiaW52b2tlIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5Iiwicml2YWxzU2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wb25lbnRzTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ5b3VyTmFtZSIsInBsYXllck5hbWVGcm9tVVJMIiwidXJsUGFyYW1zIiwiZ2V0IiwicGxheWVyTmFtZSIsInRyYWluc1F1YW50aXR5IiwiZGVzdGluYXRpb25RdWFudGl0eSIsInRyYWluQ2FyZFF1YW50aXR5IiwicGxheWVyc0JveCIsInBsYXllclBvaW50cyIsInNldE9wb25lbnREYXRhIiwib3BvbmVudCIsImlkeCIsInNldE15RGF0YSIsImxvZ2luIiwidGV4dENvbnRlbnQiLCJ0cmFpbnMiLCJ0aWNrZXRDYXJkcyIsImFkZCIsInBsYXllckNvbG9yIiwidHJhaW5DYXJkcyIsIm9wb25lbnRQb2ludHMiLCJjYXJkQ291bnRzIiwicmVkdWNlIiwiY291bnRzIiwiY29sb3IiLCJwb2ludHMiLCJwbGF5ZXJUcmFpbnMiLCJteUJveCIsImluZGV4IiwidHJhaW5zQ2FyZCIsImNhcmRRdWFudGl0eSIsImNhcmRzUXVhbnRpdHkiLCJsb2FkR2FtZSIsIl9sb2FkR2FtZSIsIl9jb250ZXh0IiwiX2NhbGxlZSIsIm9wb25lbnRzIiwiZ2FtZUlkIl0sIm1hcHBpbmdzIjoiNlJBQ0FBLG9CQUFBLFdBQUEsT0FBQUMsQ0FBQSxFQUFBLElBQUFBLEVBQUEsR0FBQUMsRUFBQUMsT0FBQUMsVUFBQUMsRUFBQUgsRUFBQUksZUFBQUMsRUFBQUosT0FBQUksZ0JBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQUYsRUFBQUMsR0FBQUMsRUFBQUMsS0FBQSxFQUFBQyxFQUFBLFlBQUEsT0FBQUMsT0FBQUEsT0FBQSxHQUFBQyxFQUFBRixFQUFBRyxVQUFBLGFBQUFDLEVBQUFKLEVBQUFLLGVBQUEsa0JBQUFDLEVBQUFOLEVBQUFPLGFBQUEsZ0JBQUEsU0FBQUMsRUFBQVosRUFBQUMsRUFBQUUsR0FBQSxPQUFBUixPQUFBSSxlQUFBQyxFQUFBQyxFQUFBLENBQUFFLE1BQUFBLEVBQUFVLFdBQUEsQ0FBQSxFQUFBQyxhQUFBLENBQUEsRUFBQUMsU0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBZixF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QUEvRCxLQUFBLENBQUEsQ0FBQSxFQUFBZ0UsQ0FBQSxDQUFBLENBQ0gsQ0FBQSxHQUFBMUMsTUFBQWxGLEtBQUFpRixTQUFBLENBQUEsQ0FFRHdDLFNBQVEiLCJmaWxlIjoic2V0VXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByaXZhbHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaXZhbHNQb2ludFwiKTtcclxuY29uc3Qgb3BvbmVudHNOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcG9uZW50TmFtZVwiKTtcclxuY29uc3QgeW91ck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnlvdXJOYW1lXCIpO1xyXG5jb25zdCBwbGF5ZXJOYW1lRnJvbVVSTCA9IHVybFBhcmFtcy5nZXQoXCJwbGF5ZXJOYW1lXCIpO1xyXG5jb25zdCBwbGF5ZXJOYW1lID0gYXRvYihwbGF5ZXJOYW1lRnJvbVVSTCk7XHJcbmNvbnN0IHRyYWluc1F1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcG9uZW50c1RyYWluc1F1YW50aXR5XCIpO1xyXG5jb25zdCBkZXN0aW5hdGlvblF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXN0aW5hdGlvblF1YW50aXR5XCIpO1xyXG5jb25zdCB0cmFpbkNhcmRRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhaW5DYXJkUXVhbnRpdHlcIik7XHJcbmNvbnN0IG9wb25lbnRQb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wb25lbnRQb2ludHNcIik7XHJcbmNvbnN0IHBsYXllclBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9pbnRzXCIpO1xyXG5jb25zdCBwbGF5ZXJUcmFpbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYWluc1F1YW50aXR5XCIpO1xyXG5jb25zdCBwbGF5ZXJzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXJzQm94XCIpO1xyXG5jb25zdCBteUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlCb3hcIik7XHJcbmNvbnN0IHRyYWluc0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRzUXVhbnRpdHlcIik7XHJcblxyXG55b3VyTmFtZS50ZXh0Q29udGVudCA9IHBsYXllck5hbWU7XHJcblxyXG5jb25zdCB0cmFpbkNhcmRzID0gW1xyXG5cdFwiQkxVRVwiLFxyXG5cdFwiQkxBQ0tcIixcclxuXHRcIkdSRUVOXCIsXHJcblx0XCJPUkFOR0VcIixcclxuXHRcIlBJTktcIixcclxuXHRcIlJBSU5CT1dcIixcclxuXHRcIlJFRFwiLFxyXG5cdFwiV0hJVEVcIixcclxuXHRcIllFTExPV1wiLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gc2V0T3BvbmVudERhdGEob3BvbmVudCwgaWR4KSB7XHJcblx0b3BvbmVudHNOYW1lW2lkeF0udGV4dENvbnRlbnQgPSBvcG9uZW50LmxvZ2luO1xyXG5cdHRyYWluc1F1YW50aXR5W2lkeF0udGV4dENvbnRlbnQgPSBvcG9uZW50LnRyYWlucztcclxuXHRkZXN0aW5hdGlvblF1YW50aXR5W2lkeF0udGV4dENvbnRlbnQgPSBvcG9uZW50LnRpY2tldENhcmRzLmxlbmd0aDtcclxuXHR0cmFpbkNhcmRRdWFudGl0eVtpZHhdLnRleHRDb250ZW50ID0gb3BvbmVudC50cmFpbkNhcmRzLmxlbmd0aDtcclxuXHRvcG9uZW50UG9pbnRzW2lkeF0udGV4dENvbnRlbnQgPSBvcG9uZW50LnBvaW50cztcclxuXHRwbGF5ZXJzQm94W2lkeF0uY2xhc3NMaXN0LmFkZChvcG9uZW50LnBsYXllckNvbG9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TXlEYXRhKG9wb25lbnQpIHtcclxuXHRwbGF5ZXJQb2ludHMudGV4dENvbnRlbnQgPSBvcG9uZW50LnBvaW50cztcclxuXHRwbGF5ZXJUcmFpbnMudGV4dENvbnRlbnQgPSBvcG9uZW50LnRyYWlucztcclxuXHRteUJveC5jbGFzc0xpc3QuYWRkKG9wb25lbnQucGxheWVyQ29sb3IpO1xyXG5cclxuXHRjb25zdCBjYXJkQ291bnRzID0gb3BvbmVudC50cmFpbkNhcmRzLnJlZHVjZSgoY291bnRzLCBjb2xvcikgPT4ge1xyXG5cdFx0aWYgKCFjb3VudHNbY29sb3JdKSB7XHJcblx0XHRcdGNvdW50c1tjb2xvcl0gPSAwO1xyXG5cdFx0fVxyXG5cdFx0Y291bnRzW2NvbG9yXSsrO1xyXG5cdFx0cmV0dXJuIGNvdW50cztcclxuXHR9LCB7fSk7XHJcblxyXG5cdHRyYWluQ2FyZHMuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XHJcblx0XHRjb25zdCBxdWFudGl0eSA9IGNhcmRDb3VudHNbY29sb3JdIHx8IDA7XHJcblx0XHRjb25zdCBjYXJkUXVhbnRpdHkgPSB0cmFpbnNDYXJkW2luZGV4XTtcclxuXHRcdGNhcmRRdWFudGl0eS50ZXh0Q29udGVudCA9IHF1YW50aXR5O1xyXG5cdFx0Y2FyZHNRdWFudGl0eVtjb2xvcl0gPSBxdWFudGl0eTtcclxuXHR9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEdhbWUoKSB7XHJcblx0Y29uc3Qgb3BvbmVudHMgPSBhd2FpdCBnZXRQbGF5ZXJzKGdhbWVJZCk7XHJcblx0bGV0IGlkeCA9IDA7XHJcblx0b3BvbmVudHMuZm9yRWFjaCgob3BvbmVudCkgPT4ge1xyXG5cdFx0aWYgKG9wb25lbnQubG9naW4gIT09IHBsYXllck5hbWUpIHtcclxuXHRcdFx0c2V0T3BvbmVudERhdGEob3BvbmVudCwgaWR4KTtcclxuXHRcdFx0aWR4Kys7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRNeURhdGEob3BvbmVudCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmxvYWRHYW1lKCk7XHJcbiJdfQ==