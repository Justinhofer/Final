var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list =[];
buttonEle.addEventListener("click", function () {
  console.log (inputPass.value);
  if ( inputName.value == "teacherCool101") {
      if (inputPass.value == "StupidPassword345"){
    errorDiv.innerHTML = "correct";
    list.push({
      name: inputName.value
    });
      window.location.href="main.html"
      }
      else {
          errorDiv.innerHTML = "Password Incorrect";
      }
  }
  else {
    errorDiv.innerHTML ="Username Incorrect";
  }
  console.log(list);
  
});