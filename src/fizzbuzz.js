const answer = []

// Write your code below this line

for (let index = 1; index < 16; index++) {
    if(index % 3 == 0 && index % 5 == 0){
        answer.push("FizzBuzz")
    }
    else if(index % 3 == 0){
        answer.push("Fizz")
    } else if(index % 5 == 0){
        answer.push("Buzz")
    } else {
        answer.push(index)
    }
    
}



// Don't touch the code below this line, we'll cover it later
module.exports = answer
