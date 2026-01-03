//stack (primitive)
//get a copy of value
//changes are made in copy

let myName = "disha"


let anotherName = myName

anotherName = "shreya"

console.log(myName);//disha

console.log(anotherName);//shreya



//heap (non primitive)
//get a reference of original value
//changes are made in the original value

let user1 = {
    email: "user1@gmail.com",
    upi:"user@ybl"

}


let user2 =user1

user2.email ="user2@gmail.com"

console.log(user1.email);//user2@gmail.com

console.log(user2.email);//user2@gmail.com













