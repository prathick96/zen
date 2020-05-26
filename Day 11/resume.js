//main div tag
var maindiv = document.createElement("div");
maindiv.setAttribute("name", "maindiv");
document.body.appendChild(maindiv);

//link to css file
var link = document.createElement("link");
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'resume.css';

//link to material-icons
var iconLink = document.createElement("link");
iconLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons"
iconLink.rel="stylesheet";


//head tag
var hd = document.createElement("div");
hd.className = "hdiv"
hd.appendChild(link);

// img avatar
var imgAvatar = document.createElement("img");
imgAvatar.src = "img.jpg"
imgAvatar.className = "avatr"
imgAvatar.appendChild(link);

maindiv.appendChild(hd);
hd.appendChild(imgAvatar);

//name tag
var htitle = document.createElement("div");
htitle.className = "htitle"
htitle.innerHTML = "Padmanabhan E";
htitle.appendChild(link);
maindiv.appendChild(htitle);

//white space
var whitediv = document.createElement("div");
whitediv.className = "whiteSpace";
whitediv.appendChild(link);
maindiv.appendChild(whitediv);

//grey space
var greydiv = document.createElement("div");
greydiv.className = "greySpace";
greydiv.appendChild(link);
maindiv.appendChild(greydiv);

//address
var addr = document.createElement("p");
addr.style.textAlign = "center";
addr.innerHTML = "Sipcot IT, Chennai 103| +91 9791528298 | paddhu.xd96@gmail.com"
maindiv.appendChild(addr);

//left side div
var leftDiv = document.createElement("div");
leftDiv.className = "split left";
leftDiv.setAttribute("name", "left");
leftDiv.appendChild(link);
document.body.appendChild(leftDiv);

//right side div
var rightdiv = document.createElement("div");
rightdiv.className = "split right";
rightdiv.setAttribute("name", "right");
rightdiv.appendChild(link);
document.body.appendChild(rightdiv);

//left side

var profileIcon = document.createElement("span");
profileIcon.className = "material-icons"
profileIcon.appendChild(iconLink);
profileIcon.innerHTML = "account_box";

var profile = document.createElement("h2");
profile.className ="title";
profile.innerHTML = "Profile";
profile.appendChild(profileIcon);

leftDiv.appendChild(profile);

var para = document.createElement("p");
para.className = "txt";
para.innerHTML = "Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a full-stack developer. I am ambitious, adventurous, assiduous, animated, and an a Iliteration advocate."

leftDiv.appendChild(para);

var skillsIcon = document.createElement("span");
skillsIcon.className = "material-icons"
skillsIcon.appendChild(iconLink);
skillsIcon.innerHTML = "build";

var skills = document.createElement("h2");
skills.className ="title";
skills.innerHTML = "Skills";
skills.appendChild(skillsIcon);

leftDiv.appendChild(skills);

// Skills goes here //
//skills
var divJava = document.createElement("div");
divJava.className = "container";
var java = document.createElement("div");
java.className = "skills java";
java.innerHTML = "80%"
divJava.appendChild(java);

var divhtml = document.createElement("div");
divhtml.className = "container";
var html = document.createElement("div");
html.className = "skills html";
html.innerHTML = "70%"
divhtml.appendChild(html);

var divcss = document.createElement("div");
divcss.className = "container";
var css = document.createElement("div");
css.className = "skills css";
css.innerHTML = "65%"
divcss.appendChild(css);

var divPython = document.createElement("div");
divPython.className = "container";
var python = document.createElement("div");
python.className = "skills python";
python.innerHTML = "70%"
divPython.appendChild(python);

var divtw = document.createElement("div");
divtw.className = "container";
var tw = document.createElement("div");
tw.className = "skills tw";
tw.innerHTML = "80%"
divtw.appendChild(tw);

var divlead = document.createElement("div");
divlead.className = "container";
var lead = document.createElement("div");
lead.className = "skills lead";
lead.innerHTML = "60%"
divlead.appendChild(lead);


//tech
var tableEl = document.createElement("table");
tableEl.style.border = "1px transparent";
tableEl.style.width = "50%"

