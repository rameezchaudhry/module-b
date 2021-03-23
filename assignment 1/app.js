//destructuring of nested array

// //nested array
// let student =["umair",21,["graduate","1st division"]];

// //destructuring nested arry
// let [name,age,[qualification,grade]] = student;

// //print on console
// console.log(name,age,qualification,grade)


// //destructuring of nested array with rest operator

// //nested array
// let student =["umair",21,"graduate","1st division"];

// //destructuring nested arry with res
// let [name,age,...rest] = student;

// //print on console
// console.log(name,age,rest);


////extracting of keys and values from an object.
//object

// let employee ={
//         name:"azhar",
//         age:40,
//         salary:40000,
//         designation:"manager"
// }

// //extracting keys from an object

// let objectKeys = Object.keys(employee);
// console.log(objectKeys);

// //extracting value from an object
// let objectValue = Object.values(employee)
// console.log(objectValue)


//extracting key and value from an object another way

// for(var key in employee)
// {
//     console.log(key,employee[key])

// }