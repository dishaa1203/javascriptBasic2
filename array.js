//array is object
//collection of multiple items in single variable
//js array are resizable
//mix of datatypes
//array can be acessed using index
//array makes shallow copy
//changes are made in original 

const myArray =[0,1,2,3,4,5]

const hero = ["spiderman" ,'ironman']

console.log(myArray[0])

const myArr =new Array(1,2,3,4)

console.log(myArr[1])

//array methods

myArr.push(6)
console.log(myArr);//[ 1, 2, 3, 4, 6 ]

myArr.push(7)
console.log(myArr);//[ 1, 2, 3, 4, 6, 7 ]

//myArr.pop()
console.log(myArr);//[ 1, 2, 3, 4, 6 ]
//pop removes last element of array

myArr.unshift(8)
console.log(myArr);//[8, 1, 2, 3, 4, 6, 7]
//adds element at the start of array

myArr.shift()
console.log(myArr);//[ 1, 2, 3, 4, 6, 7 ]
//removes element from start of array

console.log( myArr.includes(6));//true

console.log( myArr.indexOf(6));//4

console.log( myArr.indexOf(9));//-1
//value does not exist

const newArr = myArr.join()
//values of array are joined in a string 
// its datatype is also a string

console.log(newArr);//1,2,3,4,6,7

//slice , splice

console.log("A" , myArr);//A [ 1, 2, 3, 4, 6, 7 ]

const myn1 = myArr.slice(1,3)

console.log(myn1);//[ 2, 3 ]

console.log("B" ,myArr);//B [ 1, 2, 3, 4, 6, 7 ]

const myn2 = myArr.splice(1,3)

console.log(myn2);//[ 2, 3, 4 ]

console.log("C" , myArr);//C [ 1, 6, 7 ]


//in slice the original array remains same only the sliced part of array is printed and range does not include its last index

//in splice the original array is cahanged and it only contains values which are not in splice range
//only spliced values are printed and it includes last index

const marvelHeros = ["spiderman","ironman","thor"]

const dcHeros = ["batman","flash","superman"]

//marvelHeros.push(dcHeros)

//console.log(marvelHeros);//[ 'spiderman', 'ironman', 'thor', [ 'batman', 'flash', 'superman' ] ]
//array is inside array
//array takes any data types
//push works on original array

//console.log(marvelHeros[3][1]);//flash

concatHeros=marvelHeros.concat(dcHeros)
console.log(concatHeros);//[ 'spiderman', 'ironman', 'thor', 'batman', 'flash', 'superman' ]

//concat push elements on new arrya
//no changes are made in original array

const allHerose = [...marvelHeros, ...dcHeros]

console.log(allHerose);//[ 'spiderman', 'ironman', 'thor', 'batman', 'flash', 'superman' ]
//spread can can combine more than two arrays

const antherArray =[1,2,3,[3,4,5,6,6],5,3,4,[5,4,3,[4,5,3]]]

const realAnotherArray = antherArray.flat(Infinity)
console.log(realAnotherArray);
/*[
  1, 2, 3, 3, 4, 5, 6,
  6, 5, 3, 4, 5, 4, 3,
  4, 5, 3
]*/

console.log(Array.isArray("disha"));//false

console.log(Array.from("disha"));//[ 'd', 'i', 's', 'h', 'a' ]

console.log(Array.from({name : "disha"}));//[] it is an interesting case we need to specify how to devide into array

let score1 =120
let score2 =324
let score3 =244

console.log(Array.of(score1,score2,score3));//[ 120, 324, 244 ]