trow0 = tableEl.insertRow(); 
var thead1 = trow0.insertCell(0);
thead1.setAttribute("colspan","2");
thead1.setAttribute("style","font-weight:bold; text-align:center;");
thead1.innerHTML = "Technical Skills";

trow1 = tableEl.insertRow();  
var cell1 = trow1.insertCell(0);
cell1.setAttribute("style","width:50%");
cell1.setAttribute("style","font-weight:bold");
cell1.innerHTML = "Java";
var cell11 = trow1.insertCell(1);
cell11.setAttribute("style","width:50%");
cell11.appendChild(divJava);

trow2 = tableEl.insertRow();  
var cell2 = trow2.insertCell(0);
cell2.setAttribute("style","width:50%");
cell2.setAttribute("style","font-weight:bold");
cell2.innerHTML = "HTML";
var cell22 = trow2.insertCell(1);
cell22.setAttribute("style","width:50%");
cell22.appendChild(divhtml);

trow3 = tableEl.insertRow();  
var cell3 = trow3.insertCell(0);
cell3.setAttribute("style","width:50%");
cell3.setAttribute("style","font-weight:bold");
cell3.innerHTML = "CSS";
var cell33 = trow3.insertCell(1);
cell33.appendChild(divcss);

trow4 = tableEl.insertRow();  
var cell4 = trow4.insertCell(0);
cell4.innerHTML = "Python";
cell4.setAttribute("style","width:50%");
cell4.setAttribute("style","font-weight:bold");
var cell44 = trow4.insertCell(1);
cell44.appendChild(divPython);

th1 = tableEl.insertRow(); 
var thead2 = th1.insertCell(0);
thead2.setAttribute("colspan","2");
thead2.setAttribute("style","font-weight:bold; text-align:center;");
thead2.innerHTML = "Additional Skills";

trow5 = tableEl.insertRow(); 
var cell5 = trow5.insertCell(0);
cell5.setAttribute("style","width:50%");
cell5.setAttribute("style","font-weight:bold");
cell5.innerHTML = "Team Work";
var cell55 = trow5.insertCell(1);
cell55.setAttribute("style","width:50%");
cell55.appendChild(divtw);

trow6 = tableEl.insertRow(); 
var cell6 = trow6.insertCell(0);
cell6.setAttribute("style","width:50%");
cell6.setAttribute("style","font-weight:bold");
cell6.innerHTML = "Leadreship";
var cell66 = trow6.insertCell(1);
cell66.setAttribute("style","width:50%");
cell66.appendChild(divlead);

leftDiv.appendChild(tableEl);

//Achievements
var achieveIcon = document.createElement("span");
achieveIcon.className = "material-icons"
achieveIcon.appendChild(iconLink);
achieveIcon.innerHTML = "emoji_events";

var ach = document.createElement("h2");
ach.className ="title";
ach.innerHTML = "Achievements";
ach.appendChild(achieveIcon);
rightdiv.appendChild(ach);

var divach = document.createElement("div");
var lbach = document.createElement("label");
lbach.style.fontWeight = "bold";
lbach.innerHTML = "Ace Award";
divach.appendChild(lbach);
rightdiv.appendChild(divach);

var divachul = document.createElement("div");
var acul = document.createElement("ul");
var acli1 = document.createElement("li");
acli1.appendChild(link);
acli1.innerHTML = "For remarkable overall performance in the first quarter Q1 2020"
var acli2 = document.createElement("li");
acli2.appendChild(link);
acli2.innerHTML = "I managed to replace a G6 with hardwork and dedication to become the lead of a 3 member team"
acul.appendChild(acli1);
acul.appendChild(acli2);
divachul.appendChild(acul);
rightdiv.appendChild(divachul);

// Right side

//work
var workIcon = document.createElement("span");
workIcon.className = "material-icons"
workIcon.appendChild(iconLink);
workIcon.innerHTML = "emoji_events";

var work = document.createElement("h2");
work.className ="title";
work.innerHTML = "Work Experience";
work.appendChild(workIcon);
leftDiv.appendChild(work);

var tabWork = document.createElement("table");
tabWork.style.border = "1px transparent";
tabWork.style.width = "50%";

