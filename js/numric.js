'use strict'
var grade=0;
function startgame(){




    
     ques1();
    
    ques2();
     ques3();

    ques4();

/*chance=4;
var numanswer5=prompt("odd number < 80"+" guess a number?");
parseInt(numanswer5);



while(numanswer5!=67&&chance>0){
    chance--;
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
chance=4;
var numanswer6=prompt("even number <80"+" guess a number?");
parseInt(numanswer6);

while(numanswer6!=46&&chance>0){
  chance--;  
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
*/
alert("your grade "+grade+"/4");
grade=0;

function ques4() {
   var chance = 3;
    var numanswer4 = prompt("0<number<50" + " guess a number?");
    parseInt(numanswer4);
    while (numanswer4 != 8 && chance > 0) {
  
        if (numanswer4 >= 3 && numanswer4 <= 13 && numanswer4 != 8) {
            chance--;
            alert("wrong answer (too high)");
             numanswer4 = prompt("0<number<50" + " guess a number?");
            parseInt(numanswer4);
        }

   else  if (numanswer4 < 3 || numanswer4 > 13) {
            chance--;
            alert("wrong answer (too low)");
             numanswer4 = prompt("0<number<50" + " guess a number?");
            parseInt(numanswer4);
        }else{numanswer4=-2;}
        
    }

    if(chance<=0&&numanswer4!=8){
        alert("correct answer is 8");
    }


    if (numanswer4==8) {
        alert("correct answer");
        grade++;
        console.log("s");
    }

}
function ques3() {
    var chance = 3;
    var numanswer3 = prompt("even number <50" + " guess a number?");
    parseInt(numanswer3);
    while (numanswer3 != 24 && chance > 0) {
       
        if (numanswer3 >= 16 && numanswer3 <= 30 && numanswer3 != 24) {
            chance--;
            alert("wrong answer (too high)");
            var numanswer3 = prompt("even number <50" + " guess a number?");
            parseInt(numanswer3);
        }

        else if (numanswer3 < 16 || numanswer3 > 30) {
            chance--;
            alert("wrong answer (too low)");
            var numanswer3 = prompt("even number <50" + " guess a number?");
            parseInt(numanswer3);
        }
else{numanswer3=-2;}
    }
    if(chance<=0&&numanswer3!=24){
        alert("correct answer is 24");
    }
    if (numanswer3 == 24) {
        alert("correct answer");
        grade++;
        console.log("s");
    }
  
}

function ques2() {
    var chance = 3;
    var numanswer2 = prompt("odd number <50", " guess a number?");
    parseInt(numanswer2);

    while (numanswer2 != 33 && chance > 0) {
        
        if (numanswer2 >= 27 && numanswer2 <= 38 && numanswer2 != 33) {
            chance--;
            alert("wrong answer (too high)");

            var numanswer2 = prompt("odd number <50", " guess a number?");
            parseInt(numanswer2);

        }

        else if (numanswer2 < 27 || numanswer2 > 38) {
            chance--;
            alert("wrong answer (too low)");
            var numanswer2 = prompt("odd number <50", " guess a number?");
            parseInt(numanswer2);
        }
        else{numanswer2=-2;}

    }

    if(chance<=0&&numanswer2!=33){
        alert("correct answer is 33");
    }
    if (numanswer2 == 33) {
        alert("correct answer");
        grade++;
        console.log("s");
    }
    
}


function ques1() {
    var numanswer1 = prompt("0<number<20" + " guess a number?");
    parseInt(numanswer1);

    var chance = 3;

    while (numanswer1 != 15 && chance > 0) {


        if (numanswer1!= 15 && numanswer1 >= 10 && numanswer1 <= 20) {
            chance--;

            alert("wrong answer (too high)");
             numanswer1 = prompt("0<number<20" + " guess a number?");
            parseInt(numanswer1);

        }
        else if (numanswer1<10 || numanswer1>20) {
            chance--;

            alert("wrong answer (too low)");
            var numanswer1 = prompt("0<number<20" + " guess a number?");
            parseInt(numanswer1);
        } else{numanswer1=-2;}





    }
    if(chance<=0&&numanswer1!=15){
        alert("correct answer is 15");
    }

    if (numanswer1 == 15) {
        alert("correct answer");
   grade++;
   console.log("s");
    }
    
}
}