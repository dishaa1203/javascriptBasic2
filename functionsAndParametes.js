//functions
//can call a function many times
//it represent copy of code 

function sayMyName(){
    console.log("d");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    
}

sayMyName()
//d
//i
//s
//h
//a

function addTwoNumbers(a,b){
    sum=a+b
    console.log(sum)
}
//here a and b are parameters 

addTwoNumbers(4,5)//9
//here 4 and 5 are arguments passed to the function

addTwoNumbers("a",5)//a5

addTwoNumbers("3",5)//35

const result = addTwoNumbers(8,5)//13

console.log(result);//undefined
//the result does not store the value 

function additionTwoNum(a,b){
    let sum=a+b
    //console.log(sum);
    return sum
}
// after return statement in function no code runs

const ans = additionTwoNum(7,8)//15
//console.log(ans);//15

function loginUserMessage(username="sam"){//gives default value sam
    if(username === undefined){//!username
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("disha"));//disha just logged in
 
console.log(loginUserMessage());//undefined just logged in