// //1- overwrite value while making new object using Object.assign

// let student =
// {
// name:"Noman",
// age:14,
// class:9,
// course:{
//     courseSelected:"islamiat"
// }

// }

// //overwirte name "noman" into sami and nested object overwrite courseSelected islamiat into physics

// var newStudent = Object.assign({},student,{name:"sami",course:{courseSelected:"physics"}})
// console.log(student)
// console.log(newStudent)



// //2- nested ternary operator

// let marksGet = 80;

// let result = marksGet>=50 ?          //ternery operter
// 80 <= marksGet ? "A+":70 <= marksGet? "A":"pass"         //nested ternery operetor
// :"fail" //working as else
// console.log(result)



//// 3- for in and for of loop
// let employee=
// {
//     name:"kashan",
//     design:"Manager",
//     salary:50000,
//     dateOfJoining:"24-oct-2014"
// }

//// for in loop
// for (var key in employee)
// {
//     console.log(key,employee[key]) //print keys in object employee
// }



//for of loop using object
// for(var k of Object.keys(employee)) // object is not iterable that's why use object.keys
// {
//     console.log(k) //print value of arry
// }



//for of loop using arry
// var arry = ["apple","mango","banana"]
//  for(var x of arry)
//  {
//     console.log(x)
//  }


//// 4- What is arrow function?
// arrow function with default return 
// var x = ()=> "hellow";
// console.log(x())

// arrow function with parameter
// var x =(a,b) => a+b;
// console.log(x(1,2))


//arrow function with out parentheses

//var x = a => 4 +a;
//console.log(x(1))