//singleton
//if declared from constructor then it is singleton
//if deckared from literals then not singleton

//object literals

const mySymbol = Symbol('key1')

const jsUser = {
    name:"disha",
    age:20,
    location:"Pune",
    email:"disha@gmail.com",
    isLoggedIn :false,
    lastLogIn:["mon","wed"],
    "full name" :"disha shirsat",
    [mySymbol] :"mykey1"
}

console.log(jsUser.name);//disha
console.log(jsUser["name"]);//disha
console.log(jsUser["full name"]);//disha shirsat

console.log(jsUser[mySymbol]);//mykey1
console.log(typeof jsUser[mySymbol]);//string
 
jsUser.email ="disha12@gmail.com"

//Object.freeze(jsUser)

jsUser.email ="disha1203@gmail.com"
console.log(jsUser);
/*{
  name: 'disha',
  age: 20,
  location: 'Pune',
  email: 'disha12@gmail.com',
  isLoggedIn: false,
  lastLogIn: [ 'mon', 'wed' ],
  'full name': 'disha shirsat',
  Symbol(key1): 'mykey1'
}*/

jsUser.greeting = function(){
    console.log("Hello js User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User , ${this.name}`);
}
console.log(jsUser.greeting);//[Function (anonymous)]

console.log(jsUser.greeting());//Hello js User

console.log(jsUser.greetingTwo());//Hello js User , disha

const linkedInUser1 = new Object()//singleton object

const linkedInUser2 ={}//non-singleton object

linkedInUser2.id ="disha12"
linkedInUser2.name = "disha"
linkedInUser2.isLoggedin = false;
//{ id: 'disha12', name: 'disha', isLoggedin: false }

console.log(linkedInUser1);

console.log(linkedInUser2);

const regularUser = {
    email :"disha1203@gmail.com",
    fullname:{
        userfullname:{
            firstname:"disha",
            lastname:"shirsat"
        }
    }
}

console.log(regularUser.fullname);//{ userfullname: { firstname: 'disha', lastname: 'shirsat' } }

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3 ={...obj1,...obj2}
console.log(obj3);

const obj4= Object.assign({},obj1,obj2)
console.log(obj4);

const users =[
    {

    },
    {

    }
]

users[1].email

console.log(Object.keys(linkedInUser2));//[ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(linkedInUser2));//[ 'disha12', 'disha', false ]
console.log(Object.entries(linkedInUser2));//[ [ 'id', 'disha12' ], [ 'name', 'disha' ], [ 'isLoggedin', false ] ]
console.log(linkedInUser2.hasOwnProperty('id'));//true 