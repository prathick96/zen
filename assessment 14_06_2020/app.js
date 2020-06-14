document.body.setAttribute("background", "bg.jpg")

var logo = document.createElement("img");
logo.setAttribute("src", "ttt.gif");
logo.style = "margin-top: 15px; margin-left:39%; width:300px; height:75px;";
document.body.appendChild(logo);

var mainDiv = document.createElement("div");
mainDiv.className = "div";
mainDiv.style = "background: transparent";
document.body.appendChild(mainDiv);

var table = document.createElement("table");
table.className = "table"
mainDiv.appendChild(table);

var tbody = document.createElement("tbody");
table.appendChild(tbody)

var row1 = document.createElement("tr");
tbody.appendChild(row1);

var td1 = document.createElement("td");
td1.className = "td";
var inp1 = document.createElement("input");
inp1.className = "input";
inp1.id = "1"
inp1.type = "button";
inp1.setAttribute("onclick", "btnClick(1)");
td1.appendChild(inp1);
row1.appendChild(td1);

var td2 = document.createElement("td");
td2.className = "td";
var inp2 = document.createElement("input");
inp2.className = "input"
inp2.id = "2"
inp2.type = "button";
inp2.setAttribute("onclick", "btnClick(2)");
td2.appendChild(inp2);
row1.appendChild(td2);

var td3 = document.createElement("td");
td3.className = "td";
var inp3 = document.createElement("input");
inp3.className = "input"
inp3.id = "3"
inp3.type = "button";
inp3.setAttribute("onclick", "btnClick(3)");
td3.appendChild(inp3);
row1.appendChild(td3);

var row2 = document.createElement("tr");
tbody.appendChild(row2);

var td4 = document.createElement("td");
td4.className = "td";
var inp4 = document.createElement("input");
inp4.className = "input"
inp4.id = "4";
inp4.type = "button";
inp4.setAttribute("onclick", "btnClick(4)");
td4.appendChild(inp4);
row2.appendChild(td4);

var td5 = document.createElement("td");
td5.className = "td";
var inp5 = document.createElement("input");
inp5.className = "input";
inp5.id = "5"
inp5.type = "button";
inp5.setAttribute("onclick", "btnClick(5)");
td5.appendChild(inp5);
row2.appendChild(td5);

var td6 = document.createElement("td");
td6.className = "td";
var inp6 = document.createElement("input");
inp6.className = "input";
inp6.id = "6"
inp6.type = "button";
inp6.setAttribute("onclick", "btnClick(6)");
td6.appendChild(inp6);
row2.appendChild(td6);

var row3 = document.createElement("tr");
tbody.appendChild(row3);

var td7 = document.createElement("td");
td7.className = "td";
var inp7 = document.createElement("input");
inp7.className = "input";
inp7.id = "7"
inp7.type = "button";
inp7.setAttribute("onclick", "btnClick(7)");
td7.appendChild(inp7);
row3.appendChild(td7);

var td8 = document.createElement("td");
td8.className = "td";
var inp8 = document.createElement("input");
inp8.className = "input";
inp8.id = "8";
inp8.type = "button";
inp8.setAttribute("onclick", "btnClick(8)");
td8.appendChild(inp8);
row3.appendChild(td8);

var td9 = document.createElement("td");
td9.className = "td";
var inp9 = document.createElement("input");
inp9.className = "input"
inp9.id = "9"
inp9.type = "button";
inp9.setAttribute("onclick", "btnClick(9)");
td9.appendChild(inp9);
row3.appendChild(td9);

var resetBtn = document.createElement("button");
resetBtn.className = "buttonReset";
resetBtn.innerHTML = "Reset";
resetBtn.id = "reset";
resetBtn.setAttribute("onclick", "gameSetup()");
table.insertAdjacentElement("afterend", resetBtn);

var popUp = document.createElement("section");
popUp.id="popup";
var p = document.createElement("p");
p.id="text";
var popupBtn = document.createElement("button");
popupBtn.setAttribute("id", "popupbutton");
popupBtn.setAttribute("onclick", "gameSetup()");
popupBtn.innerHTML = "Continue";
popUp.appendChild(p);
p.insertAdjacentElement("afterend", popupBtn);

