var yourAge = 30
var myAge = 21

if (myAge < yourAge){
    console.log("I Shouldn't have mess with you")
}



//This programm will show 'even' age only 


for(myAge = 21 ; myAge <= 31 ; myAge++){
    if(myAge % 2 == 1){
          continue;
        }
        console.log(myAge)
    }