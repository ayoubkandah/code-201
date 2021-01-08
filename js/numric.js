

function startgame(){
'use strict'
var numanswer1=prompt("0<number<20"+" guess a number?");

var grade=0;
var triger1=false;
var triger2=false;
var triger3=false;
var triger4=false;
var triger5=false;
var triger6=false;

parseInt(numanswer1);




while(numanswer1!=15 ){
    

    if(numanswer1!=15&& numanswer1 >=10 && numanswer1 <=20  ){
   
        alert("wrong answer (too high)")
        var numanswer1=prompt("0<number<20"+" guess a number?");
        parseInt(numanswer1);
        
    }

   
   
        if (   numanswer1<10 || numanswer1>20 ){
        
                alert("wrong answer (too low)")
                var numanswer1=prompt("0<number<20"+" guess a number?");
        parseInt(numanswer1);
            }
    
        }

if(numanswer1==15){
    alert("correct answer");
    grade++;
}

var numanswer2=prompt("odd number <50"," guess a number?");
parseInt(numanswer2);

while(numanswer2!=33){
    
    if(numanswer2 >=27 && numanswer2 <=38 && numanswer2!=33){
        alert("wrong answer (too high)")
        var numanswer2=prompt("odd number <50"," guess a number?");
        parseInt(numanswer2);

    }
   
        if (numanswer2<27 || numanswer2>38 ){
            alert("wrong answer (too low)")
            var numanswer2=prompt("odd number <50"," guess a number?");
    parseInt(numanswer2);
        }
    
}
if(numanswer2==33){
    alert("correct answer");
    grade++;
}

var numanswer3=prompt("even number <50"+" guess a number?");
parseInt(numanswer3);
while(numanswer3!=24){
    
    if(numanswer3 >=16 && numanswer3 <=30 && numanswer3!=24 ){
        alert("wrong answer (too high)")
var numanswer3=prompt("even number <50"+" guess a number?");
parseInt(numanswer3);
    }
    
        if (numanswer3<16 || numanswer3>30 ){
            alert("wrong answer (too low)")
            var numanswer3=prompt("even number <50"+" guess a number?");
    parseInt(numanswer3);
        }
    
}
if(numanswer3==24){
    alert("correct answer");
    grade++;
}


var numanswer4=prompt("0<number<50"+" guess a number?");
parseInt(numanswer4);
while(numanswer4!=8){
    
    if(numanswer4 >=3 && numanswer4 <=13&&numanswer4!=8){
        alert("wrong answer (too high)")
var numanswer4=prompt("0<number<50"+" guess a number?");
parseInt(numanswer4);
    }
    
        if (numanswer4<3 || numanswer4>13){
            alert("wrong answer (too low)")
            var numanswer4=prompt("0<number<50"+" guess a number?");
    parseInt(numanswer4);
        }
    
}
if(numanswer4==8){
    alert("correct answer");
    grade++;
}


var numanswer5=prompt("odd number < 80"+" guess a number?");
parseInt(numanswer5);



while(numanswer5!=67){
    
    if(numanswer5 >=61 && numanswer5 <=75&& numanswer5!=67){
        alert("wrong answer (too high)")
var numanswer5=prompt("odd number < 80"+" guess a number?");
parseInt(numanswer5);
    }
   
        if (numanswer5<61 || numanswer5>75){
            alert("wrong answer (too low)")
        var numanswer5=prompt("odd number < 80"+" guess a number?");
parseInt(numanswer5);
        }
    
}
if(numanswer5==67){
    alert("correct answer");
    grade++;
}
var numanswer6=prompt("even number <80"+" guess a number?");
parseInt(numanswer6);

while(numanswer6!=46){
    
    if(numanswer6 >=38 && numanswer6 <=54 && numanswer6!=46){
        alert("wrong answer (too high)")
var numanswer6=prompt("even number <80"+" guess a number?");
parseInt(numanswer6);
    }
    
        if (numanswer6<38 || numanswer6>  54){
            alert("wrong answer (too low)")
            var numanswer6=prompt("even number <80"+" guess a number?");
    parseInt(numanswer6);
        }
    
}
if(numanswer6==46){
    alert("correct answer");
    grade++;
}

alert("your grade "+grade+"/6");
}