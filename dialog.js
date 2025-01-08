//Confirmation Dialog Box
// var retVal = confirm("Do you want to continue ?"); if( retVal == true ){ 
//     alert("User wants to continue!"); 
//     }else{ 
//     alert("User does not want to continue!"); 
//     } 
//Prompt Dialog Box
// var retVal = prompt("Enter your name : ", "your name here"); 
// alert("You have entered : " + retVal ); 

//all dialog boxes included
var question="What is 10+10";
    var answer=20;
    var correct='<img src="1.jpg" height="150" widht="250">';
    var incorrect='<img src="love.jpg" height="150" widht="250">';
    var response=prompt(question,"0");
    for(count=0;count<3;count++)
    {
     if(response!=answer)
     {
       confirm("Wrong,Press OK for another chance");
       response=prompt(question,"0");
       if(count==1)
       {
        alert("Better luck next time");
        }
          }
          else
          {
            alert("Great!! you are right");
            count=3;
            }
              }
var output=(response==answer)?correct:incorrect;
    document.write("</BR>");
    document.write(output);
