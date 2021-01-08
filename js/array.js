 function startgamearray() {
    "use strict"
    var gradest = 0;

   var NextQuesTrig=false;

     fun6();

     fun7();

     fun8();

     fun9();

   fun10();

     fun11();
    fun12();



    function correctAns(array,messg,bool){
        bool=false;
        
        for (var x =0 ; x<array.length;x++){
     
     if(messg.toLowerCase()==array[x]){
         bool=true
         NextQuesTrig=true;
         gradest++;
      
      
     }
      if(bool){
       
          alert("correct answer");
        
        break;
         
      } 
    
    }

   
}

    function fun6() {
        var chance=4;
        
        var ganswer1 = ["maxioma", "cgtrade", "turboSquid", "unityfreaks", "udemi", "facebook"];
  

    while(chance>0&&!NextQuesTrig){
        var guesanswer1 = prompt("Q 1/7 "+"What my favourit web applications ? "+"chance "+chance);
     correctAns(ganswer1,guesanswer1);
     
     if(!NextQuesTrig){alert("wrong answer");}
     chance--;
    }
    alert("correct answer possible answer maxioma cgtrade" + " turboSquid" + " unityfreaks" + " udemi" + " facebook");
    NextQuesTrig=false;

    //    if(guesanswer1.toLowerCase==correctAns(ganswer1)){
    //        alert("yes");
    //    }


            // if (guesanswer1.toLowerCase()==correctAns(ganswer1)){
            //     alert("correct");
            //     }

           /* alert("wrong answer");
            guesanswer1 = prompt("What my favourit web applications ?");
            }*/
       /* while (!ganswer1.includes(guesanswer1.toLowerCase())) {
            alert("wrong answer");
            guesanswer1 = prompt("What my favourit web applications ?");
        }
        if (ganswer1.includes(guesanswer1.toLowerCase())) {
            alert("correct answer possible answer maxioma cgtrade" + " turboSquid" + " unityfreaks" + " udemi" + " facebook");
            gradest++;
            console.log(gradest);
        }*/

    }
    function fun7() {
        var chance=4;
        
        var ganswer2 = ["3ds max", "unity engine", "photoshop", "after effects", "adobe", "paint"];

        while(chance>0&&!NextQuesTrig){
            var guesanswer2 = prompt("Q 2/7"+"What my favourit programs ?"+" chance "+chance );
         correctAns(ganswer2,guesanswer2);
         if(!NextQuesTrig){alert("wrong answer");}
         chance--;
        }

        alert("correct answer possible answer  3ds max" + " unity engine" + " photoshop" + " after effects" + " adobe" + " paint");
        NextQuesTrig=false;


        /*
        while (!ganswer2.includes(guesanswer2.toLowerCase())) {
            alert("wrong answer");
            var guesanswer2 = prompt("What my favourit web programes ?");
        }
        if (ganswer2.includes(guesanswer2.toLowerCase())) {
            alert("correct answer possible answer  3ds max" + " unity engine" + " photoshop" + " after effects" + " adobe" + " paint");
            gradest++;
            console.log(gradest);
        }*/
    }
    function fun8() {
        var chance=4;
        var ganswer3 = ["blue", "grey", "white", "red", "black", "green"];

        while(chance>0&&!NextQuesTrig){
            var guesanswer3 = prompt("Q 3/7 "+"What my favourit colors ?"+" chance "+chance);
         correctAns(ganswer3,guesanswer3);
         if(!NextQuesTrig){alert("wrong answer");}
         chance--;
        }
        alert("correct answer possible answer " + " blue" + " grey" + " white" + " red" + " black" + " green");
        NextQuesTrig=false;

       /* while (!ganswer3.includes(guesanswer3.toLowerCase())) {
            alert("wrong answer");
            var guesanswer3 = prompt("What my favourit colors ?");
        }
        if (ganswer3.includes(guesanswer3.toLowerCase())) {
            alert("correct answer possible answer " + " blue" + " grey" + " white" + " red" + " black" + " green");
            gradest++;
            console.log(gradest);
        }
*/
    }
    function fun9() {
       
        var chance=4;
        var ganswer4 = ["barcelona", "inter milan", "argentina", "jordan", "brazil", "urguay"];

         while(chance>0&&!NextQuesTrig){
            var guesanswer4 = prompt("Q 4/7 "+"what my favorite team ?"+" chance "+chance);
         correctAns(ganswer4,guesanswer4);
         if(!NextQuesTrig){alert("wrong answer");}
         chance--;
        }
        alert("correct answer possible answer " + " barcelona" + " inter milan" + " argentina" + " jordan" + " brazil" + " urguay");
        NextQuesTrig=false;
       /* while (!ganswer4.includes(guesanswer4.toLowerCase())) {
            alert("wrong answer");
            var guesanswer4 = prompt("what my favorite team ?");
        }
        if (ganswer4.includes(guesanswer4.toLowerCase())) {
            alert("correct answer possible answer " + " barcelona" + " inter milan" + " argentina" + " jordan" + " brazil" + " urguay");
            gradest++;
            console.log(gradest);
        }
*/
    }
    function fun10() {
        var chance=4;
        var ganswer5 = ["soccer", "body building", "swimming", "bing bong", "billiard", "basketball"];

        while(chance>0&&!NextQuesTrig){
            var guesanswer5 = prompt("Q 5/7 "+"what my favorite sports ?"+" chance "+chance);
         correctAns(ganswer5,guesanswer5);
         if(!NextQuesTrig){alert("wrong answer");}
         chance--;
        }
        alert("correct answer possible answer " + " soccer" + " body building" + " bing bong" + " billiard" + " basketball" + " swimming");
        NextQuesTrig=false;
       /* while (!ganswer5.includes(guesanswer5.toLowerCase())) {
            alert("wrong answer");
            var guesanswer5 = prompt("what my favorite sports ?");
        }
        if (ganswer5.includes(guesanswer5.toLowerCase())) {
            alert("correct answer possible answer " + " soccer" + " body building" + " bing bong" + " billiard" + " basketball" + " swimming");
            gradest++;
            console.log(gradest);
        }
*/
    }
    function fun11() {
        var chance=4;
        var ganswer6 = ["bmw", "marcedes", "porshe", "firari", "cadilak", "aston martin"];
        while(chance>0&&!NextQuesTrig){
            var guesanswer6 = prompt("Q 6/7 "+"what my favorite cars ?"+" chance "+chance);
         correctAns(ganswer6,guesanswer6);
         if(!NextQuesTrig){alert("wrong answer");}
         chance--;
        }
        alert("correct answer possible answer " + " bmw" + " marcedes" + " porshe" + " firari" + " cadilak" + " aston martin");
        NextQuesTrig=false;
/*
        while (!ganswer6.includes(guesanswer6.toLowerCase())) {
            alert("wrong answer");
            var guesanswer6 = prompt("what my favorite cars ?");
        }
        if (ganswer6.includes(guesanswer6.toLowerCase())) {
            alert("correct answer possible answer " + " bmw" + " marcedes" + " porshe" + " firari" + " cadilak" + " aston martin");
            gradest++;
            console.log(gradest);
        }
*/
    }
    function fun12() {
        var chance=4;
        var ganswer7 = ["img", "h1", "p", "nav", "ol", "border"];
        while(chance>0&&!NextQuesTrig){
            var guesanswer7 = prompt("Q 7/7 "+"what element i used for my website ?"+" chance "+chance);
         correctAns(ganswer7,guesanswer7);
         if(!NextQuesTrig){alert("wrong answer");}
         chance--;
        }
        alert("correct answer possible answer " +"p" + " img" + " h1" + " nav"  + " ol" + " border");
        NextQuesTrig=false;

       /* while (!ganswer7.includes(guesanswer7.toLowerCase())) {
            alert("wrong answer");
            var guesanswer7 = prompt(" what element i used for my website ?");
        }
        if (ganswer7.includes(guesanswer7.toLowerCase())) {
            alert("correct answer possible answer " p" + " img" + " h1" + " nav"  + " ol" + " border");
            gradest++;
            console.log(gradest);
        }*/

    }
    alert("your grade " + gradest + "/7");







}