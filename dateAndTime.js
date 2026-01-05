//Dates in js
//date is object

let myDate = new Date()

console.log(myDate);//2026-01-05T13:35:24.434Z

console.log(myDate.toString());//Mon Jan 05 2026 19:06:25 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());//Mon Jan 05 2026

console.log(myDate.toISOString());//2026-01-05T13:38:54.070Z

console.log(myDate.toJSON());//2026-01-05T13:38:54.070Z

console.log(myDate.toLocaleDateString());//5/1/2026

console.log(myDate.toLocaleString());//5/1/2026, 7:09:45 pm

console.log(myDate.toLocaleTimeString());//7:09:45 pm

console.log(typeof myDate);
//date is object


let myCreatedDate = new Date(2026,1,5)
console.log(myCreatedDate.toDateString());//Thu Feb 05 2026

let myCreatedDateNew = new Date(2025,3,4,4)
console.log(myCreatedDateNew.toDateString());//Fri Apr 04 2025

let myCreatedDateNew1 = new Date("2026-3-4")
console.log(myCreatedDateNew1.toDateString());//Wed Mar 04 2026

let myCreatedDateNew2 = new Date("12-3-2026")
console.log(myCreatedDateNew2.toDateString());//Thu Dec 03 2026

//timesatmp

let myTimeStamp =Date.now()

console.log(myTimeStamp);//1767620896507
//milisecond value

console.log(myCreatedDate.getTime());//1770229800000

console.log(Math.floor(Date.now()/1000));//1767621059

let newDate = new Date()
console.log(newDate);//2026-01-05T13:53:51.469Z

console.log(newDate.getDate());//5

console.log(newDate.getMonth()+1);//1

console.log(newDate.getDay());//1

console.log(newDate.getTime());//1767621184190

newDate.toLocaleString('dafault',{
    weekday:"long"
})