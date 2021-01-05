function startgamearray(){
"use strict"
var gradest=0;

var guesanswer1 =prompt("What my favourit web applications ?")
var ganswer1=["maxioma","cgtrade","turboSquid","unityfreaks","udemi","facebook"];

while(!ganswer1.includes(guesanswer1.toLowerCase())){
    alert("wrong answer");
    guesanswer1 =prompt("What my favourit web applications ?")
}
if(ganswer1.includes(guesanswer1.toLowerCase())){
    alert("correct answer possible answer maxioma cgtrade"+" turboSquid"+" unityfreaks" +" udemi"+" facebook");
gradest++;
}

    


var guesanswer2 =prompt("What my favourit programs ?")
var ganswer2=["3ds max","unity engine","photoshop","after effects","adobe","paint"];

while(!ganswer2.includes(guesanswer2.toLowerCase())){
    alert("wrong answer");
    var guesanswer2 =prompt("What my favourit web programes ?")
}
if (ganswer2.includes(guesanswer2.toLowerCase()))
{
alert("correct answer possible answer  3ds max" +" unity engine"+" photoshop"+" after effects"+" adobe"+" paint");
gradest++;

}
var guesanswer3 =prompt("What my favourit colors ?")
var ganswer3=["blue","grey","white","red","black","green"];

while(!ganswer3.includes(guesanswer3.toLowerCase())){
    alert("wrong answer");
    var guesanswer3 =prompt("What my favourit colors ?")
}
if (!ganswer3.includes(guesanswer3.toLowerCase()))
{
alert("correct answer possible answer "+" blue"+" grey"+" white"+" red"+" black"+" green");
gradest++;

}

var guesanswer4=prompt("what my favorite team ?")
var ganswer4=["barcelona","inter milan","argentina","jordan","brazil","urguay"];

while(!ganswer4.includes(guesanswer4.toLowerCase()))
{
    alert("wrong answer");
    var guesanswer4=prompt("what my favorite team ?")
}
if (!ganswer4.includes(guesanswer4.toLowerCase()))
{
alert("correct answer possible answer "+" barcelona"+" inter milan"+" argentina"+" jordan"+" brazil"+" urguay");
gradest++;

}

var guesanswer5=prompt("what my favorite sports ?")
var ganswer5=["soccer","body building","swimming","bing bong","billiard","basketball"];
while(!ganswer5.includes(guesanswer5.toLowerCase())){
    alert("wrong answer");
    var guesanswer5=prompt("what my favorite sports ?")
}
if (ganswer5.includes(guesanswer5.toLowerCase()))
{
alert("correct answer possible answer "+" soccer"+" body building"+" bing bong"+" billiard"+" basketball"+" swimming");
gradest++;

}
var guesanswer6=prompt("what my favorite cars ?")
var ganswer6=["bmw","marcedes","porshe","firari","cadilak","aston martin"];


while(!ganswer6.includes(guesanswer6.toLowerCase())){
    alert("wrong answer");
    var guesanswer6=prompt("what my favorite cars ?")
}
if (ganswer6.includes(guesanswer6.toLowerCase()))
{
alert("correct answer possible answer "+" bmw"+" marcedes"+" porshe"+" firari"+" cadilak"+" aston martin");
gradest++;

}
var guesanswer7=prompt(" what element i used for my website ?")
var ganswer7=["img","h1","p","nav","ol","border"];


while(!ganswer7.includes(guesanswer7.toLowerCase())){
    alert("wrong answer");
    var guesanswer7=prompt(" what element i used for my website ?")
}
if (ganswer7.includes(guesanswer7.toLowerCase()))
{
alert("correct answer possible answer "+" img"+" h1"+" nav"+" firari"+" ol"+" border");
gradest++;

}
alert("your grade "+gradest+"/7");
}
