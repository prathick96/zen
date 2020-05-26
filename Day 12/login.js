var form = document.createElement("form");
form.name = "myForm";
document.body.appendChild(form);

var divForm = document.createElement("div");
divForm.className = "divForm"
form.appendChild(divForm);

var tableEl = document.createElement("table");
tableEl.className = "table";

var trow1 = tableEl.insertRow();  

trow1.insertCell(0).innerHTML = "Username";

var inpUser = document.createElement("input");
inpUser.type = "text";
inpUser.placeholder = "Username";
inpUser.id = "username";
inpUser.autocomplete = "off";
inpUser.required;

trow1.insertCell(1).appendChild(inpUser);

var trow2 = tableEl.insertRow();  

trow2.insertCell(0).innerHTML = "Password";

var inpPass = document.createElement("input");
inpPass.type = "password";
inpPass.placeholder = "Password";
inpUser.autocomplete = "off";
inpPass.id = "password";
inpPass.required;

trow2.insertCell(1).appendChild(inpPass);

divForm.appendChild(tableEl);

var btnDiv = document.createElement("div");
btnDiv.align = "center";
var button = document.createElement("input");
button.id = "btn";
button.style.width = "100px"
button.className = "button";
button.type = "submit";
button.innerHTML = "Submit";
btnDiv.appendChild(button);

divForm.appendChild(btnDiv);

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){ return (verifyNull() && verifySuccess());});


function verifyNull(){
    var isValid = true;
    if(!document.getElementById('username').value.trim().length){
        isValid = false;
        alert('Please enter username');
    }
    else if(!document.getElementById('password').value.trim().length){
    isValid = false;
        alert('Please enter password');
    }
  return isValid;
}
function verifySuccess(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var val = false;
    if(name === "prathick96" && pass === "pass123"){
        val = true;
        alert("Login successful!")
    } else{
        alert("Username or password is incorrect!")
    }
   return val;
}