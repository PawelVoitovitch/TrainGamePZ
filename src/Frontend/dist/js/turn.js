"use strict";var turnArr=[],firstPlayerFromURL=urlParams.get("firstTurn"),firstPlayer=atob(firstPlayerFromURL),turnPopup=document.querySelector(".turnPopup"),turnText=document.querySelector(".tableName-name"),showTurn=document.querySelector(".whoseTurn"),turn=(turnArr.push(firstPlayer),console.log(turnArr),function(){playerName!==turnArr[0]?(turnText.textContent="Now it's the turn of: ".concat(turnArr[0]),turnText.style.color="gold",turnPopup.style.display="flex",showTurn.textContent="Now it's the turn of: ".concat(turnArr[0])):(turnText.textContent="Your Turn",turnText.style.color="lightGreen",turnPopup.style.display="none",showTurn.style.display="none")});turn();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1cm4uanMiXSwibmFtZXMiOlsidHVybkFyciIsImZpcnN0UGxheWVyRnJvbVVSTCIsInVybFBhcmFtcyIsImdldCIsImF0b2IiLCJmaXJzdFBsYXllciIsImRvY3VtZW50IiwidHVyblBvcHVwIiwicXVlcnlTZWxlY3RvciIsInR1cm4iLCJ0dXJuVGV4dCIsInB1c2giLCJwbGF5ZXJOYW1lIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsInNob3dUdXJuIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFJQSxRQUFVLEdBQ1JDLG1CQUFxQkMsVUFBVUMsSUFBSSxXQUFXLEVBRGhESCxZQUFZSSxLQUFBSCxrQkFBQSxFQUNWQSxVQUFBQSxTQUFxQkMsY0FBYyxZQUFZLEVBQy9DRyxTQUFXQyxTQUFRTCxjQUFBQSxpQkFBbUIsRUFDdENNLFNBQVlELFNBQVNFLGNBQWMsWUFBYSxFQU9oREMsTUFOTlQsUUFBTVUsS0FBUUwsV0FBWUcsRUFFMUJSLFFBQVFXLElBQUlYLE9BQUNLLEVBSUEsV0FDWk8sYUFBY1osUUFBWSxJQUN6QlUsU0FBQUEsWUFBU0cseUJBQUFBLE9BQVdiLFFBQUEsRUFBNEJBLEVBQ2hEVSxTQUFBQSxNQUFTSSxNQUFXLE9BQ3BCUCxVQUFBQSxNQUFVTyxRQUFhLE9BQ3ZCQyxTQUFBQSxZQUFTRix5QkFBQUEsT0FBV2IsUUFBQSxFQUE0QkEsSUFFaERVLFNBQUFBLFlBQVNHLFlBQ1RILFNBQUFBLE1BQVNJLE1BQVcsYUFDcEJQLFVBQUFBLE1BQVVPLFFBQWEsT0FDdkJDLFNBQUFBLE1BQVNELFFBQWEsT0FFeEIsR0FFQUwsS0FBSSIsImZpbGUiOiJ0dXJuLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHR1cm5BcnIgPSBbXTtcclxuY29uc3QgZmlyc3RQbGF5ZXJGcm9tVVJMID0gdXJsUGFyYW1zLmdldChcImZpcnN0VHVyblwiKTtcclxuY29uc3QgZmlyc3RQbGF5ZXIgPSBhdG9iKGZpcnN0UGxheWVyRnJvbVVSTCk7XHJcbmNvbnN0IHR1cm5Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVyblBvcHVwXCIpO1xyXG5jb25zdCB0dXJuVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVOYW1lLW5hbWVcIik7XHJcbmNvbnN0IHNob3dUdXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9zZVR1cm5cIik7XHJcbnR1cm5BcnIucHVzaChmaXJzdFBsYXllcik7XHJcblxyXG5jb25zb2xlLmxvZyh0dXJuQXJyKTtcclxuXHJcbmNvbnN0IHR1cm4gPSAoKSA9PiB7XHJcblx0aWYgKHBsYXllck5hbWUgIT09IHR1cm5BcnJbMF0pIHtcclxuXHRcdHR1cm5UZXh0LnRleHRDb250ZW50ID0gYE5vdyBpdCdzIHRoZSB0dXJuIG9mOiAke3R1cm5BcnJbMF19YDtcclxuXHRcdHR1cm5UZXh0LnN0eWxlLmNvbG9yID0gXCJnb2xkXCI7XHJcblx0XHR0dXJuUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cdFx0c2hvd1R1cm4udGV4dENvbnRlbnQgPSBgTm93IGl0J3MgdGhlIHR1cm4gb2Y6ICR7dHVybkFyclswXX1gO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0dXJuVGV4dC50ZXh0Q29udGVudCA9IGBZb3VyIFR1cm5gO1xyXG5cdFx0dHVyblRleHQuc3R5bGUuY29sb3IgPSBcImxpZ2h0R3JlZW5cIjtcclxuXHRcdHR1cm5Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRzaG93VHVybi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fVxyXG59O1xyXG5cclxudHVybigpO1xyXG4iXX0=
