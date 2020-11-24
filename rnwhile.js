var random = true

while(random){
    var num = Math.round(Math.random()*10 +1)
    if (num === 6){
        console.log('Winner')
        random = false
    }
    else{
        console.log('We got Number : ' + num)
    }
}