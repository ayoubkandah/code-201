
function doscript(){
      'use strict'
      var name = prompt("whats your name?")
      var grade=0;
      var answer1=prompt("i am a doctor ? Y/N ")
while(answer1.toLowerCase()!=="n" && !answer1.toLowerCase()!=="no")
{
    alert("wrong answer")
    var answer1=prompt("i am a doctor ? Y/N ")

}

if(answer1.toLowerCase()=="n" ||answer1.toLowerCase()=="no" ){

    grade++;
}
var answer2=prompt("my name is ayoub ? Y/N ")
 while(answer2.toLowerCase()!=="y" && answer2.toLowerCase()!=="yes"){
    alert("wrong answer")
    answer2=prompt("my name is ayoub ? Y/N ")

}
if (answer2.toLowerCase()=="y"||answer2.toLowerCase()=="yes"){
    grade++;
}

var answer3=prompt("I dont know anything about unity engine ? Y/N ")
while (answer3.toLowerCase()!=="n" &&  answer3.toLowerCase()!=="no"){
    alert("wrong answer")
    answer3=prompt("I dont know anything about unity engine ? Y/N ")
} 
if (answer3.toLowerCase()=="n" || answer3.toLowerCase()=="no"){
    grade++;
} 
      
var answer4=prompt("I am a game developer ? Y/N ")
while (answer4.toLowerCase()!=="y" && answer4.toLowerCase()!=="yes"){
    alert("wrong answer")
    answer4=prompt("I am a game developer ? Y/N ")
}
if (answer4.toLowerCase()=="y" || answer4.toLowerCase()=="yes"){
    grade++;
}
var answer5=prompt("its not ayoub website ? Y/N ")
while (answer5.toLowerCase()!=="n" && answer5.toLowerCase()!=="no"){
    alert("wrong answer")
    answer5=prompt("its not ayoub website ? Y/N ")
}

 if (answer5.toLowerCase()=="n" || answer5.toLowerCase()=="no"){
    grade++;
}
//console.log(grade);
alert( name+ " grade "+grade +"/5");


document.getElementById("name").innerHTML="Hello MR  "+name;

}
