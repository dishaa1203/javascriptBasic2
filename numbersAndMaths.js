//numbers

const score = 4224

console.log(score)//4224

const balance = new Number(2090)

console.log(balance);//[Number: 2090]

console.log(balance.toString());//2090

console.log(balance.toString().length);//4

console.log(balance.toFixed(4));//[Function: toFixed] //op=>2090.0000

const otherNumber = 324.324324

console.log(otherNumber.toPrecision(3));//324 // the decimal value before the point should be known 
// as precision only works if the numbers of digits after decimal are known

const hundreads = 209800787
console.log(hundreads.toLocaleString('en-IN'));//20,98,00,787

//Maths
//by default js has maths library

console.log(Math);//Object [Math] {}

console.log(Math.abs(-4));//4
//abs convert negative value to poitive value

console.log(Math.round(4.3));//4

console.log(Math.ceil(4.3));//5 choose higher value

console.log(Math.floor(4.3));//4 choose lower value

console.log(Math.sqrt(4.3));//2.073644135332772

console.log(Math.min(3,54,2,23,233,323));//2
//minimum value in array

console.log(Math.random());//0.21850977435857888
// give random value between 0 to 1

console.log(Math.random()*10+1)
//gives values between 1 to 10

console.log((Math.random()*10)+1)

console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+ min);
//gives value between min and max 
//+1 avoids 0 
//adding min makes sure number is greater than or equal to min 