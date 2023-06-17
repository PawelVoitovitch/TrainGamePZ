"use strict";var username=document.querySelector("#username"),password=document.querySelector("#password"),confirmPassword=document.querySelector("#password2"),email=document.querySelector("#email"),sendBtn=document.querySelector(".send"),clearBtn=document.querySelector(".clear"),closeBtn=document.querySelector(".close"),popup=document.querySelector(".popup"),terms=document.getElementById("terms"),checkTerms=document.querySelector(".checkTerms"),url="http://localhost:8090",showErr=function(e,r){var e=e.parentElement,o=e.querySelector(".error-text");e.classList.add("error"),o.textContent=r},clearErr=function(e){e.parentElement.classList.remove("error")},checkForm=function(e){e.forEach(function(e){""===e.value.trim()?showErr(e,"Enter "+e.placeholder.toLowerCase()+" !"):(clearErr(e),e===username?checkLenght(username,3):e===password?checkLenght(password,8):e===confirmPassword?(checkPassword(password,confirmPassword),checkLenght(password,8)):e===email&&checkEmail(email))}),terms.checked?clearErr(checkTerms):showErr(checkTerms,"Confirm terms and conditions!")},checkLenght=function(e,r){e.value.length<r&&showErr(e,"".concat(e.placeholder," must contain at least ").concat(r," characters!"))},checkPassword=function(e,r){e.value!==r.value&&showErr(r,"Passwords are different!")},checkErrors=function(){var e=document.querySelectorAll(".form-box"),r=0;e.forEach(function(e){e.classList.contains("error")&&r++}),0===r&&(e={username:username.value,email:email.value,password:password.value},registerUser(e))},checkEmail=function(e){/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(e.value)?clearErr(email):showErr(e,"Invalid email!")},registerUser=function(e){fetch("".concat(url,"/user/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok||(popup.querySelector("p").textContent="User exist. Log in!"),popup.classList.add("show-popup"),e.json()}).then(function(e){sessionStorage.setItem("token",e.token),sessionStorage.setItem("username",username.value),location.reload()}).catch(function(e){console.log(e),popup.querySelector("p").textContent="Registration failed",popup.classList.add("show-popup")})};clearBtn.addEventListener("click",function(e){e.preventDefault(),[username,password,confirmPassword,email,checkTerms].forEach(function(e){e.value="",clearErr(e)})}),sendBtn.addEventListener("click",function(e){e.preventDefault(),checkForm([username,password,confirmPassword,email]),checkErrors()}),popup.querySelector("button").addEventListener("click",function(){popup.classList.remove("show-popup")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbInVzZXJuYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJlbWFpbCIsInNlbmRCdG4iLCJjbGVhckJ0biIsImNsb3NlQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJwb3B1cCIsInRlcm1zIiwidXJsIiwiaW5wdXQiLCJtc2ciLCJzaG93RXJyIiwiZm9ybUJveCIsInBhcmVudEVsZW1lbnQiLCJlcnJvck1zZyIsImNsYXNzTGlzdCIsImNsZWFyRXJyIiwicmVtb3ZlIiwiZm9yRWFjaCIsInZhbHVlIiwiZWwiLCJwbGFjZWhvbGRlciIsInRvTG93ZXJDYXNlIiwiY2hlY2tMZW5naHQiLCJjaGVja1Bhc3N3b3JkIiwiY2hlY2tFbWFpbCIsImNoZWNrVGVybXMiLCJtaW4iLCJsZW5ndGgiLCJpbnB1dDEiLCJpbnB1dDIiLCJhbGxJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXJyb3JDb3VudCIsImNoZWNrRXJyb3JzIiwiY29udGFpbnMiLCJ0ZXN0IiwicmVnaXN0ZXJVc2VyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJDb250ZW50LVR5cGUiLCJib2R5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwidGhlbiIsImNvbnNvbGUiLCJlcnIiLCJ0ZXh0Q29udGVudCIsImFkZCIsInByZXZlbnREZWZhdWx0IiwianNvbiIsImFyciIsImRhdGEiLCJ0b2tlbiIsImVsZW1lbnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0Zvcm0iLCJlIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxTQUFXQyxTQUFTQyxjQUFjLFdBQVcsRUFDN0NDLFNBQVdGLFNBQVNDLGNBQWMsV0FBVyxFQUQ3Q0YsZ0JBQW9CRSxTQUFBQSxjQUFjLFlBQVksRUFDOUNDLE1BQVFGLFNBQVdDLGNBQWMsUUFBQyxF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c0JBRS9Ca0MsTUFBQUEsVUFBYWdCLElBQUEsWUFBQSxDQUNaLENBQUEsQ0FFRjVDLEVBRUFILFNBQUV3RCxpQkFBQSxRQUFBLFNBQUFFLEdBakJEQSxFQUFFVixlQUFjLEVBQ0osQ0FBQ3ZELFNBQVVHLFNBQVVDLGdCQUFpQkMsTUFBT3lCLFlBQ3JEUixRQUFRLFNBQUNzQyxHQUNaQSxFQUFRckMsTUFBUSxHQUNoQkgsU0FBU3dDLENBQU8sQ0FDakIsQ0FBQyxDQUNGLENBQUMsRUFFRHRELFFBQVF5RCxpQkFBaUIsUUFBUyxTQUFDRSxHQUNsQ0EsRUFBRVYsZUFBYyxFQUNoQlMsVUFBVSxDQUFDaEUsU0FBVUcsU0FBVUMsZ0JBQWlCQyxNQUFNLEVBRXREaUMsWUFBVyxDQUNaLENBQUMsRUFFRDVCLE1BQU1SLGNBQWMsUUFBUSxFQUFFNkQsaUJBQWlCLFFBQVMsV0FDdkRyRCxNQUFNUyxVQUFVRSxPQUFPLFlBQVksQ0FDcEMsQ0FBQyIsImZpbGUiOiJmb3JtVmFsaWRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybmFtZVwiKTtcclxuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xyXG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkMlwiKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xyXG5jb25zdCBzZW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZW5kXCIpO1xyXG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIik7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xyXG5jb25zdCB0ZXJtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVybXNcIik7XHJcbmNvbnN0IGNoZWNrVGVybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrVGVybXNcIik7XHJcbmNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDkwXCI7XHJcblxyXG5jb25zdCBzaG93RXJyID0gKGlucHV0LCBtc2cpID0+IHtcclxuXHRjb25zdCBmb3JtQm94ID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRjb25zdCBlcnJvck1zZyA9IGZvcm1Cb3gucXVlcnlTZWxlY3RvcihcIi5lcnJvci10ZXh0XCIpO1xyXG5cdGZvcm1Cb3guY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG5cdGVycm9yTXNnLnRleHRDb250ZW50ID0gbXNnO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJFcnIgPSAoaW5wdXQpID0+IHtcclxuXHRjb25zdCBmb3JtQm94ID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRmb3JtQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrRm9ybSA9IChpbnB1dCkgPT4ge1xyXG5cdGlucHV0LmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRpZiAoZWwudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcblx0XHRcdHNob3dFcnIoZWwsIFwiRW50ZXIgXCIgKyBlbC5wbGFjZWhvbGRlci50b0xvd2VyQ2FzZSgpICsgXCIgIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNsZWFyRXJyKGVsKTtcclxuXHRcdFx0aWYgKGVsID09PSB1c2VybmFtZSkge1xyXG5cdFx0XHRcdGNoZWNrTGVuZ2h0KHVzZXJuYW1lLCAzKTtcclxuXHRcdFx0fSBlbHNlIGlmIChlbCA9PT0gcGFzc3dvcmQpIHtcclxuXHRcdFx0XHRjaGVja0xlbmdodChwYXNzd29yZCwgOCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoZWwgPT09IGNvbmZpcm1QYXNzd29yZCkge1xyXG5cdFx0XHRcdGNoZWNrUGFzc3dvcmQocGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCk7XHJcblx0XHRcdFx0Y2hlY2tMZW5naHQocGFzc3dvcmQsIDgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGVsID09PSBlbWFpbCkge1xyXG5cdFx0XHRcdGNoZWNrRW1haWwoZW1haWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0aWYgKCF0ZXJtcy5jaGVja2VkKSB7XHJcblx0XHRzaG93RXJyKGNoZWNrVGVybXMsIFwiQ29uZmlybSB0ZXJtcyBhbmQgY29uZGl0aW9ucyFcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNsZWFyRXJyKGNoZWNrVGVybXMpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGNoZWNrTGVuZ2h0ID0gKGlucHV0LCBtaW4pID0+IHtcclxuXHRpZiAoaW5wdXQudmFsdWUubGVuZ3RoIDwgbWluKSB7XHJcblx0XHRzaG93RXJyKFxyXG5cdFx0XHRpbnB1dCxcclxuXHRcdFx0YCR7aW5wdXQucGxhY2Vob2xkZXJ9IG11c3QgY29udGFpbiBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycyFgXHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGNoZWNrUGFzc3dvcmQgPSAoaW5wdXQxLCBpbnB1dDIpID0+IHtcclxuXHRpZiAoaW5wdXQxLnZhbHVlICE9PSBpbnB1dDIudmFsdWUpIHtcclxuXHRcdHNob3dFcnIoaW5wdXQyLCBcIlBhc3N3b3JkcyBhcmUgZGlmZmVyZW50IVwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0Vycm9ycyA9ICgpID0+IHtcclxuXHRjb25zdCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tYm94XCIpO1xyXG5cdGxldCBlcnJvckNvdW50ID0gMDtcclxuXHRhbGxJbnB1dHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikpIHtcclxuXHRcdFx0ZXJyb3JDb3VudCsrO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRpZiAoZXJyb3JDb3VudCA9PT0gMCkge1xyXG5cdFx0Y29uc3QgdXNlckRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcclxuXHRcdFx0ZW1haWw6IGVtYWlsLnZhbHVlLFxyXG5cdFx0XHRwYXNzd29yZDogcGFzc3dvcmQudmFsdWUsXHJcblx0XHR9O1xyXG5cdFx0cmVnaXN0ZXJVc2VyKHVzZXJEYXRhKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0VtYWlsID0gKGlucHV0KSA9PiB7XHJcblx0Y29uc3QgcmUgPVxyXG5cdFx0L14oKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEtM31cXC5bMC05XXsxLTN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17MiwzfSkpJC87XHJcblx0aWYgKHJlLnRlc3QoaW5wdXQudmFsdWUpKSB7XHJcblx0XHRjbGVhckVycihlbWFpbCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHNob3dFcnIoaW5wdXQsIFwiSW52YWxpZCBlbWFpbCFcIik7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgcmVnaXN0ZXJVc2VyID0gKHVzZXJEYXRhKSA9PiB7XHJcblx0ZmV0Y2goYCR7dXJsfS91c2VyL3JlZ2lzdGVyYCwge1xyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdFx0cG9wdXAuY2xhc3NMaXN0LmFkZChcInNob3ctcG9wdXBcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cG9wdXAucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQgPSBcIlVzZXIgZXhpc3QuIExvZyBpbiFcIjtcclxuXHRcdFx0XHRwb3B1cC5jbGFzc0xpc3QuYWRkKFwic2hvdy1wb3B1cFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLnRva2VuKTtcclxuXHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJuYW1lLnZhbHVlKTtcclxuXHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0cG9wdXAucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQgPSBcIlJlZ2lzdHJhdGlvbiBmYWlsZWRcIjtcclxuXHRcdFx0cG9wdXAuY2xhc3NMaXN0LmFkZChcInNob3ctcG9wdXBcIik7XHJcblx0XHR9KTtcclxufTtcclxuXHJcbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCBhcnIgPSBbdXNlcm5hbWUsIHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQsIGVtYWlsLCBjaGVja1Rlcm1zXTtcclxuXHRhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0ZWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblx0XHRjbGVhckVycihlbGVtZW50KTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5zZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjaGVja0Zvcm0oW3VzZXJuYW1lLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkLCBlbWFpbF0pO1xyXG5cclxuXHRjaGVja0Vycm9ycygpO1xyXG59KTtcclxuXHJcbnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1wb3B1cFwiKTtcclxufSk7XHJcbiJdfQ==
