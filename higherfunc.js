function repeat (func , num){
    for(var i = 0; i < num ; i++){
        // if(repeat(Bye,9)===true){
        //     Bye()
        // }
        // else(
        //     Welcome()
        // )
        Bye()
    }
}

function Welcome (){
console.log('Hey! Welcome')
}

function Bye (){
console.log('Okay! Bye')
}

console.log(repeat(Bye,9))