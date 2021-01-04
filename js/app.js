function doscript(){

'use strict'
var name = prompt("whats your name?")
var answer1=prompt("i am a doctor ? Y/N ")
var answer2=prompt("my name is ayoub ? Y/N ")
var answer3=prompt("I dont know anything about unity engine ? Y/N ")
var answer4=prompt("I am a game developer ? Y/N ")
var answer5=prompt("its not ayoub website ? Y/N ")
var grade=0;
if(answer1.toLowerCase()=="n" ||answer1.toLowerCase()=="no" ){

    grade++;
} if (answer2.toLowerCase()=="y"||answer2.toLowerCase()=="yes"){
    grade++;
} if (answer3.toLowerCase()=="n" || answer3.toLowerCase()=="no"){
    grade++;
} if (answer4.toLowerCase()=="y" || answer4.toLowerCase()=="yes"){
    grade++;
}if (answer5.toLowerCase()=="n" || answer5.toLowerCase()=="no"){
    grade++;
}
//console.log(grade);
alert( name+ " grade "+grade +"/5");


document.getElementById("name").innerHTML="Hello MR  "+name;

}