//strins
//strins are declared in both single and double quotes

const name = "disha" 

const repoCount = 15

console.log(name + repoCount + "value");//out dated syntax
//disha15value

//use bactix  ``
//string interpolation
console.log(`my name is ${name} and my repo count is ${repoCount} value`)
//my name is disha and my repo count is 15 value

//string declare

const gameName = new String("subwaySurf")

console.log(gameName[0]);//s

console.log(gameName.__proto__);//{}

console.log(gameName.length);//10

console.log(gameName.toUpperCase());//SUBWAYSURF

console.log(gameName.charAt(2));//b

console.log(gameName.indexOf('a'));//4

//substring
//substring ignores negative value
const newString = gameName.substring(0,4)
const anotherSubString = gameName.substring(-8,4)//subw

console.log(newString);//subw
console.log(anotherSubString);//

//last value of index is not included

//slice
//uses negative values also
//value starts from backward
const anotherString = gameName.slice(-8,4)
console.log(anotherString);//bw


//trim
//remove empty space from start and end
const newStringOne = "   disha   "

console.log(newStringOne);//   disha  

console.log(newStringOne.trim());//disha

//replace
const url ="https://disha.com/disha%20shirsat"


console.log(url.replace('%20', '-'))//https://disha.com/disha-shirsat

console.log(url);//https://disha.com/disha%20shirsat


console.log(url.includes('disha'))//true

const game = "angry-B-irds"

console.log(game.split('-'));//[ 'angry', 'B', 'irds' ]