var wrw = tabWork.insertRow();  
var exp = wrw.insertCell(0);
exp.setAttribute("style","font-weight:bold");
exp.innerHTML="Associate Software Engineer";
var dat = wrw.insertCell(1);
dat.setAttribute("style","color: #888888; text-align:center; width:50%; font-weight:bold");
dat.innerHTML="08/2018 - Present";

leftDiv.appendChild(tabWork);

var divworkul = document.createElement("div");
var wul = document.createElement("ul");
var wli1 = document.createElement("li");
wli1.appendChild(link);
wli1.innerHTML = "Responsible for maintaining the Payment gateway platform and Travel insurance application."
var wli2 = document.createElement("li");
wli2.appendChild(link);
wli2.innerHTML = "Experienced in deployment and implementation of quarterly updates in the production environment"
wul.appendChild(wli1);
wul.appendChild(wli2);
divworkul.appendChild(wul);
leftDiv.appendChild(divworkul);

//education
var eduIcon = document.createElement("span");
eduIcon.className = "material-icons"
eduIcon.appendChild(iconLink);
eduIcon.innerHTML = "menu_book";

var edu = document.createElement("h2");
edu.className ="title";
edu.innerHTML = "Education";
edu.appendChild(eduIcon);
rightdiv.appendChild(edu);

var tabEdu = document.createElement("table");
tabEdu.style.border = "1px transparent";
tabEdu.style.width = "50%";

var erw = tabEdu.insertRow();  
var crs = erw.insertCell(0);
crs.setAttribute("style","font-weight:bold");
crs.innerHTML="Computer Science and Engineering";
var dat = erw.insertCell(1);
dat.setAttribute("style","color: #888888; text-align:center; width:50%; font-weight:bold");
dat.innerHTML="2014 - 2018";

rightdiv.appendChild(tabEdu);

var diveduul = document.createElement("div");
var eul = document.createElement("ul");
var eli1 = document.createElement("li");
eli1.appendChild(link);
eli1.innerHTML = "Scored 8.27 out of 10 CGPA in B.Tech., Computer science and Engineering."
var eli2 = document.createElement("li");
eli2.appendChild(link);
eli2.innerHTML = "Major fields of interests are Web development and data structures and algorithm"
eul.appendChild(eli1);
eul.appendChild(eli2);
diveduul.appendChild(eul);
rightdiv.appendChild(diveduul);

//Project
var projIcon = document.createElement("span");
projIcon.className = "material-icons"
projIcon.appendChild(iconLink);
projIcon.innerHTML = "menu_book";

var proj = document.createElement("h2");
proj.className ="title";
proj.innerHTML = "Project Experience";
proj.appendChild(projIcon);
rightdiv.appendChild(proj);

var tabPro = document.createElement("table");
tabPro.style.border = "1px transparent";
tabPro.style.width = "50%";

var prw = tabPro.insertRow();  
var prs = prw.insertCell(0);
prs.setAttribute("style","font-weight:bold");
prs.innerHTML="Intelligent Multi- Platform cloud application for online survey";
var prw1 = tabPro.insertRow();
var dat = prw1.insertCell(0);
dat.setAttribute("style","color: #888888; width:50%; font-weight:bold");
dat.innerHTML="Feb 2016 – Apr 2016";

rightdiv.appendChild(tabPro);

var diveduul = document.createElement("div");
var eul = document.createElement("ul");
var eli1 = document.createElement("li");
eli1.appendChild(link);
eli1.innerHTML = "A complete product for creating and attempting surveys using a web portal and mobile app"
var eli2 = document.createElement("li");
eli2.appendChild(link);
eli2.innerHTML = "The web portal allows clients to create and manage surveys and users"
var eli3 = document.createElement("li");
eli3.appendChild(link);
eli3.innerHTML = "The mobile application for Android Operating System allows users to answer the surveys by logging in with the credentials given by the client."
eul.appendChild(eli1);
eul.appendChild(eli2);
eul.appendChild(eli3);
diveduul.appendChild(eul);
rightdiv.appendChild(diveduul);