resetBtn.insertAdjacentElement("afterend", popUp);

var overlaySection = document.createElement("section");
overlaySection.id="overlay";
popUp.insertAdjacentElement("afterend", overlaySection)

var buttonXO = "O";

function gameSetup() {
    var b1 = document.getElementById("1");
    b1.value="";
    b1.disabled=false;
    var b2 = document.getElementById("2");
    b2.value="";
    b2.disabled=false;
    var b3 = document.getElementById("3");
    b3.value="";
    b3.disabled=false;
    var b4 = document.getElementById("4");
    b4.value="";
    b4.disabled=false;
    var b5 = document.getElementById("5");
    b5.value="";
    b5.disabled=false;
    var b6 = document.getElementById("6");
    b6.value="";
    b6.disabled=false;
    var b7 = document.getElementById("7");
    b7.value="";
    b7.disabled=false;
    var b8 = document.getElementById("8");
    b8.value="";
    b8.disabled=false;
    var b9 = document.getElementById("9");
    b9.value="";
    b9.disabled=false;
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
}

function setBtnValue() {
    var b1 = document.getElementById("1");
    b1.disabled = true;
    var b2 = document.getElementById("2");
    b2.disabled = true;
    var b3 = document.getElementById("3");
    b3.disabled = true;
    var b4 = document.getElementById("4");
    b4.disabled = true;
    var b5 = document.getElementById("5");
    b5.disabled = true;
    var b6 = document.getElementById("6");
    b6.disabled = true;
    var b7 = document.getElementById("7");
    b7.disabled = true;
    var b8 = document.getElementById("8");
    b8.disabled = true;
    var b9 = document.getElementById("9");
    b9.disabled = true;    
}

function winner(win) {
    setBtnValue();
    
    popuptext = document.getElementById("text");
    popuptext.innerHTML = win + " wins.";
    
    var pop = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
    pop.style.visibility = "visible";
    overlay.style.visibility ="visible"
}

function xoLogic() {
    
    var b1 = document.getElementById("1").value;
    var b2 = document.getElementById("2").value;
    var b3 = document.getElementById("3").value;
    var b4 = document.getElementById("4").value;
    var b5 = document.getElementById("5").value;
    var b6 = document.getElementById("6").value;
    var b7 = document.getElementById("7").value;
    var b8 = document.getElementById("8").value;
    var b9 = document.getElementById("9").value;
    
    // --- 1 2 3
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        winner(b1);
    }
    // --- 4 5 6
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        winner(b4);
    }
    // --- 7 8 9 
    else if (((b7=="X") || (b7=="O")) && ((b7 == b8) && (b8 == b9))){
        winner(b7);
    }
    // |-- 1 4 7
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        winner(b1);
    }
    // -|- 2 5 8
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
      winner(b2);
    }
    // --| 3 6 9
    else if (((b3=="X") || (b3=="O")) && ((b3 == b6) && (b6 == b9))){
        winner(b3);
    }
    // -\- 1 5 9
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
      winner(b1);
    }
    // -/- 3 5 7
    else if (((b3=="X") || (b3=="O")) && ((b3 == b5) && (b5 == b7))){
      winner(b3);
    }
    
}

function setButton(x, buttonXO) {
     if (x==1) {
     var button = document.getElementById("1");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==2) {
     var button = document.getElementById("2");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==3) {
     var button = document.getElementById("3");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==4) {
     var button = document.getElementById("4");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==5) {
     var button = document.getElementById("5");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==6) {
     var button = document.getElementById("6");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==7) {
     var button = document.getElementById("7");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==8) {
     var button = document.getElementById("8");
     button.value = buttonXO;
     button.disabled=true;
     }
     else if (x==9) {
     var button = document.getElementById("9");
     button.value = buttonXO;
     button.disabled=true;
     }
     xoLogic();
}

function btnClick(button) {
    if (buttonXO=="X") {
    buttonXO="O";
    setButton(button, buttonXO);
    }
    else if (buttonXO=="O") {
    buttonXO="X";
    setButton(button, buttonXO);
    }
}