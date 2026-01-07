//object destruction

const course = {
    name:"js",
    price:500,
    courseInstructor:"disha"
}

course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);//disha

const {courseInstructor:instructor} = course

console.log(instructor);//disha

const navbar = ({company}) => {

}

navbar(company ="disha")
//{} are used for destructuring objects

//API
//json structure is like object without name and it has key value pair

/*{
    "name" : "disha",
    "coursename" : "js",
    "price" : "free"
}*/

[
    {},
    {}
]
//json is js notation