var systemGuess=Math.floor(Math.random()*100)+1
var guess=0
function guessNumber(){
    var num = document.getElementById("in").value
    if (num === '' || num>100 || num<1){
       console.log("Invalid input")
    }
    else {
    guess++
    var input=document.getElementById("in");
    var num = parseInt(input.value) //fetching value entered in input box
    console.log(typeof(num))

    if(num === systemGuess) {
        console.log("Got the answer correctly")
        document.getElementById("out").innerHTML+=" <i>Got the answer correctly</i>"
    } 
    else if(num > systemGuess) {
         console.log("Guess a smaller number")
         document.getElementById("out").innerText+=" Guess a smaller number"

    }
    else {
        console.log("Guess a larger number")
        document.getElementById("out").innerText+=" Guess a larger number"

    }
}
    
}